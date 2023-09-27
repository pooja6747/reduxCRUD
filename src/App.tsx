
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registration from './components/Registration';
import EditUser from './components/EditUser';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Navbar from './widget/Navbar';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <Registration/> } />
        {/* <Route path="contact" element={ <List/> } /> */}
        <Route path="/edit-user/:id" element={ <EditUser/> } />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
