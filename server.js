const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const nodemailer = require('nodemailer');
const creds = require('./config');

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get('/dev_portfolio', (req, res) => {
    res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

var transport = {
    host: 'smtp.gmail.com', // e.g. smtp.gmail.com
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log('All works fine, congratz!');
    }
});

app.use(express.json());
app.post('/contact/send', (req, res, next) => {
    const name = req.body.name
    const email = req.body.email
    const message = req.body.message


    var mail = {
        from: name,
        to: 'seuemail@email.com',
        subject: 'Contact form request',

        html: message
    }

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                msg: 'fail',
                err
            })
        } else {
            res.json({
                msg: 'success'
            })
        }
    })
})