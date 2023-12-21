
document.addEventListener('DOMContentLoaded', function () {
    // Code to run after the DOM is ready
    const planOptionBtn = document.getElementById('planoptionCheckBox')

    const monthFreeTxt = document.querySelectorAll('.yearly-months-txt')

    //prices fee variables
    const onlinePrice = document.getElementById('price-online-serv')
    const largerPrice = document.getElementById('price-larger-str')
    const customizablePrice = document.getElementById('price-profile-customisable')

    //prices plan to display on user interface
    const pricesPlan = {
        monthly: {
            arcade: '$9/mo',
            advanced: '$12/mo',
            pro : '$15/mo' 
        },
        yearyly: {
            arcade: '$90/yr',
            advanced: '$120/yr',
            pro : '$150/yr'
            
        }
    }


    //prices fee to display on user interface
    const priceFee = {
        monthly: {
            onlineServices: '+$1/mo',
            CustomlargerStorage: '+$2/mo',
            
        },
        yearyly: {
            onlineServices: '+$10/yr',
            CustomlargerStorage: '+$20/yr', 
        }

    }

    //variables to store yearly and monty
    let selectedOptionText = null;
    let selectedOptionPer = null

    // let isCheckBoxChecked = false


    planOptionBtn.addEventListener('click', () => {
        // Common animation settings
        const animationSettings = 'slideInFromRight 0.5s ease-in-out';

        // Toggle monthly and yearly options
        const isChecked = planOptionBtn.checked;
        monthFreeTxt.forEach(each => {
            each.style.display = isChecked ? 'block' : 'none';
            each.style.animation = animationSettings
            each.style.transition = '0.5s';
        });

        
        // Set prices based on the selected option
        const selectedPrices = isChecked ? pricesPlan.yearyly : pricesPlan.monthly;

        //set the price for fees
        if (isChecked) {
            onlinePrice.innerText = priceFee.yearyly.onlineServices
            largerPrice.innerText = priceFee.yearyly.CustomlargerStorage  
            customizablePrice.innerText = priceFee.yearyly.CustomlargerStorage 
            console.log('all prices changed to yearly');
        } else {
            onlinePrice.innerText = priceFee.monthly.onlineServices
            largerPrice.innerText = priceFee.monthly.CustomlargerStorage
            customizablePrice.innerText = priceFee.monthly.CustomlargerStorage
            console.log('all prices changed to monthly');
        }


        //setting to either yearly or monthly
        selectedOptionText = isChecked ? '(Yearly)' : '(Monthly)';
        selectedOptionPer = isChecked ? "(per year)" : "(per month)";

        $("span#selectedplan").text(selectedOptionText);
        $(".cost-per").text(selectedOptionPer)
        // console.log(selectedOptionText);


        // Update prices with animation
        const types = ['arcade', 'advanced', 'pro'];

        if (types) {
            types.forEach(type => {
                let elementPrices = document.getElementById(`${type}-price`);
                if (elementPrices) {
                    // Remove previous animation class to reset the animation
                    elementPrices.classList.remove(animationSettings.split(' ')[0]);

                    // Force a reflow before adding the class again
                    void elementPrices.offsetWidth;

                    // Add the animation class to trigger the animation
                    elementPrices.style.animation = 'none';
                    elementPrices.offsetHeight; // Trigger reflow to restart the animation
                    elementPrices.style.animation = animationSettings;

                    elementPrices.innerText = selectedPrices[type];
                } else {
                    console.error(`Element with ID ${type}-price not found.`);
                }
            });
        } else {
            console.error('Types array is undefined.');
        }

    });

});

