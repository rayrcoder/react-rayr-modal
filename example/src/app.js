import 'react-rayr-modal/src/RayrModal.scss';
import 'app.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrModal} from 'react-rayr-modal';

function Demo(props) {
    return (
        <div>
            <RayrModal.Header {...props} msg={'取消'}>测试</RayrModal.Header>
            <RayrModal.Body>
                <span onClick={() => {
                    props.confirm('确认')
                }}>对话框</span>
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
                RayrModal.Confirm({size: 'sm'}).then(() => {

                }, () => {

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
