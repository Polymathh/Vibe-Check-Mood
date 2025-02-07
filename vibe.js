function changeVibe() {
    const mood = document.getElementById("moodSelector").value;
    const emoji = document.getElementById("emoji");
    let bgColor, newEmoji;

    switch(mood) {
        case "happy":
            bgColor = "#FFD700";
            newEmoji = "😊";
            break;
        case "chill":
            bgColor = "#87CEEB";
            newEmoji = "😌";
            break;
        case "sad":
            bgColor = "#4682B4";
            newEmoji = "😢";
            break;
        case "energetic":
            bgColor = "#FF4500";
            newEmoji = "⚡";
            break;
    }

    document.body.style.background = bgColor;
    emoji.textContent = newEmoji;
}
