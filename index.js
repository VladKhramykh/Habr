const express = require("express");
const https = require("https");
const http = require('http');
const passport = require('passport');
const cors = require("cors");
const querystring = require('querystring');
const bodyParser = require('body-parser');
const passportSetup = require('./auth/OAuth20Google');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require("path");

const postsRouter = require("./routes/postsRoute.js");
const usersRouter = require("./routes/usersRouter.js");
const categoriesRouter = require("./routes/categoriesRouter.js");
const subcategoriesRouter = require("./routes/subcategoriesRouter.js");
const homeRouter = require("./routes/homeRouter.js");
const authRouter = require("./routes/authRouter.js");

const httpsOptions = {
    key: fs.readFileSync(path.resolve(__dirname, "./https/RS-TIPAHABR.key")).toString(),
    cert: fs.readFileSync(path.resolve(__dirname, "./https/RS-TIPAHABR.crt")).toString()
};
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(passport.initialize());
app.use(passport.session());


app.use("/users", usersRouter);
app.use("/posts", postsRouter);
app.use("/categories", categoriesRouter);
app.use("/subcategories", subcategoriesRouter);
app.use("/", homeRouter);
app.use('/login', authRouter);

app.use(function (req, res, next) {
    res.status(404).json({error: "Service Not Found"});
});

// web-socket

const WebSocket = require('ws');

const wss = new WebSocket.Server({
    port: 4001
});

wss.on('connection', function (ws) {
    let size = wss.clients.size;
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(size);
        }
    });
});

wss.on('close', function () {
    let size = wss.clients.size;
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(size);
        }
    });
});

// web-socket END

// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });
https.createServer(httpsOptions, app).listen(3443);


