import 'react-rayr-modal/src/RayrModal.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrModal} from 'react-rayr-modal';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <RayrModal/>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
