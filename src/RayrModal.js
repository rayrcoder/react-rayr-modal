import React from 'react';
import PropTypes from 'prop-types';

import Confirm from './Confirm';
import Dialog from './Dialog';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class RayrModal extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div className="rayr-modal">rayr-modal</div>
        );
    }
}

RayrModal = {Header, Confirm, Dialog, Body, Footer}

export default RayrModal;
