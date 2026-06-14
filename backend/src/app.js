import express from 'express';
import db_configuration from './config/db_config.js';

const app = express()
app.use(express.json())
db_configuration()

app.get('/' , (req , res)=> {
    res.send("Backend is running")
})

export default app