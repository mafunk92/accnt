import React, { Component } from 'react';
import { TitleBar } from 'react-desktop/windows';

export default class Title extends Component {
    static defaultProps = {
        color: '#29cc7f',
        theme: 'dark',
    };

    constructor(props) {
        super(props);
        this.state = { isMaximized: true };
    }

    toggleMaximize = () => this.setState({ isMaximized: !this.state.isMaximized });

    render() {
        return (
            <TitleBar
                title="Accnt"
                isMaximized={this.state.isMaximized}
                theme={this.props.theme}
                background={this.props.color}
            />
        );
    }
}
