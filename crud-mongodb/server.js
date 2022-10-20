import app from './src/app.js';


// Pega a porta 300 para ambiente local ou a porta de prod/hml
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})