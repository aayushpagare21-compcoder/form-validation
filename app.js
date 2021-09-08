// FORM VALIDATION USING REGEX 
console.log('included hai') 

let uname, umail, uaddress, uvehicle, uphone; 
uname = false; 
umail = false; 
uaddress = false; 
uvehicle = false; 
uphone = false; 

// 1. validation of name 

const userName = document.getElementById('name');  

userName.addEventListener('blur', ()=> {  

    //NUMBERS ARE ALLOWED CHARECTERS ARE ALLOWED SMALL AND CAPS BOTH AND LEN < 10 
    //must start with a-z
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/; 
    
    let str = userName.value;  
    
    let invalidName = document.getElementById('invalid-name');    

    if (regex.test(str)) { 
        userName.classList.remove('is-invalid');    
        invalidName.style.display = 'none';
        uname = true;
    } else {  
        userName.classList.add('is-invalid');   
        invalidName.style.display = 'block';
        uname = false;
    }
}); 

//2. validation of phone 

const phoneNumber = document.getElementById('phone'); 

phoneNumber.addEventListener('blur', ()=> { 

    let regex = /^([0-9]{10}$)/; 

    let str = phoneNumber.value; 

    let invalidPhone = document.getElementById('invalid-phone'); 

    if (regex.test(str)) { 
        phoneNumber.classList.remove('is-invalid');  
        invalidPhone.style.display = 'none';
        uphone = true;
    } else { 
        phoneNumber.classList.add('is-invalid');  
        invalidPhone.style.display = 'block';
        uphone = false;
    }
});

//3. validation of email 

const userMail = document.getElementById('email'); 

userMail.addEventListener('blur', ()=> {  

    //starts with a-z A-Z _ . - (+ is for more chars) 
    // @ is compulsory 
    //after @ same as first group 
    //then . compulsory 
    //then domain must be 2-7 chars long
    let regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]){2,7}$/; 

    let str = userMail.value;   

    let invalidEmail = document.getElementById('invalid-email');

    if (regex.test(str)) { 
        userMail.classList.remove('is-invalid') 
        umail = true; 
        invalidEmail.style.display = 'none';
    } else {  
        userMail.classList.add('is-invalid'); 
        umail = false; 
        invalidEmail.style.display = 'block';
    }
}); 

const submit = document.getElementById('submit'); 

submit.addEventListener('click', (e)=> {   
    console.log('fiere hua')
    
    e.preventDefault();
    let success = document.getElementById('success');  
    let failure = document.getElementById('failure');
   
    if (uname && umail && uphone) {
        success.classList.add('show'); 
        failure.classList.remove('show'); 
        failure.style.display = 'none'; 
        success.style.display = 'block';
    } else { 
        failure.classList.add('show'); 
        success.classList.remove('show'); 
        success.style.display = 'none'; 
        failure.style.display = 'block';
    }  
}); 