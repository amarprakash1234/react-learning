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




function App() {

  // let winCondition = (ticket) => {
  //   return ticket[0] === 0;
  //   return ticket.every((num) => num === ticket[0]);
  //   return sum(ticket) === 15;
  // }

  return (
    <>
      <LudoBoard />
    </>
  )
}

export default App
