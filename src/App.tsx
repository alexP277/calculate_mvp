import React from 'react';
import './App.css';
import Routing from "./pages";
import AppHeader from "./components/AppHeader";

function App() {

    return (
        <div>
               <AppHeader/>
                <Routing/>
        </div>
    );
}

export default App;
