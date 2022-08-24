import React, { useState } from "react";
import SwipeButtons from "../SwipeButtons.js";
import "./styles.css";

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Elon MUSK",
      url: "https://www.neweurope.eu/wp-content/uploads/2020/06/h_53631476.jpg",
    },
    {
      name: "Jeff BEZOZ",
      url: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQnuopNKXKFZgSORJ1jrHiKfb_52nfH69wlFIyDfL6Rn9WA-SQKotBsM-iHdrFdPB4X",
    },
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person, index) => (
          <div className="swipe" key={index}>
            <div
              style={{ backgroundImage: "url(" + person.url + ")" }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
