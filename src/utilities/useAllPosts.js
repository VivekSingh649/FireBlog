import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebase/firebase";

function useAllPosts(url) {
  const [allPosts, setAllPosts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const docsRef = await getDocs(collection(database, String(url)));
        const docs = docsRef.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        if (url === "categories") {
          setAllCategory(docs);
        } else {
          setAllPosts(docs);
        }
      } catch (error) {
        console.log("Error fetching all posts", error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchAllPosts();
  }, []);

  return { allPosts, isFetching, allCategory };
}

export default useAllPosts;
