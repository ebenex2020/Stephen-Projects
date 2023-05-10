import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const listImages = props.images.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className="image-lists">{listImages}</div>;
};

export default ImageList;
