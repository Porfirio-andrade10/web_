const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

const products =[
    {id:1,name:'Computador',price:5000},
    {id:2,name:'Xbox 360',price:3500}
]

app.get('/products',(req,res)=>{
    
    res.json(products);
});

app.post('/products',(req,res)=>{
    const {id,name,price}=req.body;
    const resposta = {id,name,price};
    products.push(resposta);
    res.status(201).json(resposta);
})

app.listen(port,()=>{
    console.log('API is runningon http://localhost:${port}');
});


