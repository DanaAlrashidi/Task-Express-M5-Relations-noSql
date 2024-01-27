const { model, Schema } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  author: { type: Schema.Types.ObjectId, ref: "Author", required: true },
});

module.exports = model("Post", PostSchema);
