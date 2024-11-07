// Get the container and the buttons
const registerBtn = document.getElementById("register");
console.log(registerBtn); // This will log the Sign Up button element
const container = document.getElementById("container");
console.log(container); // This will log the container div element
const loginBtn = document.getElementById("login");
console.log(loginBtn); // This will log the Sign In button element

// Ensure that registerBtn and loginBtn are not null before adding event listeners
if (registerBtn && loginBtn && container) {
  // When Sign Up button is clicked, add the 'active' class to the container
  registerBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  // When Sign In button is clicked, remove the 'active' class from the container
  loginBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });
} else {
  console.error(
    "One or more elements are missing: registerBtn, loginBtn, container"
  );
}
