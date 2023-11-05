const mongoose = require('mongoose')

const electricianSchema = new mongoose.Schema(
    {
    name: String,
    phoneNumber:String,
    zone: [String],
    grievanceElectrician: Boolean

    }
);
const Electrician = mongoose.model('Electrician', electricianSchema) 
module.exports = Electrician