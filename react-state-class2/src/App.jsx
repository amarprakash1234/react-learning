import LudoBoard from './LudoBoard'
import './App.css'
import TodoList from './TodoList'
import Lottery from './Lottery'
import {  sum } from "./helper.js";
import Form from './Form.jsx';
import CommentsForm from "./CommentsForm.jsx"
import Comment from './Comment.jsx';
import Counter from './Counter.jsx'
import Joker from './Joker.jsx';
import FormSingleInp from './FormSingleInp.jsx';




function App() {

  let winCondition = (ticket) => { // props me ham ek function pass kr rhe hai jisko hm child me use kr skte hai.
    //   return ticket[0] === 0;
    //   return ticket.every((num) => num === ticket[0]);
    return sum(ticket) === 15;
  }

  return (
    <>
      {/* <Lottery n={3} winCondition={winCondition}/> */}
      {/* <Joker /> */}
      < Comment />
    </>
  )
}

export default App;
