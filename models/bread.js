// Require mongoose
const mongoose = require('mongoose')

//Creating shorthand for the Schema constructor
const { Schema } = mongoose

// schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.jp/500x500.png' },
  baker: {
    type: Schema.Types.ObjectID,
    ref: 'Baker'
  }
})

// Helper Methods
breadSchema.methods.getBakedBy = function(){
  return `${this.name} was baked with love by ${this.baker.name}, who has been with us since ${this.baker.startDate.getFullYear()}`
}

const Bread = mongoose.model('Bread', breadSchema)

module.exports = Bread