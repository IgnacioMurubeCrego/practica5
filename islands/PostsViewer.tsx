import { FunctionalComponent } from "preact/src/index.d.ts";
import { postCardInfo } from "../types.ts";
import { useSignal } from "@preact/signals";
import { useState } from "preact/hooks";
import PostCard from "../components/postCard.tsx";
type Props = {
  posts: postCardInfo[];
};

const PostsViewer: FunctionalComponent<Props> = (props) => {
  const state = false;
  //const state = useSignal(false);
  const posts = props.posts;
  return (
    <>
      <div class="container">
        <div class="header">
          <h1>
            <strong>Posts:</strong>
          </h1>
        </div>
        <div>
          {!state && posts.map((p) => (
            <div>
              <PostCard post={p} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PostsViewer;
