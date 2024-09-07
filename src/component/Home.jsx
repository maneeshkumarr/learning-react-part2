import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import './Home.css';
import img from './img/logo.svg';

export default function Home() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`container ${theme}`}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            React Workshop
          </Typography>
          <Link to="/ArrayFunction"><Button color="inherit">Arrow Function</Button></Link>
          <Link to="/ArrayMethod"><Button color="inherit">Array Method</Button></Link>
          <Link to="/Destructure"><Button color="inherit">Destructure</Button></Link>
          <Link to="/SpreadOperator"><Button color="inherit">Spread Operator</Button></Link>
          <Link to="/Ternary"><Button color="inherit">Ternary Operator</Button></Link>
          <Link to="/Mui"><Button color="inherit">MUI</Button></Link>
          <Link to="/Muitable"><Button color="inherit">MUI Table</Button></Link>
          <Link to="/Effect"><Button color="inherit">Effect</Button></Link>
          <Link to="/Local"><Button color="inherit">Local</Button></Link>
          <Link to="/Quotes"><Button color="inherit">Quotes</Button></Link>
          <IconButton edge="end" color="inherit" onClick={toggleTheme}>
            {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <div className="content">
        <div className="App">
          <header className="App-header">
            <img src={img} className="App-logo" alt="logo" />
            <h3>React Workshop</h3>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    </div>
  );
}
