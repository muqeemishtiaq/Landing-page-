function Name() {
    const name = document.getElementById("name").value;
    const nameError = document.getElementById("nameError");

    if (name.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
    } else {
        nameError.textContent = "";
    }
}

function Email() {
    const email = document.getElementById("email").value;
    const emailError = document.getElementById("emailError");
    
    if (!email.includes("@") || !email.includes(".")) {
        emailError.textContent = "Please enter a valid email address.";
    } else {
        emailError.textContent = ""; 
    }
}

function Comments() {
    const comments = document.getElementById("comments").value;
    const commentsError = document.getElementById("commentsError");

    if (comments.length < 10) {
        commentsError.textContent = "Comments must be at least 10 characters long.";
    } else if (comments.length > 50) {
        commentsError.textContent = "Comments must not be greater than 50 characters.";
    } else {
        commentsError.textContent = "";
    }
}

const contactDiv = document.getElementById('contact');

fetch('data.json')
  .then(response => response.json())
  .then(data => {
 
    console.log("Fetched Data:", data);

    const dataContainer = document.createElement('div');
    dataContainer.className = 'data-container';

    data.forEach(item => {
      const entry = document.createElement('div');
      entry.className = 'entry';

      entry.innerHTML = `
        <p><strong>Name:</strong> ${item.name}</p>
        <p><strong>Email:</strong> ${item.email}</p>
        <p><strong>Comments:</strong> ${item.comments}</p>
        <hr>
      `;

      dataContainer.appendChild(entry);
    });

    contactDiv.appendChild(dataContainer);
  })
  .catch(error => console.error('Error fetching data:', error));

const reviewForm = document.getElementById("reviewForm");

reviewForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const suggest = document.getElementById("suggest").value;
  const again = document.querySelector('input[name="again"]:checked').value;
  const comments = document.getElementById("comments").value;
  const subscribe = document.getElementById("subscribe").checked ? "Yes" : "No";

  console.log("Submitted Data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("How did you hear about us?", suggest);
  console.log("Would you visit again?", again);
  console.log("Comments:", comments);
  console.log("Subscribed to updates:", subscribe);

  const reviewDisplay = document.createElement("div");
  reviewDisplay.className = "review-display";
  
  reviewDisplay.innerHTML = `
    <h3>Submitted Review</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>How did you hear about us?</strong> ${suggest}</p>
    <p><strong>Would you visit again?</strong> ${again}</p>
    <p><strong>Comments:</strong> ${comments}</p>
    <p><strong>Subscribed to updates:</strong> ${subscribe}</p>
    <hr>
  `;

  contactDiv.appendChild(reviewDisplay);

  reviewForm.reset();
});
