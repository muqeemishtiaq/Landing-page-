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

document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const suggest = document.getElementById("suggest").value;
    const again = document.querySelector('input[name="again"]:checked').value;
    const comments = document.getElementById("comments").value;
    const subscribe = document.getElementById("subscribe").checked ? "Yes" : "No";

    
    const formData = {
        name: name,
        email: email,
        suggest: suggest,
        again: again,
        comments: comments,
        subscribe: subscribe
    };

    
    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);
        displayReviewAsJson(data.data); 
        document.getElementById("reviewForm").reset();  
    })
    .catch(error => console.error("Error:", error));
});
