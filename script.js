document.addEventListener /*document တစ်ခုလုံးအလုပ်လုပ်ခိုင်းတာ (event type)*/("DOMContentLoaded", function() {
    
    //websiteကိုခေါ်တာ ပြီးတော့ dataလက်ခံပေးတယ် တာဝန်ခံပြီး json(api) အနေနဲ့ပြောင်းပြီးယူထားတာ
    fetch("./currency.txt") //objectကိုလှမ်းခေါ်တာ
    // .then ((response) => response.json()); //returnရဲ့အတိုကောက်
    .then(response => /*function response()*/{
        return response.json()
        console.log (data);
    }) 

    // .then((data) => console.log(data))
    .then((data) => {
        const rate = data.rates.MMK;
        console.log (rate);

        // let p = document.createElement('p');
        // document.querySelector('body').appendChild(p).innerHTML = "Rate is " + p;
        document.querySelector('body').innerHTML  = `Today Dollar rate is ${rate.toFixed(2)} MMK.`
        //tofixed(2) ဒသမကိန်း ၂လုံးပဲပြပေး
        // rate + " MMK"
 
    })
    .catch((error) => {
        console.log('Error:',error);
        console.error("website error", error);
    });
}) 