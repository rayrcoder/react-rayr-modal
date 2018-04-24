/**
 * Created by Rayr Lee on 2018/4/23.
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        classnames: PropTypes.string
    };

    static defaultProps = {
        classnames: ''
    };

    render() {
        return (
            <div className={`rayr-modal-footer ${this.props.className}`}>{this.props.children}</div>
        );
    }
}
