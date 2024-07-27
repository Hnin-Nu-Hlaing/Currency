document.addEventListener("DOMContentLoaded", function() {

    document.querySelector("form").onsubmit = function (){ 

        fetch("./currency.txt") 
    
        .then(response =>  response.json())

        .then((data) => {

        const value = document.querySelector("#currency").value.toUpperCase();
        const rate = data.rates[value];

        if (rate !== undefined) {
            document.querySelector("#result").innerHTML = `1 USD is equal to ${value} ${rate.toFixed(2)}.`;
        }else {
            document.querySelector("#result").innerHTML = `Invalid Currency. Try a valid currency again!`;
        }
    })
        .catch((error) => {
            console.log('Error:',error);
            console.error("website error", error);
        });

        return false;
    };  
});