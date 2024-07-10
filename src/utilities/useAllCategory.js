import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase/firebase";

function useAllCategory() {
  const [allCategory, setAllCategory] = useState([]);
  const [isFecthing, setIsFecthing] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const querySnap = await getDocs(collection(database, "categories"));
        const docs = querySnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setAllCategory(docs);
      } catch (error) {
        setError(error);
      } finally {
        setIsFecthing(false);
      }
    };

    fetchCategories();
  }, []);

  return { allCategory, isFecthing, error };
}

export default useAllCategory;
