import React from 'react';
import MakeNewCalculation from "./components/MakeNewCalculation";
import FileViewer from "./components/FileViewer";

const Counter = () => {
    return (
        <div className="container">
            <div className="head_block">
                <FileViewer/>
            </div>
            <div className="bottom_block">
                <MakeNewCalculation/>
            </div>
        </div>
    );
};

export default Counter;
