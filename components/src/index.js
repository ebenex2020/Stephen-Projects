import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetails from "./Components/CommentDetails/CommentDetails";
import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments ">
      <CommentDetails
        author="Samuel"
        time="3:00pm"
        myPic={faker.image.avatar()}
        text="Nice blog Post!"
      />
      <CommentDetails
        author="Seun"
        time="12:00pm"
        myPic={faker.image.avatar()}
        text="Better blog Post!"
      />
      <CommentDetails
        author="Tobi"
        time="9:00pm"
        myPic={faker.image.avatar()}
        text="Best blog Post!"
      />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
