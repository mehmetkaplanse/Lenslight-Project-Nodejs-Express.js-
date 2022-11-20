import express from "express";

const app = express();
const port = 5000;


app.get("/", (req,res) => {
    res.send("ANASAYFA 2");
})

app.listen(port, () => {
    console.log('Listening port on 5000');
})