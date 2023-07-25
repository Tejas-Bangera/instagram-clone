import Post from "./Post";

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
  return (
    <div>
      {dummyData.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
export default Posts;
