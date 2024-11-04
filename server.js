const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080;



const rawData = fs.readFileSync('programmingsimple.json');
const languagesData = JSON.parse(rawData);


app.get('/languages', (req, res) => {
    res.json(languagesData.programmingLanguages);

});


app.get('/languages/:id', (req, res) => {
  const languageId = parseInt(req.params.id);
  const language = languagesData.programmingL.find(lang => lang.id === languageId);

  if (language) {
    res.json(language);
  } else {
    res.status(404).json({ error: 'Language not found' });
  }
});

