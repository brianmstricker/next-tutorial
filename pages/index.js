import ArticleList from "@/components/ArticleList";
import { server } from "@/config";

export default function Home({ articles }) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};

// export const getStaticProps = async () => {
//   const res = await fetch(
//     "https://jsonplaceholder.typicode.com/posts?_limit=8"
//   );
//   const articles = await res.json();
//   return {
//     props: {
//       articles,
//     },
//   };
// };
