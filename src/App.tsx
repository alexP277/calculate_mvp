import React from 'react';
import './App.css';
import Routing from "./pages";
import AppHeader from "./components/AppHeader";
import {StateProvider} from "./shared/store";

function App() {

    return (
        <StateProvider>
            <div>
                <AppHeader/>
                <Routing/>
            </div>
        </StateProvider>
    );
}

export default App;
