import MediaPlayer from "@/components/main/MediaPlayer";
const LatestContents = () => {
  const latestContents = [
    "https://soundcloud.com/mizumizurice/ctw",
    "https://soundcloud.com/mizumizurice/ctl",
    "https://www.youtube.com/watch?v=vD4xgA8K0YM",
    "https://www.youtube.com/watch?v=r6c0PjvCEg8",
    "https://soundcloud.com/mizumizurice/dreamadventure",
    "https://soundcloud.com/mizumizurice/sugarcrash",
  ];

  return (
    <div className="grid md:grid-cols-2 gap-3">
      {latestContents.map((url, index) => {
        return <MediaPlayer url={url} index={index} />;
      })}
    </div>
  );
};

export default LatestContents;
