import "./VideoItem.css";

const VideoItem = ({ videos, onVideoItemCall }) => {
  const { thumbnails, title } = videos.snippet;

  const onVideoCall = () => onVideoItemCall(videos);

  return (
    <div className="item video-item" onClick={onVideoCall}>
      <img className="ui image" alt={title} src={thumbnails.medium.url} />
      <div className="content">
        <h4 className="header">{title}</h4>
      </div>
    </div>
  );
};

export default VideoItem;
