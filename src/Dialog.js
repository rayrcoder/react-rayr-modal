/**
 * Created by Rayr Lee on 2018/4/23.
 */

import React from 'react';
import ReactDOM from 'react-dom';

export default (C, opt) => {

    let oModal = document.createElement('div');
    let _opt = {
        className: '',
        backDrop: false,
        size: 'md',
        data: null
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

            confirm(res = 'success') {
                this.close();
                resolve(res);
            }

            cancel(res = 'cancel') {
                this.close();
                reject(res);
            }

            render() {
                return (
                    <div className={`rayr-modal ${this.state.className}`}>
                        <div className="rayr-modal-bg" onClick={() => {
                            _opt.backDrop && this.cancel();
                        }}></div>
                        <div className={`rayr-modal-content rayr-modal-${_opt.size}`}>
                            <C confirm={this.confirm.bind(this)} cancel={this.cancel.bind(this)} data={_opt.data}/>
                        </div>
                    </div>
                )
            }
        }

        ReactDOM.render(<Modal/>, oModal);
    });
}
