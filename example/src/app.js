import 'font-awesome/css/font-awesome.min.css';
import 'react-rayr-btn/src/RayrBtn.scss';
import 'react-rayr-modal/src/RayrModal.scss';
import 'app.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrModal} from 'react-rayr-modal';

function Demo(props) {
    return (
        <div>
            <RayrModal.Header {...props}>测试</RayrModal.Header>
            <RayrModal.Body>
                <div>测试</div>
                <div>测试</div>
                <div>测试</div>
            </RayrModal.Body>
            <RayrModal.Footer></RayrModal.Footer>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <button onClick={() => {
                RayrModal.Confirm().then((res) => {
                    console.log(res);
                }, (res) => {
                    console.log(res);
                })
            }}>确认框
            </button>
            <button onClick={() => {
                RayrModal.Dialog(Demo).then((res) => {
                    console.log(res);
                }, (res) => {
                    console.log(res);
                });
            }}>模态框
            </button>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
