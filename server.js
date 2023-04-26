const express = require('express');
const cors = require('cors');
const session = require('express-session');
const crypto = require('crypto');
const cookieParser = require('cookie-parser');


const corsOptions = {
    origin:"https://visionary-croquembouche-50b9b6.netlify.app/",
    credentials: true,
}


const app = express();

app.use(cors(corsOptions))
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());



app.use(session({
    secret: 'asd123123',
    name:'süti',
    resave: true,
    saveUninitialized: true,
    cookie: {maxAge:600000, secure: true, sameSite:'none'}
}));

app.get('/',(req,res)=>{
    res.json({
        message:'ok',
    })
});

require('./routes/routes')(app);

const port = 3000;
app.listen(port,()=>{
    console.log(`Server is running http://localhost:${port}`)
});
