const express = require ('express');
//INITIALIZING APP WITH EXPRESS
const app = express();
//Creating an endpoint/route handler for the index.js file
app.get('/', function(req, res){
    res.send('<h1 style="color:green;"><u>Hello World!</u></h1>')
});

//Setting a value to define our listening port either by checking the environment or by listening at port 5000 specifically.
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));