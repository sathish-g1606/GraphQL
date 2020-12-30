const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cors-orii requests
app.use(cors());

//connect to mlab database
mongoose.connect('mongodb+srv://sathish_1606:sathish123@cluster0.b1ukx.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', ()=>{
    console.log('connected to database');
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, ()=>{
    console.log('Now listening for requests on port 4000');
});