
import './App.css';
import {useState} from "react";
function App() {
  const [name, setName] = useState( '');
  const [datetime, setDatetime] = useState('');
  const [describtion, setDescribtion] = useState('');
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL + '/transaction';
    fetch(url, {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify({
        name,
        describtion,
        datetime,
      })
    }).then(response =>{
      response.json().then(json =>{
        setName('');
        setDatetime('');
        setDescribtion('');
        console.log('result', json);
      });
    });
  }
  return (
    <main>
      <h1>$400 <span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className = 'basic'>
          <input type="text" 
                  value={name}
                  onChange={ev => setName(ev.target.value)}
                  placeholder={'+200 new samsung tv'} />
          <input value ={datetime}
                  onChange={ev => setDatetime(ev.target.value)} type="datetime-local" />
        </div>
        <div className="descrition">
          <input type="text" 
                  value={describtion} 
                  onChange={ev => setDescribtion(ev.target.value)}
                  placeholder={'describtion'} />
        </div>
        <button type = "submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="describtion">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500</div>
            <div className="datetime">2023-13-05 16:45</div>
          </div>
        </div>
        
        <div className="transaction">
          <div className="left">
            <div className="name">Gig job new website</div>
            <div className="describtion">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price green">+$400</div>
            <div className="datetime">2023-13-05 16:45</div>
          </div>
        </div>
        
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone</div>
            <div className="describtion">It was time for new tv</div>
          </div>
          <div className="right">
            <div className="price red">-$900</div>
            <div className="datetime">2023-13-05 16:45</div>
          </div>
        </div>
      </div>
      
    </main>
  );
}

export default App;
