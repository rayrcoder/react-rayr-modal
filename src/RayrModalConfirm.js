/**
 * Created by Rayr Lee on 2018/4/23.
 */

import './RayrModal.scss';
import React from 'react';
import ReactDOM from 'react-dom';

export default (opt) => {

    let oModal = document.createElement('div');
    let _opt = {
        title: '系统提示',
        msg: '您确定要执行此操作吗？',
        className: '',
        backDrop: false
    };

    Object.assign(_opt, opt);

    document.body.appendChild(oModal);

    return new Promise((resolve, reject) => {

        class Modal extends React.Component {
            constructor() {
                super();
            }

            componentDidMount() {
            }

            close() {
                ReactDOM.unmountComponentAtNode(oModal);
                document.body.removeChild(oModal);
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
                    <div className="rayr-modal">
                        <div className="rayr-modal-bg" onClick={() => {
                            _opt.backDrop && this.cancel();
                        }}></div>
                        <div className="rayr-modal-content rayr-modal-sm">
                            <div className="rayr-modal-header">
                                <span className="title">{_opt.title}</span>
                                <span className="close-btn" onClick={() => {
                                    this.cancel()
                                }}></span>
                            </div>
                            <div className="rayr-modal-body">
                                正文文字文字文字占位
                            </div>
                            <div className="rayr-modal-footer">

                            </div>
                        </div>
                    </div>
                )
            }
        }

        ReactDOM.render(<Modal/>, oModal);
    });
}
