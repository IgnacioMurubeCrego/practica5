import { useSignal } from "@preact/signals";
import { FunctionalComponent } from "preact/src/index.js";
import Axios from "npm:axios";
import { postCardInfo } from "../types.ts";
import { useState } from "preact/hooks";

const SearchForm: FunctionalComponent = () => {
  const [posts, setPosts] = useState<postCardInfo[]>([]);
  const searchText = useSignal<string>("");

  const onSearch = async (searchText: string): Promise<void> => {
    const url = `https://back-p5-y0e1.onrender.com/api/posts/`;
    const response = await Axios.get(url, {
      params: {
        search: searchText,
      },
    });
    const posts = response.data.data.posts;
    setPosts(posts);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="post"
          placeholder="post name"
          value={searchText}
          onInput={(e) => {
            searchText.value = e.currentTarget.value;
          }}
        />
        <br />
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            onSearch(searchText.value);
          }}
        >
          Buscar
        </button>
      </form>
      {posts.length > 0 && posts.map((p) => <div key={p}>{p}</div>)}
    </div>
  );
};

export default SearchForm;
