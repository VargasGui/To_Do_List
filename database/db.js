const mongoose = require("mongoose")
const connectToDb = () => {
    mongoose
        .connect("mongodb+srv://VargasGui:admin123@aluradb.3kl2wny.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        .then(() => console.log("CONECTADO COM SUCESSO!"))
        .catch((err) => console.log(err))
}

module.exports = connectToDb;