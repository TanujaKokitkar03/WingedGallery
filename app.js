var nextBtn = document.querySelector('.next'),
prevBtn = document.querySelector('.previous'),
carousel = document.querySelector('.carousel'),
list = document.querySelector('.list'),
item = document.querySelectorAll('.item'),
timeRunning = document.querySelector('.runningTime')

let runningTime = 3000;
let timeAutoNext = 20000;

nextBtn.onclick = function(){
    showSlider('next')
}

prevBtn.onclick = function(){
    showSlider('previous')
}

let runTimeOut

let runNextAuto = setTimeout(() => {
    nextBtn.click()
}, timeAutoNext )

function resetTimeAnimation(){
    timeRunning.style.animation = 'none'
    timeRunning.offsetHeight             //this will triger reflow
    timeRunning.style.animation = null
    timeRunning.style.animation = 'runTime 2s linear 1 forwards'

}

function showSlider(type){
    let sliderItemDOM = list.querySelectorAll('.carousel .list .item')
    if (type === 'next'){
        list.appendChild(sliderItemDOM[0])
        carousel.classList.add('next')
    }

    else{
        list.prepend(sliderItemDOM[sliderItemDOM.length - 1])
        carousel.classList.add('previous')
    }

    clearTimeout(runTimeOut)

    runTimeOut = setTimeout(() => {
        carousel.classList.remove('next')
        carousel.classList.remove('previous')
    }, runningTime)

    clearTimeout(runNextAuto)

    runNextAuto = setTimeout(() => {
        nextBtn.click()
    }, timeAutoNext)

    resetTimeAnimation()   //reset running time animation

}

// start the initial animation
resetTimeAnimation()