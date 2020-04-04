import React from "react";
import Card from "./Card";
import "./Main.css";
import Context from "../../Context";
import { useContext } from "react";

function Main() {
  let { handleChange, val, handleSubmit, res, handleClick } = useContext(
    Context
  );

  const resHeader = <h3>Results </h3>;

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h2>Recipe Finder</h2>
        <input
          type="text"
          onChange={handleChange}
          value={val}
          placeholder="Look for a meal"
        ></input>
        <br />
        <input type="submit" value="Search"></input>
      </form>
      {Object.keys(res).length !== 0 ? resHeader : null}
      <div className="results">
        {Object.keys(res).length === 0
          ? null
          : res.meals === null
          ? "Nothing Match"
          : res.meals.map(meal => (
              <Card
                key={meal.idMeal}
                name={meal.strMeal}
                img={meal.strMealThumb}
                onClick={() =>
                  handleClick({
                    name: meal.strMeal,
                    img: meal.strMealThumb,
                    instructions: meal.strInstructions,
                    ingredients: (() => {
                      let i = 1;
                      let arr = [];
                      while (meal[`strIngredient${i}`] !== "") {
                        arr.push(meal[`strIngredient${i}`]);
                        i++;
                      }
                      return arr;
                    })()
                  })
                }
              />
            ))}
      </div>
    </main>
  );
}

export default Main;
