import mongoose from "mongoose";


const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: "lenslight_tr",
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log('mongodb bağlantısı kuruldu.');
    }).catch((err) => {
        console.log("bağlantı hatası : "+err);
    })
}


export default conn;