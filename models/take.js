import mongoose from "mongoose"

const Schema = mongoose.Schema

const takeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    sport: {
      type: String,
      required: true,
      enum: ['NFL', 'NCAAF', 'NBA', 'NCAAM', 'NCAAW', 'WNBA', 'MLB', 'CWS', 'WCWS', 'NHL', 'MLS', 'Boxing', 'UFC'],
    },
    author: { type: Schema.Types.ObjectId, ref: 'Profile' }
  },
  { timestamps: true }
)

const Take = mongoose.model('Take', takeSchema)

export {
  Take
}