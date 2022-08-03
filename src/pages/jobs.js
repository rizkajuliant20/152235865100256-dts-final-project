import { getStoriesByCategory } from "../utils";
import StoryList from "../components/StoryList";
import { useEffect, useState } from "react";

const Jobs = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stories = await getStoriesByCategory("job");
      setStories(stories || []);
    };

    fetchData();
  }, []);

  return <StoryList stories={stories} />;
};

export default Jobs;
