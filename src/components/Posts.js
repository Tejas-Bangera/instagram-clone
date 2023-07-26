import { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";

const dummyData = [
  {
    id: "1",
    username: "dummy user",
    avatar: "http://dergipark.org.tr/assets/app/images/buddy_sample.png",
    postImg:
      "https://images.unsplash.com/photo-1690043543279-65a256ca0792?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    caption: "Vacay mode",
  },
  {
    id: "2",
    username: "dummy user",
    avatar: "http://dergipark.org.tr/assets/app/images/buddy_sample.png",
    postImg:
      "https://images.unsplash.com/photo-1690043543279-65a256ca0792?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    caption: "Vacay mode",
  },
  {
    id: "3",
    username: "dummy user",
    avatar: "http://dergipark.org.tr/assets/app/images/buddy_sample.png",
    postImg:
      "https://images.unsplash.com/photo-1690043543279-65a256ca0792?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    caption: "Vacay mode",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        console.log(snapshot.docs);
        setPosts(snapshot.docs);
      }
    );

    // Cleanup to remove snapshot listener
    return unsubscribe;
  }, [db]);

  return (
    <div>
      {posts.map((post, index) => {
        const { id, username, profileImage, image, caption } = post.data();
        return (
          <Post
            key={index}
            id={id}
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
