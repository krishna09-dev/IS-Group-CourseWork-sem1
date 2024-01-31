//newletter form validation
function validate_newsletter(){
    var email = document.forms['news-form']['newsletter'].value;
    if (email != "") {
        alert("Thank u for Signing up for Newsletter");
    }
    
    
}

//checkout form validation
function validate() {
    var fullname = document.forms['checkoutform']['fullname'].value;
    var youremail = document.forms['checkoutform']['youremail'].value;
    var yournumber = document.forms['checkoutform']['yournumber'].value;
    var yourcountry = document.forms['checkoutform']['yourcountry'].value;
    var yourcity = document.forms['checkoutform']['yourcity'].value;  
    var yourzip = document.forms['checkoutform']['yourzip'].value;    
    var yourbilling = document.forms['checkoutform']['yourbilling'].value;

    if (fullname == "" || youremail == "" || yournumber == "" || yourcountry == "" || yourcity == "" || yourzip == "" || yourbilling == "") {
        alert("all fields must be filled out");
    }else {
        alert("Your order has been placed");
    }
}

