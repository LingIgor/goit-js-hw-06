const form = document.querySelector(".login-form");
// console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const emailValue = event.currentTarget.elements.email.value;
  const passwordValue = event.currentTarget.elements.password.value;
  if (emailValue === "" || passwordValue === "") {
    alert("всі поля повинні бути заповнені");
  } else {
    const formData = {
      emailValue,
      passwordValue,
    };
    console.log(formData);
    // const formData = new FormData(event.currentTarget);
    // formData.forEach((name, value) => {
    //   console.log("Ключ:", value);
    //   console.log("Значення:", name);
    // });
    // console.log(formData);

    event.target.reset();
  }
}
