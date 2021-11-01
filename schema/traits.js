const mongoose = require('mongoose')

const traits = new mongoose.Schema({
    attributes: [{
        trait_type
    }]
})


module.exports = mongoose.model("trait",traits)