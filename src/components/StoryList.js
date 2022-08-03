import Story from "./Story";

const StoryList = ({ stories }) => {
  return (
    <div className="px-2">
      {stories.map((story) => {
        return (
          <div key={story.id}>
            <Story {...story} />
          </div>
        );
      })}
    </div>
  );
};

export default StoryList;
