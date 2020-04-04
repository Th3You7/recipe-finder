import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Card.css";

function Card({ img, name, onClick }) {
  const location = useLocation();
  return (
    <Link
      to={{ pathname: "/card-info", state: { bg: location } }}
      onClick={onClick}
    >
      <div className="card">
        <div className="cover">
          <button>OPEN</button>
        </div>
        <img src={img} alt="pizza" />
        <div className="container">
          <h4>{name}</h4>
        </div>
      </div>
    </Link>
  );
}

export default Card;
