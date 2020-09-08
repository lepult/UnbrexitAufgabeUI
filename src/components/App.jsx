import { hot } from 'react-hot-loader/root';
import React from 'react';
import Header from './App/Header.jsx';
import Form from './App/Form.jsx';

function App() {
    return (
        <div>
            <Header/>
            <Form/>

        </div>
    );
}

export default App;
export const HotApp = hot(App);
