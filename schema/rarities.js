const mongoose = require('mongoose')

const RaritySchema = new mongoose.Schema({
    score:{
        type: String,
        required: true,
    }
})


module.exports = mongoose.model("Rarity",RaritySchema)