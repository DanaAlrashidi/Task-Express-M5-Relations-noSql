const { model, Schema } = require("mongoose");

const autherSchema = new Schema({
  name: { type: String, require: true },
  posts: [{ type: Schema.Types.ObjectID, ref: "Post", require: true }],
});

module.exports = model("Author", autherSchema);
