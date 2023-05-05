import "./seasonDisplay.css";

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
    iconStyle: "sun",
  },
  winter: {
    text: "Bur, It's too cold!!",
    iconStyle: "snowflake",
  },
};

const getSeason = function (lat, month) {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonsDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());

  const { text, iconStyle } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left ${iconStyle} massive icon`}></i>
      <h1>{text}</h1>
      <i className={` icon-right ${iconStyle} massive icon`}></i>
    </div>
  );
};

export default SeasonsDisplay;
