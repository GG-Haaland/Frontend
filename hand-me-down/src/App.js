// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import Feed from './pages/Feed';
import Profile from './pages/Profile';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Nav />
      <main >
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/feed" exact element={<Feed/>} />
        <Route path="/profile" exact element={<Profile/>} />
      </Routes>
      </main>
      <footer className='footer'>About Us</footer>

   </Router>
  );
}

export default App;
