document.addEventListener("DOMContentLoaded",() => {
    const cards = [
        {
            name:'lula',
            img:'imgs/lula.jpeg',

        },
        {
            name:'bolsonaro',
            img:'imgs/bolsonaro.jpeg',

        },
        {
            name:'xandao',
            img:'imgs/xandao.jpg',

        },
        {
            name:'binladen',
            img:'imgs/binladen.jpeg',

        },
        {
            name:'erinaldo',
            img:'imgs/erinaldo.jpeg',

        },
        {
            name:'gabriel',
            img:'imgs/gabriel.jpeg',

        },
        {
            name:'lula',
            img:'imgs/lula.jpeg',

        },
        {
            name:'bolsonaro',
            img:'imgs/bolsonaro.jpeg',

        },
        {
            name:'xandao',
            img:'imgs/xandao.jpg',

        },
        {
            name:'binladen',
            img:'imgs/binladen.jpeg',

        },
        {
            name:'erinaldo',
            img:'imgs/erinaldo.jpeg',

        },
        {
            name:'gabriel',
            img:'imgs/gabriel.jpeg',

        }
    ]

    //embaralhar cartas
    cards.sort(() => 0.5 - math.random());

    //carregar elemento html no script
    const board = document.querySelector('.board');
    const resultview = document.querySelector('#result');

    let cardsChosen = []; //cartas escolhidas
    let cardsChosenid = []; //ids das cartas escolhidas
    let cardsWon = []; //cartas combinadas

    // criar quadro de cartas
    function createBoard(){
            for(let i = 0; i < cards.length; i++){
                const card = document.createElement('img');
                card.setAttribute('src', 'img/')
            }
    }
});