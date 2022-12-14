const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

//add an event when form is submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){

    e.preventDefault();
    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
      } else {

        //task 12 code down to store multiple details in localStorage instead of name we use email address
        //creating object literal to store user details
        let myObj={
            name: nameInput.value,
            email: emailInput.value,

        };
        localStorage.setItem(myObj.email,JSON.stringify(myObj));
        for (var i = 0; i < localStorage.length; i++){
           console.log(localStorage.getItem(localStorage.key(i)));
        }
        let myObjDeserialized=JSON.parse(localStorage.getItem(myObj.email));
        let objName=myObjDeserialized.name;
        let objEmail=myObjDeserialized.email;
        //console.log("name:"+objName);


        // Create new list item with user
        const li = document.createElement('li');
    
        // Add text node with input values
        li.appendChild(document.createTextNode(`${objName}: ${objEmail}`));
        // Append to ul
        userList.appendChild(li);

//         // localStorage.setItem('name',nameInput.value);
//         // //localStorage.removeItem('name');

//         // /*
//         // even if we delete
//         // localStorage.setItem('name',nameInput.value);
//         // the value will be present in localstorage even though page refresh

//         // */

//         // console.log(localStorage.getItem('name'));

// //we will get if nothing is here in localStorage
//          //creating object literal to store user details
//          let myObj={
//             name: nameInput.value,
//             email: emailInput.value,

//         };
//         /*
//         In localStorage we cannot store the object hence we will convert this object into string
//         */
//        let myObjSerialized=JSON.stringify(myObj);
//        localStorage.setItem('name',myObjSerialized);
//        console.log(localStorage);

       
//     //    //deserialized converting string to object
//     //    let myObjDeserialized=JSON.parse(localStorage.getItem('myObj'));
//     //    console.log(myObjDeserialized);
//     //    console.log(myObjDeserialized.name);
            

    
        // Clear fields
        nameInput.value = '';
        emailInput.value = '';
      }
      
}


