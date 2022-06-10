import React from "react";
import Card from "../card/Card";
import "./card-list.css";

const Cardlist = (props) => {
  const { monsters } = props;
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default Cardlist;
