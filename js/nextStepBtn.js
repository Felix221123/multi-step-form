
document.addEventListener('DOMContentLoaded', function () {
    
    // getting variables form the doument
    const nextStepBtnDisplay = document.getElementById('next-btn')
    const nextStepContainer = document.querySelector('.steps-container')


    //event listner for making the next step container appear and disappear
    nextStepBtnDisplay.addEventListener('click',  () => {

        const isActive = nextStepBtnDisplay.classList.toggle('active')

        if (!isActive) {
            nextStepContainer.style.animation = 'slideOutStepContainer 0.5s ease-in-out'

        } else {
            nextStepContainer.style.animation = 'slideInStepContainer 0.5s ease-in-out'
            nextStepContainer.style.display = 'flex'
        }


        nextStepContainer.addEventListener('animationend', function (event) {
            // Check if the animation is the one you expect
            if (event.animationName === 'slideOutStepContainer') {
                nextStepContainer.style.animation = 'none';
                nextStepContainer.style.display = 'none';
            }
        }); 
    })
    
});










