const { model, Schema } = require("mongoose");
const tagSchema = new Schema({
  tagName: String,
  posts: [{ type: Schema.Types.ObjectId, ref: "Post", required: true }],
});
module.exports = model("Tag", tagSchema);
