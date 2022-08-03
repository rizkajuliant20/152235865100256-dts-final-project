import { getStoriesByCategory } from "../utils";
import StoryList from "../components/StoryList";
import { useEffect, useState } from "react";

const Newest = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stories = await getStoriesByCategory("new");
      setStories(stories || []);
    };

    fetchData();
  }, []);

  return <StoryList stories={stories} />;
};

export default Newest;
