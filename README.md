#Article Summarizer


This application provides a simple interface to summarize articles. It is built using Node.js, Express, and a touch of client-side JavaScript for the front-end.

#Features
Paste in an article to get a quick summary.
Summarized content is returned to the user.
Designed with a clean and user-friendly UI.

#Server Implementation


const express = require('express');
const app = express();
const PORT = 3000;
const { NlpManager } = require('node-nlp');

app.use(express.json());
app.use(express.static('public'));

app.post('/summarize', (req, res) => {
    const article = req.body.article;
    if (!article) {
        return res.status(400).json({ error: "Article content is missing." });
    }
    const summary = article.substring(0, 100) + '...';
    res.json({ summary: summary });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

#Setup
Ensure you have Node.js and npm installed.
Clone the repository.
Navigate to the project directory and run npm install to install dependencies.
Start the server with node server.js or whichever filename contains your server code.
Open a browser and visit http://localhost:3000 to access the app.
