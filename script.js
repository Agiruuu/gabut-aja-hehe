const enterButton = document.getElementById("enterButton");
const nameInput = document.getElementById("nameInput");
const messageDiv = document.getElementById("message");

const messages = {
    Dita: async () => {
        const firstAnswer = await askQuestion("Apa nama hotspot Dita?", ["teyo", "Teyo"]);
        if (!firstAnswer) return;

        const secondAnswer = await askQuestion("Apa nama hotspot ku?", ["nako", "Nako"]);
        if (!secondAnswer) return;

        showMessage(
            "Wahh kalo tentang Dita sih aku gak bisa jelasin banyak.. intinya dia tuh orang yang paling ku sayang setelah ibuk :)"
        );
    },
    Riesna: "Riesnaaa, aku selalu ngakak kalo ketemu sama dia, soalnya dia tuh kocakk, sering bahas banyak hal random yang kocak2 intinya deh.. dan sering dengerin curhatan ku juga.. udah ku anggep kayak Kakak sendiri, walaupun dia lebih muda sih ehehe",
    Uaish: "Orangnya terlihat sangar, tapi hatinya hello kitty banget njir.. apalagi kalo udah bahas tentang keluarga, dah 100% bakal mewek tu orang awkakkwakwa.. dan dia orangnya baik, bertanggung jawab, cuman kalo ngomong suka muter2 aja.. kurang bisa to the point",
    Rifa: "adek sepupu paling kendell, apa apa berani, pekerja keras banget.. agak galak juga, terus yang pasti baik ehehe",
    Yana: "Adek sepupu paling cerewettt, aku ngeliat dia kek ngambekan sih orangnya, disenggol dikit misuh-misuh cerewetnya keluarrr.. tapi dia cantik gemoy, walopun akhir-akhir ini keknya makin bulet awkakawka",
    Ilham: "Aku nganggep dia sebagai kawan kuliah paling akrab, bodoamat dia nganggep begitu juga atau ngga, yang jelas kehidupan kuliahku jadi lebih mudah semua berkat bantuan dia.. bener-bener orang yang menemani masa-masa kuliahku"
};

enterButton.addEventListener("click", () => {
    const name = nameInput.value.trim();
    if (!name) return alert("Nama tidak boleh kosong!");

    const lowerName = name.toLowerCase();
    const keys = Object.keys(messages);
    const matchedKey = keys.find((key) => key.toLowerCase() === lowerName);

    if (matchedKey) {
        const action = messages[matchedKey];
        if (typeof action === "string") {
            showMessage(action);
        } else if (typeof action === "function") {
            action();
        }
    } else {
        alert("Nama tidak ditemukan!");
    }
});

function showMessage(message) {
    messageDiv.innerHTML = `
        <p>${message}</p>
        <button onclick="reset()">Kembali</button>
    `;
}

function reset() {
    messageDiv.innerHTML = "";
    nameInput.value = "";
}

async function askQuestion(question, validAnswers) {
    let answer = prompt(question);
    if (!answer || !validAnswers.includes(answer)) {
        alert("Jawaban salah, coba lagi.");
        return false;
    }
    return true;
}
