const handleUrl = (url) => {
  const urlObj = new URL(url);
  return urlObj.hostname;
};

const handleDate = (time) => {
  const seconds = Math.floor(new Date().getTime() / 1000 - time);
  if (seconds < 60) return `${seconds}s`;
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h`;
  const days = Math.floor(hours / 24);
  return `${days}d`;
};

const getStoryById = async (id) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  const data = await response.json();
  const time = handleDate(data.time);
  const url = data.url != null ? data.url : `https://news.ycombinator.com/item?id=${id}`;
  const hostname = handleUrl(url);
  return {
    id: data.id,
    by: data.by,
    title: data.title,
    url,
    hostname,
    time,
    score: data.score,
  };
};

const getStoriesIdByCategory = async (category) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/${category}stories.json?print=pretty`
  );
  const data = await response.json();
  return data.slice(0, 50);
};

export const getStoriesByCategory = async (category) => {
  const ids = await getStoriesIdByCategory(category);
  const promises = ids.map((id) => getStoryById(id));
  const stories = await Promise.all(promises);
  return stories;
};

// 6 hours
export const REVALIDATE = 60 * 60 * 6;
