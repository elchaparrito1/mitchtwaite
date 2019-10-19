const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const messageRoute = express.Router();
const path = require("path");
const compression = require("compression");
const sgMail = require("@sendgrid/mail");
var http = require("http");
setInterval(function() {
    http.get("http://www.mitchtwaite.com");
}, 300000);

app.use(compression());

require("dotenv").config({ path: ".env" });
const PORT = process.env.PORT || 3001;
//Added from Pusher
const Chatkit = require("@pusher/chatkit-server");
const chatkit = new Chatkit.default({
    instanceLocator: process.env.CHATKIT_INSTANCE_LOCATOR,
    key: process.env.CHATKIT_SECRET_KEY,
});
///////////////////  
const Nexmo = require("nexmo");
const nexmo = new Nexmo({
    apiKey: process.env.NEXMO_API_KEY,
    apiSecret: process.env.NEXMO_API_SECRET
});


//Make public a static folder
app.use(express.static("public"));

app.use(cors());
app.use(bodyParser.json());

// ... other app.use middleware 
app.use(express.static(path.join(__dirname, "client", "build")))

//Other option:
// if(process.env.NODE_ENV === 'production'){
//     //set static folder
//     app.use(express.static('client/build'));
// }
// ...


//API for NodeMailer and sending an email.
messageRoute.route("/contact/send-message").post(function(req, res) {
    const { email, name, message } = req.body;
    
    if (name === "" || email === "" || message === "") {
        res.json("missing information");
    } else {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        const msg = {
            to: "mitchelltwaite11@gmail.com",
            from: email,
            subject: `Personal Message From: ${name}`,
            text: message,
            html: `<p>${message}</p>`
        }

        sgMail.send(msg, function(err, response) {
            if (err) {
                res.json("error");
            } else {
                res.status(200).json("email sent");
            }
        });;
    }
});
////////////////////////////////////////////////////////

//API from Pusher for instant chat functionality
app.post("/users", (req, res) => {
    const { userId } = req.body;
    const from = process.env.FROM_NUMBER;
    const to = process.env.TO_NUMBER;
    const text = `Hey! ${userId} is trying to chat with you!`;
    
    chatkit
    .createUser({
        id: userId,
        name: userId,
    })
    .then(() => {
        res.sendStatus(201);
    })
    .catch(err => {
        if (err.error === "services/chatkit/user_already_exists") {
            console.log(`User already exists: ${userId}`);
            res.sendStatus(200);
        } else {
            res.status(err.status).json(err);
        }
    });
    
    if (userId !== "support") {
        nexmo.message.sendSms(from, to, text, (err, responseData) => {
            if (err) {
                console.log(err);
            } else {
                if(responseData.messages[0]['status'] === "0") {
                    console.log("Message sent successfully.");
                } else {
                    console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                }
            }
        });
    };
});

app.post("/support", (req, res) => {
    const password = req.body.password;
    if (password === process.env.SUPPORT_PASSWORD) {
        res.json("correct password")
    } else {
        res.json("incorrect password")
    }
});

app.post("/authenticate", (req, res) => {
    const authData = chatkit.authenticate({
        userId: req.query.user_id,
    });
    res.status(authData.status).send(authData.body);
});

//using router routes
app.use("/api", messageRoute);

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});

