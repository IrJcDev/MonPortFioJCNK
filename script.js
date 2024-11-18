// Récupérer les éléments
const chatHeader = document.getElementById("chat-header");
const chatBox = document.getElementById("chat-box");
const chatMessages = document.getElementById("chat-messages");
const chatText = document.getElementById("chat-text");
const sendBtn = document.getElementById("send-btn");

// Fonction pour afficher les messages
function addMessage(content, sender) {
    const message = document.createElement("div");
    message.classList.add("message", sender);
    message.textContent = content;
    chatMessages.appendChild(message);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll en bas
}

// Répondre automatiquement aux visiteurs
function botReply(userMessage) {
    let reply;
    if (userMessage.includes("bonjour") || userMessage.includes("salut")) {
        reply = "Bonjour ! Comment puis-je vous aider ?";
    } else if (userMessage.includes("aide")) {
        reply = "Je suis ici pour répondre à vos questions sur mon portfolio.";
    } else {
        reply = "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ?";
    }
    addMessage(reply, "bot");
}

// Gérer l’envoi des messages
sendBtn.addEventListener("click", () => {
    const userMessage = chatText.value.trim();
    if (userMessage) {
        addMessage(userMessage, "user");
        botReply(userMessage.toLowerCase());
        chatText.value = "";
    }
});

// Rendre le chat-box masquable (toggle)
chatHeader.addEventListener("click", () => {
    const isHidden = chatMessages.style.display === "none";
    chatMessages.style.display = isHidden ? "block" : "none";
    chatText.style.display = isHidden ? "flex" : "none"; // Correction de `chatInput`
});

// Initialisation
chatMessages.style.display = "block";
