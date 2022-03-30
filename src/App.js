import "./components/css/app.css";
import Cards from "./components/Cards";
import cardsData from "./components/data";
import { useEffect, useState } from "react";

function App() {
  const cardJSX = cardsData.map((card) => {
    // maps over cardData and creates <Card/> elements
    return (
      <Cards
        title={card.title}
        desc={card.desc}
        type={card.type}
        handleClick={handleNextCard}
        key={card.title}
      />
    );
  });

  // filters cards based on "type" (think, be , act)
  const thinkCardsJSX = cardJSX.filter((card) => card.props.type === "think");
  const beCardsJSX = cardJSX.filter((card) => card.props.type === "be");
  const actCardsJSX = cardJSX.filter((card) => card.props.type === "act");

  const [count, setCount] = useState({
    //inits count state obj for cards
    think: 0,
    be: 0,
    act: 0,
  });
  function handleNextCard(props) {
    const { title, type } = props;
    console.log(`"${title}" is a ${type} card`);
    let curCardJSX; // inits curCardJSX and sets it to
    if (type === "think") {
      curCardJSX = thinkCardsJSX;
    } else if (type === "be") {
      curCardJSX = beCardsJSX;
    } else if (type === "act") {
      curCardJSX = actCardsJSX;
    }

    if (count[type] >= curCardJSX.length - 1) {
      // if count[type] is greateer than length available cards of [type]CardsJSX, resest count[type] to zero
      setCount((prevCount) => {
        return {
          ...prevCount,
          [type]: 0,
        };
      });
    } else {
      setCount((prevCount) => {
        // counter + 1 of selected Type
        return {
          ...prevCount,
          [type]: prevCount[type] + 1,
        };
      });
    }
  }
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div className="App">
      <h1>Think-Be-Act</h1>
      <div id="content--container">
        {thinkCardsJSX[count.think]}
        {beCardsJSX[count.be]}
        {actCardsJSX[count.act]}
      </div>
    </div>
  );
}

export default App;
