import './App.css';
import Header from './components/header/Header';
import Task from './components/task/Task';
import AddTask from './components/addTask/AddTask';

function App() {
  return (
    <div className="container">
      <Header/>
      <AddTask/>
      <Task/>
    </div>
  );
}

export default App;
