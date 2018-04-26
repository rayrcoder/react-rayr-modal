import React from 'react';
import classnames from 'classnames';

import Confirm from './Confirm';
import Dialog from './Dialog';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class RayrModal extends React.Component {

    static propTypes = {};
    static defaultProps = {
        className: ''
    };
    static Header = Header;
    static Body = Body;
    static Footer = Footer;
    static Dialog = Dialog;
    static Confirm = Confirm;

    render() {
        return (
            <div id="rayr-modal-container" className={classnames(this.props.className)}></div>
        );
    }
}

export default RayrModal;
