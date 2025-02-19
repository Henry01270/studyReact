import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from "./pages/Input";

function App() {
    return (
        <div classNmae="App">
            <nav>
                <Link to="/">Home</Link> |
                <Link to="/about"> about</Link> |
                <Link to="/counter"> counter</Link> |
                <Link to="input">input</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/counter" element={<Counter />}/>
                <Route path="/input" element={<Input />}/>
            </Routes>
        </div>
    );
}

export default App;