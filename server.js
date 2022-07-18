var express = require('express'),
    path = require('path'),
    nodeMailer = require('nodemailer'),
    bodyParser = require('body-parser');

var app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = 3000;

app.get('/', function (req, res) {
    res.render('index');
    res
});

// app.post('/send-email', function (req, res) {
//     // console.log("////////////////////////////////////////////////////////////////////////////")
//     // console.log("req: ", req)
//     // console.log("res: ", res)
//     let transporter = nodeMailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             user: 'vft.iot@gmail.com',
//             pass: 'oadayzueyqujtwif'
//         }
//     });
//     let mailOptions = {
//         // from: '"Steven Handsome" <ssseew17@gmail.com>', // sender address
//         from: '"VFlowtech IoT Alert"', // sender address
//         to: req.body.to, // list of receivers
//         subject: req.body.subject, // Subject line
//         text: req.body.body, // plain text body // template alert message to be inserted
//         // html: '<b>NodeJS Email Tutorial</b>' // html body
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message %s sent: %s', info.messageId, info.response);
//         res.render('index');
//     });
// });

function alertMsgTemplate (receiver, subject, text){
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'vft.iot@gmail.com',
            pass: 'oadayzueyqujtwif'
        }
    });
    let mailOptions = {
        // from: '"Steven Handsome" <ssseew17@gmail.com>', // sender address
        from: '"VFlowtech IoT Alert"', // sender address
        to: receiver, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body // template alert message to be inserted
        // html: '<b>NodeJS Email Tutorial</b>' // html body
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.render('index');
    });

    console.log(receiver, subject, text);
}

alertMsgTemplate('vft.iot.test@gmail.com', 'Test2', 'templateMsg'); // call the function

app.listen(port, function () {
    console.log('Server is running at port: ', port);
});
