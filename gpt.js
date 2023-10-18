document.addEventListener("DOMContentLoaded", function() {
    const chatForm = document.getElementById("chat-form");
    const userInput = document.getElementById("user-input");
    const chatContainer = document.getElementById("chat-container");

    chatForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const userMessage = userInput.value;

        // Display user message
        const userMessageElement = document.createElement("div");
        userMessageElement.className = "chat-message user-message";
        userMessageElement.textContent = userMessage;
        chatContainer.appendChild(userMessageElement);

        // Call the OpenAI API
        openai.completions.create({
            engine: "davinci",
            prompt: userMessage,
            max_tokens: 150
        })
        .then(response => {
            const aiMessage = response.choices[0].message.content;

            // Display AI message
            const aiMessageElement = document.createElement("div");
            aiMessageElement.className = "chat-message ai-message";
            aiMessageElement.textContent = aiMessage;
            chatContainer.appendChild(aiMessageElement);
        })
        .catch(error => console.error("API Error:", error));

        userInput.value = "";
    });
});
