const enterButton = document.getElementById("enterButton");
const nameInput = document.getElementById("nameInput");
const questionContainer = document.getElementById("questionContainer");
const questionText = document.getElementById("questionText");
const answerInput = document.getElementById("answerInput");
const answerButton = document.getElementById("answerButton");
const messageContainer = document.getElementById("messageContainer");
const messageText = document.getElementById("messageText");
const backButton = document.getElementById("backButton");

const messages = {
    dita: [
        { question: "Apa nama hotspot Dita?", answer: ["teyo", "Teyo"] },
        { question: "Apa nama hotspot ku?", answer: ["nako", "Nako"] },
        finalMessage: "Wahh kalo tentang Dita sih aku gak bisa jelasin banyak.. intinya dia tuh orang yang paling ku sayang setelah ibuk :)"
    ],
    riesna: "Riesnaaa, aku selalu ngakak kalo ketemu sama dia...",
    uaish: "Orangnya terlihat sangar, tapi hatinya hello kitty banget njir...",
    rifa: "adek sepupu paling kendell, apa apa berani...",
    yana: "Adek sepupu paling cerewettt...",
    ilham: "Aku nganggep dia sebagai kawan kuliah paling akrab...",
    kevin: "temen kampus yang bisa dibilang sangat dekat...",
    langgeng: "temen KKN, orangnya jujur dan ceplas ceplos...",
    arkhan: "temen KKN, bisa dibilang orang paling taat...",
    elsa: "temen KKN, awalnya kukira dia orangnya pendiem...",
    desi: "temen KKN, jujur awalnya aku takut sama dia...",
    belva: "temen KKN, cantik dan tinggi...",
    mutia: "temen KKN, orangnya sangat slayyyyy..."
};

let currentQuestions = [];
let currentStep = 0;

enterButton.addEventListener("click", () => {
    const name = nameInput.value.toLowerCase();
    if (messages[name]) {
        if (name === "dita") {
            currentQuestions = messages.dita;
            currentStep = 0;
            showQuestion();
        } else {
            showMessage(messages[name]);
        }
    } else {
        alert("Nama tidak ditemukan.");
    }
});

answerButton.addEventListener("click", () => {
    const answer = answerInput.value;
    const validAnswers = currentQuestions[currentStep]?.answer || [];
    if (validAnswers.includes(answer)) {
        currentStep++;
        if (currentStep < currentQuestions.length - 1) {
            showQuestion();
        } else {
            showMessage(currentQuestions.finalMessage);
        }
    } else {
        alert("Jawaban salah!");
    }
});

backButton.addEventListener("click", () => {
    nameInput.value = "";
    answerInput.value = "";
    currentQuestions = [];
    currentStep = 0;
    questionContainer.classList.add("hidden");
    messageContainer.classList.add("hidden");
});

function showQuestion() {
    questionText.textContent = currentQuestions[currentStep].question;
    questionContainer.classList.remove("hidden");
    messageContainer.classList.add("hidden");
}

function showMessage(message) {
    messageText.textContent = message;
    messageContainer.classList.remove("hidden");
    questionContainer.classList.add("hidden");
}
