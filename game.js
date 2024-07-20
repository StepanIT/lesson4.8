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
            
            let userChoice = prompt('сделайте выбор камень, ножницы или бумага');

            const computerChoice = FIGURES_RUS[getRandomIntInclusive()];
            console.log(computerChoice);
        

            return start();
};

}; 
    window.RPS = game;
})();