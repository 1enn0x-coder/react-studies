import { useParams, Link } from "react-router";
import { useEffect, useState } from "react";

export default function PostDetails() {
  const { id } = useParams();

  const [postsData, setPostsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`,
        );
        const data = await response.json();
        setPostsData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  });

  return (
    <>
      <h1>{postsData.title}</h1>
      <p> {postsData.body}</p>
      <button>
        <Link to="/">Go back to home page</Link>
      </button>
    </>
  );
}
