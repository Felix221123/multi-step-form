// Getting started with jquery
// import { selectedOptionText } from './externalScript.js';


$(document).ready(function () {
    
    let currentPage = 1;

    const pageNumb = {
        1: "personal-info",
        2: "select-plan",
        3: "add-ons-container",
        4: "finishing-up-container",
        5: "thanks-container"
    }
    
    if (currentPage === 1) {
        $("button#gobackbtn").hide();
        $("#num-1").css({
            "background-color": "#BEE2FD",
            "color": "hsl(213, 96%, 18%)",
            "border": "none"
        })
    } else {
        $("#num-1").css({
            "background-color": "",
            "color": "",
            "border": ""
        })
    }

    // Handle "Next Step" button click
    $("button#nextstepbtn").click(function () {
        if (currentPage === 1) {
            // Check form validation only on the first page
            if (!checkFormValidation()) {
                // Validation failed, don't proceed to the next step
                return;
            }
        }

        $("button#gobackbtn").fadeIn("slow");

        //while its on the last page
        if (currentPage < 6) {
            currentPage++;
            showPageNext(currentPage);
            
        } else {
            return;
        }
        numBackgroundColor(currentPage);
        

    
        // chnaging the next step to confirm in confirm in page 4
        if (currentPage === 4) {
            $("button#nextstepbtn").text("Confirm").css({
                "transition": "0.5s",
                "background-color": "hsl(243, 100%, 62%)",
                "color": "white",
            });
        } else {
            $("button#nextstepbtn").text("Next Step")
        }
    
        // making the steps container disappear in page 5
        if (currentPage === 5) {
            $(".steps-container").hide();
        }

        console.log("CurrentPage; " + currentPage)
        
    });


    

    // let isValid = true

    // Handle "Go Back" button click
    $("button#gobackbtn").click(function () {
        if (currentPage === 1) {
            $("button#gobackbtn").fadeOut(1500);
        }

        if (currentPage > 1) {
            currentPage--;
            showpageBackwards(currentPage);
            
        }
        numBackgroundColor(currentPage);
        if (currentPage === 4) {
            $("button#nextstepbtn").text("Confirm").css({
                "transition": "0.5s",
                "background-color": "hsl(243, 100%, 62%)",
                "color": "white",
            });
        } else {
            $("button#nextstepbtn").text("Next Step").css({
                "transition": "0.5s",
                "background-color": "hsl(213, 96%, 18%)",
                "color": "white",
            })
        }
        console.log("CurrentPage; " + currentPage)
    });

    isError = false
    function validateInput(inputElement) {
        const trimmedValue = $(inputElement).val().trim();
    
        if (trimmedValue === "") {
            isError = true;
            $(inputElement).css('borderColor', 'hsl(354, 84%, 57%)');
            $(inputElement).prev().find(':last-child').css('display', 'block');
        } else {
            isError = false;
            $(inputElement).css('borderColor', '');
            $(inputElement).prev().find(':last-child').css('display', 'none');
        }
    }
    
    function checkFormValidation() {
        // Reset isError before checking validation
        isError = false;

        validateInput($("input#name"));
        validateInput($("input#emailAddress"));
        validateInput($("input#phoneNumber"));

        // Return true if there is no validation error
        return !isError;
    }
    

    function showPageNext(pageNumber) {
        // Hide all containers
        $("#" + pageNumb[pageNumber - 1]).hide(500);

        // Show the container for the current page
        $("#" + pageNumb[pageNumber]).show(500);
    }

    function showpageBackwards(pageNumber) {
        // Hide all containers
        $("#" + pageNumb[pageNumber + 1]).hide(500);

        // Show the container for the current page
        $("#" + pageNumb[pageNumber]).show(500);
    }

    // function for changing the background color
    function numBackgroundColor(page) {

        // reseting each number container
        $.each(["#num-1", "#num-2", "#num-3", "#num-4"], function (index, eachNum) {
            $(eachNum).css({
                "background-color": "",
                "color": "",
                "border": "",
            });
        });

        if (currentPage === page) {
            $(`#num-${page}`).css({
                "background-color": "#BEE2FD",
                "color": "hsl(213, 96%, 18%)",
                "border": "none"
            })
        } else if (page === 5) {
            $(`#num-4`).css({
                "background-color": "#BEE2FD",
                "color": "hsl(213, 96%, 18%)",
                "border": "none"
            })
        }
        
    }


    //prices plan to display on user interface
    const pricesPlan = {
        monthly: {
            arcade: '$9/mo',
            advanced: '$12/mo',
            pro: '$15/mo'
        },
        yearyly: {
            arcade: '$90/yr',
            advanced: '$120/yr',
            pro: '$150/yr'
            
        }
    }

    //object for calculation
    const priceCal = {
        monthlyCap: {
            arcade: 9,
            advanced: 12,
            pro: 15
        },
        yearlyCap: {
            arcade: 90,
            advanced: 120,
            pro: 150
            
        }
    }

    // getting the plan selected
    let selectedOptionHeaderPricelist = [];
    let selectedOptionHeaderPrice;

    //calculating the overall prices
    let myfinalprice;

    // Variable for storing fees headers and price fee
    let selectedFeeContainer = [];

    ['arcade-btn', 'advanced-btn', 'pro-btn'].forEach((eachBtn) => {
        let $elementBtn = $(`#${eachBtn}`);
        $elementBtn.on('click', () => {

            // Clear selectedFeeContainer
            selectedFeeContainer = [];

            ['arcade-btn', 'advanced-btn', 'pro-btn'].forEach((each) => {
                let $elementBtn = $(`#${each}`);
                $elementBtn.find(':first-child').css({
                    'border-color': '',
                    'background-color': ''
                });
            });

            $elementBtn.find(':first-child').css({
                'border-color': 'hsl(243, 100%, 62%)',
                'background-color': 'hsla(229, 24%, 87%, 0.2)'
            });

            let selectedPlanHeader = $elementBtn.find(':first-child :last-child :first-child').text();
            let selectedPlanPrice = $elementBtn.find(':first-child :last-child p.priceTag').text();

            

            //setting the button selected in an object
            selectedOptionHeaderPrice = {
                "planHeader": selectedPlanHeader,
                "planPrice": selectedPlanPrice
            }
            selectedOptionHeaderPricelist.push(selectedOptionHeaderPrice);
            
            let finalpriceChosen = selectedOptionHeaderPricelist[selectedOptionHeaderPricelist.length - 1].planPrice
            
            //setting the finishing up container so that it contains
            //the final selectedplan chosen
            $("p#plan-mode").text(selectedOptionHeaderPricelist[selectedOptionHeaderPricelist.length - 1].planHeader)
            $("p#plan-mode-price-display").text(finalpriceChosen)

            //getting the values for the final total cost to be reviewed
            myfinalprice = {
                "finalPlanPrice": finalpriceChosen,
            }
            console.log(myfinalprice);
        });
    });
    // console.log(myfinalprice);

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
    







    
});