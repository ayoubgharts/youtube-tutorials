// validation
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const alertDiv = document.querySelector(".alert");
  
    // Hide alert by default
    alertDiv.style.display = "none";
  
    form.addEventListener("submit", (event) => {
      // Prevent form submission
      event.preventDefault();
  
      // Validation logic
      let errorMessage = "";
  
      if (!usernameInput.value.trim()) {
        errorMessage += "Username is required. ";
      }
  
      if (!passwordInput.value.trim()) {
        errorMessage += "Password is required.";
      }
  
      if (errorMessage) {
        // Show the error message
        alertDiv.textContent = errorMessage;
        alertDiv.style.display = "block";
      } else {
        // Hide the alert and submit the form (mock action here)
        alertDiv.style.display = "none";
        alert("Form submitted successfully!"); // Mock submission
        form.reset();
      }
    });
  });
  