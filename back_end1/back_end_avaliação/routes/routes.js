import { Router } from "express";

const router = Router()

router.get("/hello",(request,response)=>{response.send("<h1>Gilbala<h1/>")})
export default router