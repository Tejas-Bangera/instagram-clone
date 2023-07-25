import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";

const Post = ({ username, avatar, postImg, caption }) => {
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
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatBubbleOvalLeftIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>

      {/* Caption */}
      <p className="p-4 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input box */}
      <form action="" className="flex items-center p-4">
        <FaceSmileIcon className="h-7 " />
        <input
          name="comment"
          type="text"
          className="border-none flex-1 focus:ring-0"
          placeholder="Add a comment..."
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};
export default Post;
