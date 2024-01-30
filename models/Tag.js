const { model, Schema } = require("mongoose");
const tagSchema = new Schema({
  tagName: String,
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
});
module.exports = model("tag", tagSchema);
