import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import RayrModalConfirm from './RayrModalConfirm';

class RayrModal extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div className="rayr-modal">rayr-modal</div>
        );
    }
}

RayrModal.Confirm = RayrModalConfirm;

export default RayrModal;
