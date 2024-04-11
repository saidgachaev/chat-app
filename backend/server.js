import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 500;

app.get("/", (req, res) => {
res.send('hello world')
})

app.listen(PORT, () => console.log(`server works on port ${PORT}`));