
import './components/css/app.css';
import Cards from './components/Cards';
import cardsData from "./components/data"

function App() {
  const jsx = cardsData.map(card => {
    // let text = card.desc.replace(/\n/g, <br/>)
    
    return <Cards title={card.title} desc={card.desc} type={card.type} key={card.title}/>
  })
  return (
    <div className="App">
      <h1>be-think-<br/>act</h1>
      <h2>"hi"</h2>
      <div id="content--container">
       {jsx}
      </div>
      
    </div>
  );
}

export default App;
