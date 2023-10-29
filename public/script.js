// This should be saved in /public/script.js
document.addEventListener('DOMContentLoaded', function() {
    const articleInput = document.getElementById('articleInput');
    const summarizeBtn = document.getElementById('summarizeBtn');
    const summaryOutput = document.getElementById('summaryOutput');

    summarizeBtn.addEventListener('click', function() {
        const articleContent = articleInput.value;

        if (articleContent.trim() === '') {
            alert('Please paste an article before summarizing.');
            return;
        }

        fetch('/summarize', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ article: articleContent })
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                alert(data.error);
            } else {
                summaryOutput.textContent = data.summary;
            }
        })
        .catch(error => {
            console.error('There was an error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
