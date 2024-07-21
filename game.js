'use strict';


(() => {
  // const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];


  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * 3);


  // const getFigure = lang => {

  // };


  const game = (language) => {
    const result = {
      player: 0,
      computer: 0,
    };
    // const lang = language === 'EN' || language === 'ENG' ?
    //     FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const chooseWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
          return 'Ничья!';
        } else if (
          (userChoice === FIGURES_RUS[0] &&
             computerChoice === FIGURES_RUS[1]) ||
              (userChoice === FIGURES_RUS[1] &&
                 computerChoice === FIGURES_RUS[2]) ||
              (userChoice === FIGURES_RUS[2] &&
                 computerChoice === FIGURES_RUS[0])
        ) {
          result.player++;
          return 'Вы победили!';
        } else {
          result.computer++;
          return 'Вы проиграли!';
        }
      };


      const playRound = () => {
        let userChoice = prompt('камень, ножницы или бумага?');


        if (userChoice === null) {
          const confirmExit = confirm('Точно ли вы хотите выйти?');
          if (confirmExit === true) {
            alert(`Игра окончена. Ваш счет: ${result.player}
            Счет компьютера: ${result.computer}`);
            return;
          } else {
            return playRound();
          }
        }


        const emptyLine = userChoice.trim();
        if (emptyLine === '') {
          alert('Сделайте свой выбор');
          return playRound();
        }

        userChoice = FIGURES_RUS.find(item =>
          item.startsWith(userChoice.toLowerCase()));

        if (!FIGURES_RUS.includes(userChoice) || userChoice === '') {
          alert('Некорректный выбор. Попробуйте снова.');
          return playRound();
        }

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
