const http = require('http');
const static = require('node-static');
const express = require('express');
const bodyParser = require('body-parser');


// в чем разница между parse и stringify 
// зачем нужно const file = new static.Server('.');
const fs = require('fs');

const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());

// из каталога
app.get(`/catalogData`, (req, res) => {
  // почему в методичке не "./"
  // что передается в data? 
  fs.readFile('./catalog.json', 'utf8', (err, data) => {
    // почему нет const obj = JSON.parse(data);
    res.send(data);
  });
});

// из корзины
app.get('/cart', (req, res) => {
  fs.readFile('./cart.json', 'utf-8', (err, data) => {
      res.send(data);
  });
});

//добавление в корзину
app.post('/', (req, res) => {
  fs.readFile('./cart.json', 'utf8', (err, data) => {
    if (err) {
      res.send('{"result": 0}');
    } else {
      const cart = JSON.parse(data);
      const item = req.body;
      
      cart.push(item);

      fs.writeFile('./cart.json', JSON.stringify(cart), (err) => {
        if (err) {
          res.send('{"result": 0}');
        } else {
          res.send('{"result": 1}');
        }
      });
    }
  });
});

app.listen(3000, () => {
  console.log('server is running on port 3000!');
});

//?
// http.createServer((req, res) => {
//   file.serve(req, res);
// }).listen(5000);