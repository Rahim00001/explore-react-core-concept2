import './App.css'
import Counter from './counter';
import counter from './counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('Button Clicked');
  }
  const handleClick2 = () => {
    alert('Button2 Clicked')
  }
  const addFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h2>React core concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() => { alert('Button3 clicked') }}>Click Me</button>
      <button onClick={() => { addFive(5) }}>Click Me</button>
    </>
  )
}

export default App
