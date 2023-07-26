import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    );

    // Cleanup to remove snapshot listener
    return unsubscribe;
  }, [db]);

  return (
    <div>
      {posts.map((post, index) => {
        const { username, profileImage, image, caption } = post.data();
        return (
          <Post
            key={index}
            id={post.id}
            username={username}
            avatar={profileImage}
            postImg={image}
            caption={caption}
          />
        );
      })}
    </div>
  );
};
export default Posts;
