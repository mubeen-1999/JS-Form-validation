function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = '';
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateform(){
        var returnval= true;
        clearErrors();


        var name = document.forms['myForm']['fname'].value;
        if (name.length<5){
            seterror("name",'*length of name is short');
            returnval = false;
        }

        if (name.length==0){
            seterror("name",'*length of name cant be null');
            returnval = false;
        }

        var email = document.forms['myForm']['femail'].value;
        if (email.length>15){
            seterror("email",'*Email length is too long');
            returnval = false;
        }

        var phone = document.forms['myForm']['fphone'].value;
        if (phone.length!=10){
            seterror("phone",'*phone number should be of 10 digits');
            returnval = false;
        }

        var password = document.forms['myForm']['fpass'].value;
        if (password.length<4){
            seterror("pass",'*password should be 4 characters long');
            returnval = false;
        }
       
        var cpassword = document.forms['myForm']['fcpass'].value;
        if (cpassword != password){
            seterror("cpass",'*Incorrect Try again');
            returnval = false;
        }




        return returnval;
}
