// const learn_form = document.getElementById('learn_form').addEventListener('submit', function(event){
//     event.preventDefault();

//     document.querySelectorAll('group_form').forEach(function (group){
//         group.classList.remove('error');

//         let thereIsError = false;

//         const firstname = document.getElementById('firstname_input');
//         const lastname = document.getElementById('lastname_input');
//         const email = document.getElementById('email_input');
//         const password = document.getElementById('password_input');

       

//         if(firstname.value.trim() === ''){
//             document.getElementById('firstName').classList.add('error');
//             thereIsError = true;
//         }

//         if(lastname.value.trim() === ''){
//             document.getElementById('lastName').classList.add('error');
//             thereIsError = true;
//         }

//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if(!emailRegex.test(email.value.trim())){
//             document.getElementById('emailFormat').classList.add('error');
//             thereIsError = true;
//         }

//         if(password.value.trim() === ''){
//             document.getElementById('passwordFormat').classList.add('error');
//             thereIsError = true;
//         }

//         if (!thereIsError) {


//         alert('Form submitted successfully!');
//     }
        
//     });
// })


document.getElementById('learn_form').addEventListener('submit', function(event) {
    event.preventDefault();

    const groups = document.querySelectorAll('.group_form');
    groups.forEach(group => group.classList.remove('error'));

    let thereIsError = false;

    const firstname = document.getElementById('firstname_input');
    const lastname = document.getElementById('lastname_input');
    const email = document.getElementById('email_input');
    const password = document.getElementById('password_input');

    if (firstname.value.trim() === '') {
        document.getElementById('firstName').classList.add('error');
        thereIsError = true;
    }

    if (lastname.value.trim() === '') {
        document.getElementById('lastName').classList.add('error');
        thereIsError = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        document.getElementById('emailFormat').classList.add('error');
        thereIsError = true;
    }

    if (password.value.trim() === '') {
        document.getElementById('passwordFormat').classList.add('error');
        thereIsError = true;
    }

    if (!thereIsError) {
        // If no errors, you can submit the form or do something else here
        // For example, submit the form:
        // this.submit();

        alert('Form submitted successfully!');
    }
});
