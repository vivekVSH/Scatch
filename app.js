const cookieParser = require('cookie-parser');
const path = require('path');
const express = require('express');
const app = express();

const db = require('./config/mongoose_connection');
const ownerRouter = require('./routes/ownerRouter');
const userRouter = require('./routes/userRouter');
const productRouter = require('./routes/productRouter');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use('/users', userRouter);
app.use('/owners', ownerRouter);
app.use('/products', productRouter);

app.get('/', function(req, res){
    res.send('hello bob');
})

app.listen(3000);