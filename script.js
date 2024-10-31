document.getElementById("enter-button").addEventListener("click", function() {
    const nameInput = document.getElementById("name-input").value.toLowerCase();
    const validNames = ["dita", "istiqomah dita permata", "ditaa", "ditaaa", "ditaaa", "dita"];
    
    if (validNames.includes(nameInput)) {
        document.getElementById("login-container").style.display = "none";
        document.getElementById("message-container").style.display = "block";
    } else {
        document.getElementById("error-message").innerText = "Yahh maaf, kamu gak boleh lanjut :)";
    }
});

document.getElementById("submit-hotspot").addEventListener("click", function() {
    const hotspotInput = document.getElementById("hotspot-input").value.toLowerCase();
    
    if (hotspotInput === "nako") {
        document.getElementById("hotspot-error-message").innerText = "";
        document.getElementById("view-message").style.display = "block";
    } else {
        document.getElementById("hotspot-error-message").innerText = "Yah, salah, coba lagi";
    }
});

document.getElementById("view-message").addEventListener("click", function() {
    document.getElementById("message-container").style.display = "none";
    document.getElementById("final-message").style.display = "block";
});

document.getElementById("back-button").addEventListener("click", function() {
    document.getElementById("final-message").style.display = "none";
    document.getElementById("login-container").style.display = "block";
    document.getElementById("name-input").value = "";
});
