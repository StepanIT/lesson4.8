'use strict';


(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];



    const getRandomIntInclusive = (min, max) => {
        return Math.floor(Math.random() * 3);
};



        const getFigure = lang => {

};


    const game = (language) => {
        const result = {
            player: 0,
            computer: 0,
        };
        const lang = language === 'EN' || language === 'ENG' ?
        FIGURES_ENG : FIGURES_RUS;

        return function start() {
            


          const chooseWinner = (userChoice, computerChoice) => {

            if (userChoice === computerChoice) {
              return 'Ничья!';
            } else if (
              (userChoice === 'камень' && computerChoice === 'ножницы') ||
              (userChoice === 'ножницы' && computerChoice === 'бумага') ||
              (userChoice === 'бумага' && computerChoice === 'камень')
            ) {
              result.player++;
              return 'Вы победили!';
            } else {
              result.computer++;
              return 'Вы проиграли!';
            }
          };



      






            const playRound = () => {
              const userChoice = prompt('камень, ножницы или бумага?');
              if (userChoice === null) {
                const confirmExit = confirm('Точно ли вы хотите выйти?');
                if (confirmExit === true) {
                  alert(`Игра окончена. Ваш счет: ${result.player}, Счет компьютера: ${result.computer}`);
                  return;
                } else {
                  return playRound();
                };
              };
              if(!['камень', 'ножницы', 'бумага'].includes(userChoice)) {
                alert('Некорректный выбор. Попробуйте снова.');
                return playRound();
              };
      
            const computerChoice = FIGURES_RUS[getRandomIntInclusive()];
            alert(`Вы выбрали: ${userChoice}`);
            alert(`Компьютер выбрал: ${computerChoice}`);
            alert(chooseWinner(userChoice, computerChoice));


            return start();
};
            return playRound();
}; 
    };


    
    window.RPS = game;
})();