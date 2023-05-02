import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetails from "./Components/CommentDetails/CommentDetails";
import { faker } from "@faker-js/faker";
import Card from "./Components/CommentDetails/Card";

const App = () => {
  return (
    <div className="ui container comments ">
      <Card>
        <CommentDetails
          author="Samuel"
          time="3:00pm"
          myPic={faker.image.avatar()}
          text="Nice blog Post!"
        />
      </Card>
      <Card>
        <CommentDetails
          author="Seun"
          time="12:00pm"
          myPic={faker.image.avatar()}
          text="Better blog Post!"
        />
      </Card>
      <Card>
        <CommentDetails
          author="Tobi"
          time="9:00pm"
          myPic={faker.image.avatar()}
          text="Best blog Post!"
        />
      </Card>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
