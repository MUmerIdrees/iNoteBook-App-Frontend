import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import AlertProvider from './context/alert/AlertProvider';
import AuthState from './context/auth/AuthState';

function App() {
  return (
    <AlertProvider>
      <NoteState>
        <Router> 
          <Navbar />
          <Alert />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<AuthState><Login /></AuthState>} />
              <Route exact path="/signup" element={<AuthState><Signup /></AuthState>} />
            </Routes>
          </div> 
        </Router>
      </NoteState>
    </AlertProvider>
  );
}

export default App;
