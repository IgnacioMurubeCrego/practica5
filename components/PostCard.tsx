import { FunctionalComponent } from "preact/src/index.js";
import { postCardInfo } from "../types.ts";

type Props = {
  post: postCardInfo;
};

const PostCard: FunctionalComponent<Props> = (props) => {
  const post = props.post;
  return (
    <div>
      <h1>{post.title}</h1>
      <h2>{post.content}</h2>
      <img src={post.cover} alt={`${post.title} Cover image`} />
    </div>
  );
};

export default PostCard;
