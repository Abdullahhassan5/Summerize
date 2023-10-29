const express = require('express');
const app = express();
const PORT = 3000;
const { NlpManager } = require('node-nlp');



// Use built-in express.json() middleware to parse JSON requests
app.use(express.json());

// Serve static files from the "public" directory
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
