import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { database } from "../firebase/firebase";

function useAllPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const fetchData = async () => {
    try {
      const postsRef = await getDocs(collection(database, "blogPosts"));
      const posts = postsRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const categoriesRef = await getDocs(collection(database, "categories"));
      const categories = categoriesRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setAllPosts(posts);
      setFilteredPosts(posts);
      setAllCategory(categories);
    } catch (error) {
      console.error("Error fetching data", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    let filtered = allPosts;

    if (searchValue.trim()) {
      filtered = filtered.filter((post) =>
        post.postTitle.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [searchValue, selectedCategory, allPosts]);

  return {
    allPosts,
    filteredPosts,
    isFetching,
    allCategory,
    searchValue,
    setSearchValue,
    selectedCategory,
    setSelectedCategory,
    fetchData,
  };
}

export default useAllPosts;
