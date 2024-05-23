import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  addComment,
  getComments,
  deleteComment,
  getFriendPosts
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/friend-posts/:userId/posts", verifyToken, getFriendPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

router.post("/:postId/comments", addComment);
router.get("/:postId/comments", getComments);
router.delete("/:postId/comments/:commentId", deleteComment);

export default router;
