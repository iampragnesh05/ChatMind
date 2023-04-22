const api_key = "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"
async function fetchData() {
    const prompt = document.getElementById("prompt").value;
    const max_tokens = parseInt(document.getElementById("max_tokens").value, 10);
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${api_key}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: max_tokens,
            top_p: 0.7
        })
    })
    const data = await response.json()
    console.log(data)
    const text = data.choices[0].text.trim();
    console.log(text);
    document.getElementById("response").textContent = text;
}