async function getAIReply() {
    const apiKey = "YOUR_OPENAI_API_KEY";  // Replace with your actual OpenAI API key
    const userMessage = document.getElementById("commentBox").value;

    if (!userMessage) {
        alert("Please enter a comment.");
        return;
    }

    const url = "https://api.openai.com/v1/completions";
    const headers = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
    };

    const body = JSON.stringify({
        model: "text-davinci-003",
        prompt: `Generate a reply for this comment: "${userMessage}"`,
        max_tokens: 50
    });

    try {
        const response = await fetch(url, { method: "POST", headers, body });
        const data = await response.json();

        if (data.choices && data.choices.length > 0) {
            document.getElementById("replyBox").innerText = data.choices[0].text;
        } else {
            document.getElementById("replyBox").innerText = "Error: No response received.";
        }
    } catch (error) {
        console.error("Error fetching AI response:", error);
        document.getElementById("replyBox").innerText = "Error: Could not get reply.";
    }
}
