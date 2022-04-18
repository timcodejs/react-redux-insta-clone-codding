import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import NotFount from './pages/notFount';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFount />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  button {
    background: none;
    border: 0;
    cursor: pointer;
  }
  li {
    list-style: none;
  }
`;