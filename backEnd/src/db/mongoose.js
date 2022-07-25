const mongoose = require('mongoose');

const dbconnecturl = "mongodb://127.0.0.1:27017/noterapp";
mongoose.connect(dbconnecturl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
 }
);