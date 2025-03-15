document.addEventListener("DOMContentLoaded", () => {
  function matrixRain() {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";

    const ctx = canvas.getContext("2d");
    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    // List of Alchemy Unicode Symbols
    const alchemySymbols = [
      "🜁", "🜂", "🜃", "🜄", "🜅", "🜆", "🜇", "🜈", "🜉", "🜊", "🜋", "🜌",
      "🜍", "🜎", "🜏", "🜐", "🜑", "🜒", "🜓", "🜔", "🜕", "🜖", "🜗", "🜘",
      "🜙", "🜚", "🜛", "🜜", "🜝", "🜞", "🜟", "🜠", "🜡", "🜢", "🜣", "🜤",
      "🜥", "🜦", "🜧", "🜨", "🜩", "🜪", "🜫", "🜬", "🜭", "🜮", "🜯", "🜰"
    ];

    function drawMatrixRain() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.07)"; // Subtle fade effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgba(204, 204, 204, 0.8)"; // Soft white color
      ctx.font = fontSize + "px Segoe UI Symbol";

      drops.forEach((drop, i) => {
        const symbol = alchemySymbols[Math.floor(Math.random() * alchemySymbols.length)];
        const x = i * fontSize;
        const y = drop * fontSize;

        ctx.fillText(symbol, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      });
    }

    setInterval(drawMatrixRain, 50);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drops.length = Math.floor(canvas.width / fontSize);
      drops.fill(1);
    });
  }

  matrixRain();
});