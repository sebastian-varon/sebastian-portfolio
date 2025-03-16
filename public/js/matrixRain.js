document.addEventListener("DOMContentLoaded", () => {
  function matrixRain() {
      const canvas = document.createElement("canvas");
      document.body.appendChild(canvas);

      // Set canvas properties
      const context = canvas.getContext("2d");
      canvas.style.position = "fixed";
      canvas.style.top = 0;
      canvas.style.left = 0;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      canvas.style.zIndex = -1; // Ensure it's behind everything

      const fontSize = 16;
      let width, height, columns, drops;

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
          drops = Array(columns).fill(1);
      }

      function drawMatrixRain() {
          context.fillStyle = "rgba(0, 0, 0, 0.1)";
          context.fillRect(0, 0, width, height);
      
          context.fillStyle = "#d3d3d3";
          context.font = fontSize + "px Courier";
      
          for (let i = 0; i < drops.length; i++) {
              const symbol = alchemicalSymbols[Math.floor(Math.random() * alchemicalSymbols.length)];
              const x = i * fontSize;
              const y = drops[i] * fontSize;
      
              context.fillText(symbol, x, y);
      
              if (y > height && Math.random() > 0.975) {
                  drops[i] = 0;
              }
      
              drops[i]++;
          }
      }

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();
      setInterval(drawMatrixRain, 50);
  }

  matrixRain();
});
