document.addEventListener('DOMContentLoaded', () => {
    const lottoNumbersContainer = document.getElementById('lotto-numbers-container');
    const generateButton = document.getElementById('generate-button');
    const themeToggleButton = document.getElementById('theme-toggle');

    // Theme handling
    const currentTheme = localStorage.getItem('theme') || 'dark-mode';
    document.body.classList.add(currentTheme);
    themeToggleButton.textContent = currentTheme === 'dark-mode' ? '라이트 모드' : '다크 모드';

    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
        
        let theme = 'dark-mode';
        if (document.body.classList.contains('light-mode')) {
            theme = 'light-mode';
            themeToggleButton.textContent = '다크 모드';
        } else {
            themeToggleButton.textContent = '라이트 모드';
        }
        localStorage.setItem('theme', theme);
    });

    function generateLottoNumbers() {
        lottoNumbersContainer.innerHTML = ''; // Clear previous numbers

        for (let i = 0; i < 5; i++) {
            const numberSet = new Set();
            while (numberSet.size < 6) {
                const randomNumber = Math.floor(Math.random() * 45) + 1;
                numberSet.add(randomNumber);
            }
            
            const sortedNumbers = Array.from(numberSet).sort((a, b) => a - b);

            const setElement = document.createElement('div');
            setElement.classList.add('lotto-set');

            sortedNumbers.forEach(number => {
                const numberElement = document.createElement('div');
                numberElement.classList.add('lotto-number');
                numberElement.textContent = number;
                setElement.appendChild(numberElement);
            });

            lottoNumbersContainer.appendChild(setElement);
        }
    }

    generateButton.addEventListener('click', generateLottoNumbers);

    // Generate numbers on initial load
    generateLottoNumbers();
});