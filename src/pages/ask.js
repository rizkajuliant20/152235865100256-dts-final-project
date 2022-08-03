import { getStoriesByCategory } from "../utils";
import StoryList from "../components/StoryList";
import { useEffect, useState } from "react";

const Ask = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stories = await getStoriesByCategory("ask");
      setStories(stories || []);
    };

    fetchData();
  }, []);

  return <StoryList stories={stories} />;
};

export default Ask;
