const form = document.querySelector(".login-form");
const user = {};

form.addEventListener('submit', onFormSubmit);

// 1. Перший варіант
function onFormSubmit (event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;

  const {
    elements: { email, password }
  } = event.currentTarget;
  
  if (email.value.trim() === "" || password.value.trim() === "") {
    console.log("Please fill in all the fields!");
    return alert("Please fill in all the fields!");
  }
  
  user.email = formElements.email.value;
  user.password = formElements.password.value;

  console.log(user);

  event.currentTarget.reset();
}


// 2. Другий варіант
// function onFormSubmit (event) {
//   event.preventDefault();
//   const formElements = event.currentTarget.elements;
  
//   const formData = new FormData(event.currentTarget);

//   formData.forEach((value, name) => {
//     if (value.trim() === '') {
//       alert(`You must enter a ${name}`);
//     }
//   });

//   user.email = formElements.email.value;
//   user.password = formElements.password.value;

//   console.log(user);

//   event.currentTarget.reset();
// }


