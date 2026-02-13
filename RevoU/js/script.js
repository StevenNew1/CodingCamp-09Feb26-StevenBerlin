// welcomeMessage();

// // Welcome Message Function
// function welcomeMessage() {
//     // Show Popup
//     let name = prompt("Welcome to Yama Company! What is your name?");

//     // validate input
//     if (name == null || name.trim() === "") {
//         // If user cancels or enters an empty name, use "Guest" as default
//         name = "Guest";
//     }

//     // Display Welcome Message
//     document.getElementById('welcome-speech').innerHTML = `Hello, ${name}! Welcome to Yama Company.`;
// }

function validateForm() {
    const messageForm = document.getElementById("form");
    const resultBox = document.querySelector(".result-box");
    
    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
    
        // Ambil input dari user
        const name = document.getElementById("input-name").value;
        const birthDate = document.getElementById("input-birth").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById("message").value;
        const now = new Date();
        
        // Masukkan data ke dalam span di result-box
        document.getElementById("current-time").innerText = now.toLocaleString();
        document.getElementById("output-name").innerText = name;
        document.getElementById("output-birth").innerText = birthDate;
        document.getElementById("output-gender").innerText = gender;
        document.getElementById("output-message").innerText = message;
    
        // Munculkan result-box yang tadinya display: none
        resultBox.style.display = "flex";
    
        alert("Terima kasih! Pesan Anda telah diterima.");
    });
}

validateForm();

