const mongoose = require("mongoose")
const connectToDb = () => {
    mongoose
        .connect(process.env.URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
        .then(() => console.log("CONECTADO COM SUCESSO!"))
        .catch((err) => console.log(err))
}

module.exports = connectToDb;