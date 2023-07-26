import { db } from "@/firebase";
import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useRef, useState } from "react";
import Moment from "react-moment";

const Post = ({ id, username, avatar, postImg, caption }) => {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const inputRef = useRef(null);

  function getComments() {
    // Returns cleanup function
    return onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }

  function getLikes() {
    // Returns cleanup function
    return onSnapshot(
      query(collection(db, "posts", id, "likes")),
      (snapshot) => {
        setLikes(snapshot.docs);
      }
    );
  }

  useEffect(() => {
    setHasLiked(
      likes.findIndex((item) => item.id === session?.user?.uid) !== -1
    );
  }, [likes]);

  useEffect(() => {
    const unsubscribeComments = getComments();
    const unsubscribeLikes = getLikes();

    // Cleanup to remove snapshot listeners
    return () => {
      unsubscribeComments();
      unsubscribeLikes();
    };
  }, [db, id]);

  async function likePost() {
    // If already liked, then unlike
    if (hasLiked) {
      // Remove user uid from likes in firestore
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    }
    // Like the post
    else {
      // Add user uid under likes collection in firestore
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  }

  async function sendComment(event) {
    event.preventDefault();

    const commentData = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentData,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }

  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 object-contain border p-1 mr-3 rounded-full"
          src={avatar}
          alt="profile picture"
        />
        <p className="flex-grow font-bold">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>
      {/* Post Image */}
      <img className="object-cover w-full" src={postImg} alt="Post Image" />
      {/* Buttons */}
      {session && (
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                className="postBtn text-red-500"
                onClick={likePost}
              />
            ) : (
              <HeartIcon className="postBtn" onClick={likePost} />
            )}
            <ChatBubbleOvalLeftIcon
              className="postBtn"
              onClick={() => inputRef.current.focus()}
            />
            <PaperAirplaneIcon className="postBtn -rotate-45" />
          </div>
          <BookmarkIcon className="postBtn" />
        </div>
      )}

      {/* Caption */}
      <div className="p-4 truncate">
        {likes.length > 0 && (
          <p className="font-bold mb-1">{likes.length} likes</p>
        )}
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </div>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-gray-300 scrollbar-thin">
          {comments.map((item) => (
            <div key={item.id} className="flex items-center space-x-2 mb-3">
              <img
                className="h-7 rounded-full"
                src={item.data().userImage}
                alt="profile pic"
              />
              <p className="text-sm flex-1">
                <span className="font-bold">{item.data().username}</span>{" "}
                {item.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs">
                {item.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* Input box */}
      {session && (
        <form action="" className="flex items-center p-4">
          <FaceSmileIcon className="h-7 " />
          <input
            ref={inputRef}
            name="comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            type="text"
            className="border-none flex-1 focus:ring-0"
            placeholder="Add a comment..."
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-500 disabled:text-blue-300"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
};
export default Post;
