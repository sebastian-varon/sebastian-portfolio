document.addEventListener("DOMContentLoaded", () => {
    function matrixRain() {
        const canvas = document.createElement("canvas");
        document.body.appendChild(canvas);

        const context = canvas.getContext("2d");
        canvas.style.position = "fixed";
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = "100vw";
        canvas.style.height = "100vh";
        canvas.style.zIndex = -1;

        const fontSize = 16;
        let width, height, columns, waveY = 0;

        // List of Unicode Alchemical Symbols
        const alchemicalSymbols = [
            "🜀", "🜁", "🜂", "🜃", "🜄", "🜅", "🜆", "🜇", "🜈", "🜉", "🜊", "🜋", "🜌", "🜍", "🜎", "🜏",
            "🜐", "🜑", "🜒", "🜓", "🜔", "🜕", "🜖", "🜗", "🜘", "🜙", "🜚", "🜛", "🜜", "🜝", "🜞", "🜟",
            "🜠", "🜡", "🜢", "🜣", "🜤", "🜥", "🜦", "🜧", "🜨", "🜩", "🜪", "🜫", "🜬", "🜭", "🜮", "🜯",
            "🜰", "🜱", "🜲", "🜳", "🜴", "🜵", "🜶", "🜷", "🜸", "🜹", "🜺", "🜻", "🜼", "🜽", "🜾", "🜿"
        ];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            width = canvas.width;
            height = canvas.height;
            columns = Math.floor(width / fontSize);
        }

        function drawMatrixRain() {
            context.fillStyle = "rgba(0, 0, 0, 0.1)";
            context.fillRect(0, 0, width, height);

            context.fillStyle = "#d3d3d3";
            context.font = fontSize + "px Courier";

            for (let i = 0; i < columns; i++) {
                const symbol = alchemicalSymbols[Math.floor(Math.random() * alchemicalSymbols.length)];
                const x = i * fontSize;
                const y = (waveY + i * fontSize) % height; // Ensures consistent spacing

                context.fillText(symbol, x, y);
            }

            waveY += fontSize / 2; // Controls flow speed
        }

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        setInterval(drawMatrixRain, 50);
    }

    matrixRain();
});
