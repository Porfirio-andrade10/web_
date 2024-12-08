const express = require('express');
const Router = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port,()=>{
    console.log(`API is runningon http://localhost:${port}`)}
);

const router = Router();
router.post('/formulario',(req,res)=>{
    const {name,email,mesage} = req.body;
    const formulario ={name,email,mesage};
    co
});

app.use(router);