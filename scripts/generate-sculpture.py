"""Render the hero sculpture: a bundle of twisting metallic filaments on a
transparent background. The liquid hero samples its particles from these pixels.

    python3 scripts/generate-sculpture.py

Writes public/sculpture/sculpture-wide.webp and sculpture-tall.webp.
"""

import math
import random
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

OUT = Path(__file__).resolve().parent.parent / "public" / "sculpture"
ACCENT = np.array([0.55, 1.0, 0.72])  # acid green, a nod to the old matrix rain


def render(width, height, horizontal, seed, strands=240, ss=2):
    rng = random.Random(seed)
    W, H = width * ss, height * ss
    acc = np.zeros((H, W, 3), np.float32)
    alpha = np.zeros((H, W), np.float32)

    # long axis of the form, in pixels
    length = (W if horizontal else H) * 0.86
    thick = (H if horizontal else W) * 0.34
    steps = int(length * 1.6)
    t = np.linspace(0.0, 1.0, steps)
    # envelope: tapers to fine points at both ends, swells off-centre
    env = np.sin(np.pi * t) ** 0.8 * (0.75 + 0.35 * np.sin(2 * np.pi * t + 0.9))

    for k in range(strands):
        phase = rng.uniform(0, 2 * math.pi)
        r = rng.uniform(0.25, 1.0)
        twist = rng.choice([1.0, 1.5, 2.0]) * (1 if k % 3 else -1)
        wobble = rng.uniform(0.0, 0.18)
        ang = phase + 2 * math.pi * twist * t + wobble * np.sin(9 * t + phase)
        across = env * r * np.cos(ang) + 0.32 * np.sin(2 * math.pi * t + 0.4)
        depth = env * r * np.sin(ang)  # -1 back .. 1 front
        along = (t - 0.5) * length
        u = along
        v = across * thick
        if horizontal:
            xs, ys = W / 2 + u, H / 2 + v
        else:
            xs, ys = W / 2 + v * 0.9, H / 2 + u
        shade = 0.28 + 0.72 * (depth + 1) / 2  # front strands are brighter
        spec = np.clip((depth - 0.55) / 0.45, 0, 1) ** 2  # hot highlight on the front
        tint = rng.random() < 0.12
        xi = np.clip(xs.astype(int), 0, W - 1)
        yi = np.clip(ys.astype(int), 0, H - 1)
        for dx, dy, wgt in ((0, 0, 1.0), (1, 0, 0.7), (0, 1, 0.7), (1, 1, 0.5), (-1, 0, 0.35), (0, -1, 0.35)):
            xx = np.clip(xi + dx, 0, W - 1)
            yy = np.clip(yi + dy, 0, H - 1)
            base = shade[:, None] * (ACCENT if tint else np.array([0.86, 0.88, 0.9]))
            col = base + spec[:, None] * 0.6
            np.add.at(acc, (yy, xx), col * wgt)
            np.add.at(alpha, (yy, xx), wgt * (0.35 + 0.65 * shade))

    # loose particles drifting off the form
    for _ in range(int(W * H / 220)):
        tt = rng.random()
        e = math.sin(math.pi * tt) ** 0.8
        spread = rng.gauss(0, 0.75) * thick * (0.4 + e)
        along = (tt - 0.5) * length * 1.08
        x, y = (W / 2 + along, H / 2 + spread) if horizontal else (W / 2 + spread, H / 2 + along)
        if 0 <= x < W and 0 <= y < H:
            b = rng.uniform(0.35, 1.0)
            for dx, dy in ((0, 0), (1, 0), (0, 1), (1, 1)):
                yy, xx = min(int(y) + dy, H - 1), min(int(x) + dx, W - 1)
                acc[yy, xx] += (ACCENT if rng.random() < 0.2 else np.ones(3)) * b
                alpha[yy, xx] += b

    a = np.clip(alpha, 0, 1)
    rgb = np.where(alpha[..., None] > 0, acc / np.maximum(alpha[..., None], 1e-6), 0)
    rgb = np.clip(rgb, 0, 1)
    img = Image.fromarray((np.dstack([rgb, a]) * 255).astype(np.uint8), "RGBA")
    img = img.filter(ImageFilter.GaussianBlur(0.6 * ss)).resize((width, height), Image.LANCZOS)
    return img


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    render(1980, 790, True, seed=7).save(OUT / "sculpture-wide.webp", quality=88, method=6)
    render(900, 1200, False, seed=11, strands=120).save(OUT / "sculpture-tall.webp", quality=88, method=6)
    print("wrote", *sorted(p.name for p in OUT.iterdir()))
