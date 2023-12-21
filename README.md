# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process
 
- Mobile workflow first and then tablet / Desktop 




### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JAVASCRIPT (DOM)
- Tailwind CSS 
- JQUERY (Javascript framework)


### What I learned
I learnt the css framework tailwind css and the javascript framework jquery and here are some of the codes i am proud of: 

// Select checkboxes using jQuery for the fee container
    const onlineServCheck = $('#online-serv');
    const largerStorCheck = $('#larger-storage');
    const profileCheck = $('#profile-check');

    let mylist = [onlineServCheck, largerStorCheck, profileCheck];

    mylist.forEach(function (eachCheck) {
        eachCheck.on('click', function () {
            const isfeeBtnChecked = eachCheck.prop('checked');

            // Needed prices and headers for finishing up
            let selectedFeeCheckPrice = eachCheck.parent().parent().next().text();
            let selectedFeeCheckHeader = eachCheck.parent().parent().find(':last-child :first-child').text();

            // console.log(selectedFeeCheckPrice);
            // console.log(selectedFeeCheckHeader);
            
            if (isfeeBtnChecked) {
                eachCheck.parent().parent().parent().css({
                    "border-color": 'hsl(243, 100%, 62%)',
                    "background-color": 'hsla(229, 24%, 87%,0.2)'
                });

                let selectedobj = {
                    "selectedFeePrice": selectedFeeCheckPrice,
                    "selectedFeeHeader": selectedFeeCheckHeader
                };

                selectedFeeContainer.push(selectedobj);
            } else {
                eachCheck.parent().parent().parent().css({
                    "border-color": '',
                    "background-color": ''
                });

                // Using filter to remove the corresponding object from the array
                selectedFeeContainer = selectedFeeContainer.filter(function (item) {
                    return !(item.selectedFeePrice === selectedFeeCheckPrice && item.selectedFeeHeader === selectedFeeCheckHeader);
                });
            }

            //adding all the fees selected by user to the final cost price
            myfinalprice.allFeesCollected = selectedFeeContainer
            console.log(myfinalprice);


            //Parse finalPlanPrice
            const planMatch = myfinalprice.finalPlanPrice.match(/\$(\d+)\/(mo|yr)/);
            const planPrice = parseFloat(planMatch[1]);
            const billingFrequency = planMatch[2];

            //Accumulate fee values
            let accumulatedFees = 0;

            //using for loop to get the accumulated fee prices and charges
            for (const fee of myfinalprice.allFeesCollected) {
            const feeValue = parseFloat(fee.selectedFeePrice.match(/\$(\d+)/)[1]);
            accumulatedFees += feeValue;
            }

            console.log(planPrice)
            console.log(accumulatedFees);
            console.log(billingFrequency);

            let planFeePrice = accumulatedFees + planPrice
            console.log(planFeePrice);
            
            //setting the animation
            $("p#total-price").addClass("slide-in-animation")
            //passing the final price to the user
            $("p#total-price").text(`$${planFeePrice}/${billingFrequency}`)


            //Clear the container before re-populating it
            $(".services-fee-container").empty();

            selectedFeeContainer.forEach(function (eachContainer) {
                let feeContainer = $('<div>').addClass("fee-container");

                let feeContainerHeader = $('<p>').addClass("fee-container-header").text(eachContainer.selectedFeeHeader);
                feeContainer.append(feeContainerHeader);

                let feeContainerPrice = $('<p>').addClass('fee-container-price').text(eachContainer.selectedFeePrice);
                feeContainer.append(feeContainerPrice);

                $(".services-fee-container").append(feeContainer);
                
            });
        
        });
    });
    




### Continued development
i will continue to use jquery and tailwind css in my next projects



### Useful resources

- [learn the Javascript framework (Jquery) ](https://youtu.be/KhtEmR2A1Fw?si=K6t3Quo9w0FeyUts) - This helped me to learn jquery 
- [tailwind website to get started on using the css framework tailwind ](https://tailwindcss.com/) - this is the site for tailwind css...have a look at its documentation


## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
