const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send("Server del mio blog")
});

app.get('/bacheca', (req, res) => {
    const bacheca = [
        {
          "titolo": "Ciambellone",
          "contenuto": "Il ciambellone è un dolce soffice e profumato, perfetto per la colazione o la merenda.",
          "img": "./images/ciambellone.jpeg",
          "tags": ["dolce", "colazione", "merenda", "soffice", "tradizionale"]
        },
        {
            "titolo": "Cracker alla Barbabietola",
            "contenuto": "I cracker alla barbabietola sono uno snack croccante e salutare, realizzato con farina, barbabietola frullata e semi vari.",
            "img": "./images/cracker_barbabietola.jpeg",
            "tags": ["cracker", "barbabietola", "snack", "croccante", "salutare"]
        },
        {
          "titolo": "Pane Fritto Dolce",
          "contenuto": "Il pane fritto dolce è una ricetta tipica di recupero, realizzata con fette di pane raffermo immerse in latte.",
          "img": "./images/pane_fritto_dolce.jpeg",
          "tags": ["dolce", "fritto", "pane", "cannella", "tradizione"]
        },
        {
            "titolo": "Pasta alla Barbabietola",
            "contenuto": "La pasta alla barbabietola è un primo piatto colorato e saporito, preparato con pasta fresca o secca con l'aggiunta di barbabietola per un gusto dolce e un colore vivace.",
            "img": "./images/pasta_barbabietola.jpeg",
            "tags": ["pasta", "barbabietola", "primo", "colorato", "vegetariano"]
        },
        {
          "titolo": "Torta Paesana",
          "contenuto": "La torta paesana è un dolce rustico lombardo preparato con pane raffermo, latte, cacao, pinoli, uvetta e amaretti.",
          "img": "./images/torta_paesana.jpeg",
          "tags": ["dolce", "pane", "cacao", "rustico", "lombardo", "tradizione"]
        }
        
      ]

      res.json(bacheca);
      
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})