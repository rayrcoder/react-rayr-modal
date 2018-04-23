/**
 * Created by Rayr Lee on 2018/4/23.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {RayrBtn} from 'react-rayr-btn';

export default (opt) => {

    let oModal = document.createElement('div');
    let _opt = {
        title: '系统提示',
        msg: '您确定要执行此操作吗？',
        className: '',
        backDrop: false,
        size: 'sm'
    };

    Object.assign(_opt, opt);

    document.body.appendChild(oModal);

    return new Promise((resolve, reject) => {

        class Modal extends React.Component {
            constructor() {
                super();
                this.state = {
                    className: ''
                }
            }

            componentDidMount() {
                window.requestAnimationFrame(() => {
                    this.setState({
                        className: 'rayr-modal-fade'
                    })
                });
            }

            close() {
                this.setState({
                    className: ''
                }, () => {
                    ReactDOM.unmountComponentAtNode(oModal);
                    document.body.removeChild(oModal);
                })
            }

            confirm() {
                this.close();
                resolve('success');
            }

            cancel() {
                this.close();
                reject('cancel');
            }

            render() {
                return (
                    <div className={`rayr-modal ${this.state.className}`}>
                        <div className="rayr-modal-bg" onClick={() => {
                            _opt.backDrop && this.cancel();
                        }}></div>
                        <div className={`rayr-modal-content rayr-modal-${_opt.size}`}>
                            <div className="rayr-modal-header">
                                <span className="title">{_opt.title}</span>
                                <span className="close-btn" onClick={() => {
                                    this.cancel()
                                }}></span>
                            </div>
                            <div className="rayr-modal-body">{_opt.msg}</div>
                            <div className="rayr-modal-footer">
                                <RayrBtn type={'primary'} icon="check" onClick={() => {
                                    this.confirm();
                                }}>确定</RayrBtn>
                                <RayrBtn type={'primary'} inverse icon="close" onClick={() => {
                                    this.cancel();
                                }}>取消</RayrBtn>
                            </div>
                        </div>
                    </div>
                )
            }
        }

        ReactDOM.render(<Modal/>, oModal);
    });
}
