import express from "express"
import router from "./routes/routes.js"
const app = express()
app.use(router)
app.listen(3000,()=>{console.log("http://localhost:3000")})