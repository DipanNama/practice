import './App.css';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Todos } from './components/Todos';
import React, {useState} from 'react';
// import data from './data.json'

function App() {
  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get the job done"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to get the job done"
    },
    {
      sno: 3,
      title: "Go to the ghat",
      desc: "You need to go to the ghat to get the job done"
    }
  ]);
  return (
    <div className="App">
      <Header title="Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
