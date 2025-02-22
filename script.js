async function getAIReply() {
    const userInput = document.getElementById("userInput").value;
    const responseElement = document.getElementById("aiResponse");

    if (!userInput) {
        responseElement.textContent = "Please enter a comment.";
        return;
    }

    responseElement.textContent = "Generating reply...";

    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "import OpenAI from "openai";
const openai = new OpenAI();
const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    store: true,
    messages: [
        {"role": "user", "content": "write a haiku about ai"}
    ]
});
"
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `Generate a smart reply for: ${userInput}`,
                max_tokens: 50
            })
        });

        const data = await response.json();
        responseElement.textContent = data.choices[0].text.trim();
    } catch (error) {
        responseElement.textContent = "Error generating reply. Please try again.";
        console.error(error);
    }
}
