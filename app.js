var moment = require('moment');
var express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public'));

const log = (message) => {
    let time = moment().format();
    console.log('[Server] @ '+time+' '+message);
}

const adder = (x, y) => {
    return x + y;
}

app.get('/adder', (req, res) => {
    let x = parseInt(req.query.x);
    let y = parseInt(req.query.y);

    result = adder(x, y);

    res.send(`Result =  ${result}`);
})

app.listen(PORT, () => log(`Server is running on port ${PORT}`))