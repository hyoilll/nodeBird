import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  return (
    <div>
      <Head>
        <title>NodeBird | Home</title>
      </Head>
      <AppLayout>
        {isLoggedIn && <PostForm></PostForm>}
        {mainPosts.map((
          post // map의 key를 설정할 때 map의 매개변수의 idx를 사용할 때는 map의 반복문의 순서가 바뀌지 않을 때만!
        ) => (
          <PostCard key={post.id} post={post}></PostCard>
        ))}
      </AppLayout>
    </div>
  );
};

export default Home;
