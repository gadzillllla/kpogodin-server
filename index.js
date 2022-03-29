const express = require('express')
const cors = require('cors')

const app = express();
const port = 4000;
app.use(express.json());
app.use(cors());

app.get('/api/v1/pokemons', (req, res) => {
  return res.json([{ name: 'БУЛЬБАЗАВР' }, {name: 'ПИКАЧУ' }, { name: 'СКВИРЛ' }]);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})