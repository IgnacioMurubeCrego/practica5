import { Handlers, PageProps } from "$fresh/server.ts";
import Axios from "https://esm.sh/axios@1.8.1";
import { postCardInfo } from "../types.ts";
import PostsViewer from "../islands/PostsViewer.tsx";

export const handler: Handlers = {
  async GET(_req, ctx) {
    const response = await Axios.get<{ data: { posts: postCardInfo[] } }>(
      `https://back-p5-y0e1.onrender.com/api/posts`,
    );

    const posts = response.data.data.posts;

    return ctx.render(posts);
  },
};

const Home = (props: PageProps) => {
  const posts: postCardInfo[] = props.data;
  return (
    <>
      <PostsViewer posts={posts} />
    </>
  );
};

export default Home;
