let HTML =
    `
<div>
<p class="messi">Messi</p>
<p class="ronaldo">Ronaldo</p>
</div>
`;
let statsHTML =
    ` 
<div>
<p class="goals">GOALS</p>
</div>
`
    ;
let messiGoals =
    `
<div>
<p>850</p>
</div>
`;
let ronaldoGoals =
    `
<div>
<p>933</p>
</div>
`
;

let imgR = `<img src="images/CR7.jpg" alt="">`
let imgM = `<img src="images/LM.png" alt="">`
let FTimg = `<img src="images/legends.png"></img>`


function showContainer() {
    const element = document.querySelector('.container');
    element.style.display = 'block';
}

function hideContainer() {
    const elements = document.querySelector('.container');
    elements.style.display = 'none';
}

function displayStatistics() {
    const legendStats = document.querySelector('.statistics');
    legendStats.innerHTML = statsHTML;
    legendStats.style.display = 'block';
}

function displayGoals(player) {

    if (player === 'messi') {
        const messiGoalUpdate = document.querySelector('.messi_goals');
        messiGoalUpdate.innerHTML = messiGoals;
        messiGoalUpdate.style.display = 'block';

        document.querySelector('.ronaldo_goals').style.display = 'none';

    } else if (player === 'ronaldo') {
        const ronaldoGoalUpdate = document.querySelector('.ronaldo_goals');
        ronaldoGoalUpdate.innerHTML = ronaldoGoals;
        ronaldoGoalUpdate.style.display = 'block';

        document.querySelector('.messi_goals').style.display = 'none';
    }
}

function displayImages(player) {
    const imageUpdate = document.querySelector('.photo');

    if (player === 'messi') {
        imageUpdate.innerHTML = imgM;
    }
    else if (player === 'ronaldo') {
        imageUpdate.innerHTML = imgR;
    }

    else if (player === 'photo') {

        const mainPicture = document.querySelector('.top-bar p');
        mainPicture.addEventListener('click', () => 
        {
            const imageUpdate = document.querySelector('.photo');
            imageUpdate.innerHTML = FTimg;

            const legendStats = document.querySelector('.statistics');
            legendStats.style.display = 'none';

            document.querySelector('.messi_goals').style.display = 'none';
            document.querySelector('.ronaldo_goals').style.display = 'none';
        })
    }
}

function displayLegends() {
    const update = document.querySelector('.container');
    update.innerHTML = HTML;
    update.style.display = 'block';
    update.addEventListener('mouseenter', showContainer);
    update.addEventListener('mouseleave', hideContainer);

    const legendItems = document.querySelectorAll('.container p');
    legendItems.forEach(items => {
        items.addEventListener('click', () => {

            if (items.classList.contains('ronaldo')) {
                displayImages('ronaldo');
                displayStatistics();
                const goalClick = document.querySelector('.goals');
                goalClick.addEventListener('click', () => {
                    displayGoals('ronaldo');
                }
                )
            }

            else if (items.classList.contains('messi')) {
                displayImages('messi');
                displayStatistics();
                const goalClick = document.querySelector('.goals');
                goalClick.addEventListener('click', () => {
                    displayGoals('messi');
                }
                )
            }
        })
    })

    document.querySelector('.messi_goals').style.display = 'none';
    document.querySelector('.ronaldo_goals').style.display = 'none';
}

function clickList() {

    const listItems = document.querySelectorAll('nav li');
    listItems.forEach(item => {
        item.addEventListener('click', () => {

            if (item.classList.contains('legends')) {
                displayLegends();
            }
        });
    });


}


displayImages('photo');
clickList();
