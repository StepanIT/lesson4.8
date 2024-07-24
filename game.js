'use strict';


(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];


  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * 3);


  const getFigure = (lang) => {
    if (lang.toLowerCase() === 'en' || lang.toLowerCase() === 'eng') {
      return {
        figures: FIGURES_ENG,
        messages: {
          prompt: 'Rock, scissors, or paper?',
          confirmExit: 'Are you sure you want to exit?',
          emptyChoice: 'Make your choice',
          invalidChoice: 'Invalid choice. Try again.',
          gameOver: (player, computer) =>
            `Game over. Your score: ${player}, Computer's score: ${computer}`,
          youChose: 'You chose:',
          computerChose: 'Computer chose:',
          draw: 'It\'s a draw!',
          win: 'You win!',
          lose: 'You lose!',
        },
      };
    } else {
      return {
        figures: FIGURES_RUS,
        messages: {
          prompt: 'Камень, ножницы или бумага?',
          confirmExit: 'Точно ли вы хотите выйти?',
          emptyChoice: 'Сделайте свой выбор',
          invalidChoice: 'Некорректный выбор. Попробуйте снова.',
          gameOver: (player, computer) =>
            `Игра окончена. Ваш счет: ${player}, Счет компьютера: ${computer}`,
          youChose: 'Вы выбрали:',
          computerChose: 'Компьютер выбрал:',
          draw: 'Ничья!',
          win: 'Вы победили!',
          lose: 'Вы проиграли!',
        },
      };
    }
  };

  const game = (language = 'ru') => {
    const result = {
      player: 0,
      computer: 0,
    };

    const {figures, messages} = getFigure(language);

    return function start() {
      const chooseWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
          return messages.draw;
        } else if (
          (userChoice === figures[0] &&
             computerChoice === figures[1]) ||
              (userChoice === figures[1] &&
                 computerChoice === figures[2]) ||
              (userChoice === figures[2] &&
                 computerChoice === figures[0])
        ) {
          result.player++;
          return messages.win;
        } else {
          result.computer++;
          return messages.lose;
        }
      };


      const playRound = () => {
        let userChoice = prompt(messages.prompt);


        if (userChoice === null) {
          const confirmExit = confirm(messages.confirmExit);
          if (confirmExit === true) {
            alert(messages.gameOver(result.player, result.computer));
            return;
          } else {
            return playRound();
          }
        }


        const emptyLine = userChoice.trim();
        if (emptyLine === '') {
          alert(messages.emptyChoice);
          return playRound();
        }

        userChoice = figures.find(item =>
          item.startsWith(userChoice.toLowerCase()));

        if (!figures.includes(userChoice) || userChoice === '') {
          alert(messages.invalidChoice);
          return playRound();
        }

        const computerChoice = figures[getRandomIntInclusive()];

        alert(`${messages.youChose} ${userChoice}`);
        alert(`${messages.computerChose} ${computerChoice}`);
        alert(chooseWinner(userChoice, computerChoice));


        return start();
      };

      return playRound();
    };
  };

  const playStart = (language) => {
    const play = game(language);
    play();
  };

  playStart(prompt('Choose language: "EN" for English or "RU" for Russian'));


  window.RPS = game;
})();
