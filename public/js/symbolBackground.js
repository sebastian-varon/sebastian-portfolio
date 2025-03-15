document.addEventListener("DOMContentLoaded", () => {
    const symbolContainer = document.createElement("div");
    symbolContainer.id = "symbol-container";
    document.body.appendChild(symbolContainer);

    const symbols = [
        "🜁", "🜂", "🜃", "🜄", "🜅", "🜆", "🜇", "🜈", "🜉", "🜊", "🜋", "🜌",
        "🜍", "🜎", "🜏", "🜐", "🜑", "🜒", "🜓", "🜔", "🜕", "🜖", "🜗", "🜘",
        "🜙", "🜚", "🜛", "🜜", "🜝", "🜞", "🜟", "🜠", "🜡", "🜢", "🜣", "🜤",
        "🜥", "🜦", "🜧", "🜨", "🜩", "🜪", "🜫", "🜬", "🜭", "🜮", "🜯", "🜰"
    ];

    const placedSymbols = []; // Track placed symbols for non-overlapping positions

    function createSymbol() {
        const symbol = document.createElement("div");
        symbol.classList.add("floating-symbol");

        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        let left, top, tooClose;

        // Ensure symbols do not overlap
        do {
            left = Math.random() * 100;
            top = Math.random() * 100;
            tooClose = placedSymbols.some(pos =>
                Math.abs(pos.left - left) < 4 && Math.abs(pos.top - top) < 4
            );
        } while (tooClose);

        placedSymbols.push({ left, top });

        symbol.style.left = `${left}vw`;
        symbol.style.top = `${top}vh`;

        // Apply animation uniformly
        symbol.style.animation = "fadeSymbol 6s ease-in-out forwards";

        document.getElementById("symbol-container").appendChild(symbol);

        // Remove symbol after animation completes
        setTimeout(() => {
            placedSymbols.shift(); // Free space for new symbols
            symbol.remove();
        }, 6000);
    }

    // **Increase frequency of symbols appearing**
    setInterval(() => {
        createSymbol();
        createSymbol(); // Two symbols at a time
    }, 400); // Spawn **every 400ms** instead of 800ms
});
