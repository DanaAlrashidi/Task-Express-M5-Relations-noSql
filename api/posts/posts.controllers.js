const Author = require("../../models/Author");
const Post = require("../../models/Post");

exports.fetchPost = async (postId, next) => {
  try {
    const post = await Post.findById(postId);
    return post;
  } catch (error) {
    next(error);
  }
};

exports.postsCreate = async (req, res) => {
  try {
    const { authorId } = req.params;
    const author = await Author.findById(authorId);
    if (!author) return res.status(404).json({ message: "author not found" });
    req.body.author = authorId;
    const newPost = await Post.create(req.body);
    await author.updateOne({ $push: { posts: newPost._id } });
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

exports.postsDelete = async (req, res) => {
  try {
    await Post.findByIdAndRemove({ _id: req.post.id });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsUpdate = async (req, res) => {
  try {
    await Post.findByIdAndUpdate(req.post.id, req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

exports.postsGet = async (req, res) => {
  try {
    const posts = await Post.find().populate("tag");
    res.json(posts);
  } catch (error) {
    next(error);
  }
};
exports.tagAdd = async (req, res, next) => {
  try {
    const { tagId } = req.params;
    const post = await Post.findByIdAndUpdate(tagId);
    if (!post) return res.status(404).json({ message: "POST not found" });
    await post.updateOne({ $push: { posts: post._id } });
    return res.status(204).end;
  } catch (error) {
    next(error);
  }
};

exports;
// module.exports = {
//   fetchPost,
//   postsCreate,
//   postsDelete,
//   postsUpdate,
//   postsGet,
//   tagAdd,
// };
