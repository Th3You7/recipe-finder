import React, { useContext } from "react";
import Context from "../../Context";
import { useHistory } from "react-router-dom";
import "./CardInfo.css";

function CardInfo() {
  const history = useHistory();
  const { data } = useContext(Context);
  const { name, img, instructions, ingredients } = data;

  const goBack = e => {
    e.stopPropagation();
    history.goBack();
  };

  return (
    <div className="overlay" onClick={goBack}>
      <div className="card-info">
        <div className="header">
          <h2>{name}</h2>
        </div>
        <div className="main1">
          <div className="img-container">
            <img src={img} alt="recipe"></img>
          </div>

          <div className="ingredients">
            <h3>Ingredients</h3>
            <ul>
              {ingredients !== undefined
                ? ingredients.map((i, index) => <li key={index}>{i}</li>)
                : null}
            </ul>
          </div>
          <div className="instructions">
            <h3>Instructions</h3>
            <p>{instructions}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
