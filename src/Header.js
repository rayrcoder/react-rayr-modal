/**
 * Created by Rayr Lee on 2018/4/23.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        classnames: PropTypes.string,
        msg: PropTypes.string
    };

    static defaultProps = {
        classnames: '',
        msg: ''
    };

    render() {
        return (
            <div className="rayr-modal-header">
                <span className="title">{this.props.children}</span>
                <span className="close-btn" onClick={() => {
                    this.props.cancel(this.props.msg)
                }}></span>
            </div>
        );
    }
}
