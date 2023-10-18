// Replace 'YOUR_API_KEY' with the API key you obtained.
const apiKey = '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';
const chatForm = document.getElementById('chat-form');
const userInput = document.getElementById('user-input');
const chatContainer = document.getElementById('chat-container');

chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userMessage = userInput.value;

    // Send user message to the server and display it in the chat.
    chatContainer.innerHTML += `<div class="user-message">${userMessage}</div>`;

    // Make a call to the OpenAI API.
    fetch('https://api.openai.com/v1/engines/gpt-3.5-turbo/completions', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150, // Adjust as needed.
        }),
    })
    .then(response => response.json())
    .then(data => {
        const aiMessage = data.choices[0].text;
        chatContainer.innerHTML += `<div class="ai-message">${aiMessage}</div>`;
    })
    .catch(error => console.error('API Error:', error));

    userInput.value = '';
});
