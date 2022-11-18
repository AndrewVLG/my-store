import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(3030, err => {
    if(err) {
        return console.log('Error')
    } else {
        return console.log('Server Ok!')
    }
})