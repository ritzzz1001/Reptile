import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import { Login } from './components/Login';
import { SearchTrainer } from './components/SearchTrainer';
import { AddTrainer } from './components/AddTrainer';
import { TrainerList } from './components/TrainerList';
import { UpdateTrainer } from './components/UpdateTrainer';

function App() {
  return (
    <>
      <div className="p-2 fw-bold d-flex navbar-gradient">
        <ul className='nav'>
          <li className='nav-item'>
            <Link className='nav-link text-white' to="/search">
              Search
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to="/add">
              Add Trainer
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link text-white' to="/list">
              Trainer List
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/search" element={<SearchTrainer />}></Route>
          <Route path="/add" element={<AddTrainer />}></Route>
          <Route path="/list" element={<TrainerList />}></Route>
          <Route path="/update/:id" element={<UpdateTrainer />}></Route>
        </Routes>
      </div>
    
    </>
  );
}

export default App;
