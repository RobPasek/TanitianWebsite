// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", function () {

  // Get references to the form and button
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  // Create popup container dynamically
  const popup = document.createElement("div");
  popup.id = "popupBox";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#ffffff";
  popup.style.border = "1px solid #ccc";
  popup.style.padding = "20px";
  popup.style.borderRadius = "10px";
  popup.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  popup.style.width = "320px";
  popup.style.display = "none";
  popup.style.zIndex = "9999";

  // Add popup to page
  document.body.appendChild(popup);

  // Add submit button click event
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault(); // Stop form from submitting

    // Get values from form
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const topic = document.getElementById("topic").value.trim();
    const message = document.getElementById("message").value.trim();

    // Format popup message
    popup.innerHTML = `
      <h2 style="margin-bottom:10px;font-size:1.1rem;">Confirm Your Message</h2>
      <p><strong>Name:</strong> ${name || "Not entered"}</p>
      <p><strong>Email:</strong> ${email || "Not entered"}</p>
      <p><strong>Topic:</strong> ${topic || "Not selected"}</p>
      <p><strong>Message:</strong><br>${message || "No message provided"}</p>
      <button id="closePopupBtn" style="
        margin-top:12px;
        padding:8px 16px;
        border:none;
        background:#0b7285;
        color:white;
        border-radius:6px;
        cursor:pointer;
      ">Close</button>
    `;

    // Show the popup
    popup.style.display = "block";

    // Add listener for closing the popup
    const closeBtn = document.getElementById("closePopupBtn");
    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
      form.reset();  // Clear form fields
    });
  });
});