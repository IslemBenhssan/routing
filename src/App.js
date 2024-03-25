import { useState } from 'react';
import './App.css';
import { moviesData } from './data';
import MovieList from './components/MovieList';
import AddNewMovie from './components/AddNewMovie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Info from './components/Info';
function App() {
  const [data, setData] = useState(moviesData);
  const handleDelete = (id) => setData(data.filter(el => el.id !== id));
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<><AddNewMovie /> <MovieList list={data} handleDelete={handleDelete} />
          </>

          } />
          <Route path="/info/:id"element={<Info movie={ moviesData}/>}/>


        </Routes>
      </Router>
    </div>
  );

}
export default App;
