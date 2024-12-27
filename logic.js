


/*
loadTask("text-to-speech", function(loadedTask) {
  tts = loadedTask;
});
*/
const numbers = Array.from({length: 90}, (_, i) => i + 1);
        const extractedNumbers = new Set();
        let lastExtracted = null;

        function createBoard() {
            const board = document.getElementById('board');
            for (let i = 1; i <= 90; i++) {
                const cell = document.createElement('div');
                cell.className = 'number';
                cell.textContent = i;
                board.appendChild(cell);
            }
           
        }

        function extractNumber() {
            if (extractedNumbers.size === 90) {
                alert('Tutti i numeri sono stati estratti!');
                return;
            }
        

            let number;
            do {
                number = numbers[Math.floor(Math.random() * 90)];
            } while (extractedNumbers.has(number));

            extractedNumbers.add(number);
            
            // Update board
            const cells = document.querySelectorAll('.number');
            if (lastExtracted) {
                cells[lastExtracted - 1].classList.remove('current');
                cells[lastExtracted - 1].classList.add('extracted');
            }
            cells[number - 1].classList.add('current');
            
            // Update display
            //document.getElementById('extracted').textContent = `Numero estratto: ${number}`;
            lastExtracted = number;
            receive(lastExtracted);
            
        }
        

        createBoard();