const express = require('express');
const app = express();
app.listen(3000, () => console.log("escutando na porta 3000"));

app.use(express.static('top'));

app.use(express.json());

app.post('/api/lista', (req, res) => {
    const novaObra = req.body;
    lista.push(novaObra);
    res.json({status: 'sucesso'});
});

app.get ('api/lista', (req, res) => {res.json(lista);});

