import 'react-rayr-modal/src/RayrModal.scss';
import 'app.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrModal} from 'react-rayr-modal';

function Demo(props) {
    return (
        <div>
            <div className="rayr-modal-header">
                <span className="title">测试</span>
                <span className="close-btn" onClick={() => {
                    props.cancel()
                }}></span>
            </div>
            <div className="rayr-modal-body">对话框</div>
            <div className="rayr-modal-footer"></div>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <button onClick={() => {
                RayrModal.Confirm({size: 'sm'}).then(() => {

                }, () => {

                })
            }}>测试
            </button>
            <button onClick={() => {
                RayrModal.Dialog(Demo).then(() => {

                }, () => {

                })
            }}>测试2
            </button>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
