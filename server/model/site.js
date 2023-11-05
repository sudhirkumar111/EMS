const mongoose = require('mongoose');



const siteSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  phone: {
    type: String,
   
  },
  city: {
    type: String,
   
  },
  AssignedElectritian: [],
  InstallationDate: {
    type: Date,
   
  },
  grievance: {
    type: Boolean
}});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;
