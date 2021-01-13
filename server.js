const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
const path = require('path')
// const fetch = require('node-fetch');
dotenv.config()

const app = express();

app.use(express.static(path.resolve('client/build/')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


const EMAILSEND = process.env.EMAILSEND
const EMAILSENDPASS = process.env.EMAILSENDPASS
const RESIVERS = process.env.RESIVERS


app.get('/download', (req, res) => res.download('./rezume.docx', function(err){
	if (err) {
		throw err;
	}
	console.log('Someone just downloaded our file!');
}))

app.get('/downloadru', (req, res) => res.download('./rezumeru.docx', function(err){
	if (err) {
		throw err;
	}
	console.log('Someone just downloaded our file!');
}))



app.post('/send_message',async (req, res) => {
	console.log(req.body);
  const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.body.name}</li>
      <li>Email: ${req.body.email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465(false for 587), false for other ports
    auth: {
        user: `${EMAILSEND}`, // generated ethereal user
        pass: EMAILSENDPASS, // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false //убрать если это уже не с локал хоста
    }
  });

  // setup email data with unicode symbols
  let mailOptions = {
      from: `"Portfolio contact" <${EMAILSEND}>`, // sender address
      to: RESIVERS, // list of RESIVERS
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
				console.log(error);
          return res.sendStatus(406)
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    return res.sendStatus(200);
  });
  });

//root необходимо опустить в самый конец файла чтоб не было конфликтов 
const root = path.join(process.env.PWD, 'client', 'build');
app.use(express.static(root));
app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
});


// app.get('*', (req, res) => {
//   res.sendFile(path.resolve('client/build/index.html'))
// })
const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`server is work ${PORT}`));






