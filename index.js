const express = require('express')
const cors = require('cors')

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());

const testResponse = [{ name: 'БУЛЬБАЗАВР' }, {name: 'ПИКАЧУ' }, { name: 'СКВИРЛ' }, {name: 'ЧЕРМАНДЕР'}, {name: 'РОЙ БЕДРИЛ'}, {name: 'ПСАЙДАК'}, {name: 'ВЕДЕМОН'}];

app.get('/api/v1/pokemons', (req, res) => {
  return res.json(testResponse);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})