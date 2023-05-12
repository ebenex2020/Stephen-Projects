import VideoItem from "./VideoItem";

const VideoList = ({ video, onVideoItemCall }) => {
  const shownVideo = video.map(vid => (
    <VideoItem
      onVideoItemCall={onVideoItemCall}
      videos={vid}
      key={vid.id.videoId}
    />
  ));

  return <div className="ui relaxed  divided list">{shownVideo}</div>;
};

export default VideoList;
