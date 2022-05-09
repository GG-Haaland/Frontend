// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Nav />
      <main >
      <Routes>
        <Route path="/" exact element={<Home/>} />
        {/* <Route path="/createAccount" exact element={<NewAccount/>} />
        <Route path="/login" exact element={<Login setUser={setUser} toggleAuthenticated={toggleAuthenticated} />} />
        <Route path="/createPost" exact element={<CreatePost user={user} authenticated={authenticated}/>} />
        <Route path="/feed" exact element={<Feed user={user} authenticated={authenticated} />} />
        <Route path="/edit" exact element={<EditUser user={user} setUser={setUser}  authenticated={authenticated} />} />
        <Route path="/profile" exact element={<Profile user={user} authenticated={authenticated} />} /> */}
      </Routes>
      </main>
      {/* <footer className='footer'>About Us</footer> */}

   </Router>
  );
}

export default App;
