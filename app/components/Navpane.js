import React, { Component } from 'react';
import { NavPane, NavPaneItem, Text } from 'react-desktop/windows';

export default class Nav extends Component {

    static defaultProps = {
        color: '#29cc7f',
        theme: 'light',
    };

    constructor() {
        super();
        this.state = {
            selected: 'Dashboard'
        };
    }

    render() {
        return (
            <NavPane paneExpandedLength={175} color={this.props.color} theme={this.props.theme} defaultIsPaneExpanded={false}>
                {this.renderItem('Dashboard', 'Hello World')}
                {this.renderItem('Entries', 'Content 30')}
                {this.renderItem('Inventory', 'Content 30')}
                {this.renderItem('Accounts', 'Content 20')}
                {this.renderItem('Statements', 'Content 30')}
                {this.renderItem('Ratios', 'Content 30')}
                {this.renderItem('History', 'Content 30')}
                {this.renderItem('Settings', 'Content 30')}
            </NavPane>
        );
    }

    renderItem(title, content) {
        return (
            <NavPaneItem
                title={title}
                icon={this.renderIcon(title)}
                theme="dark"
                background="#ecf0f5"
                selected={this.state.selected === title}
                onSelect={() => this.setState({ selected: title })}
                padding="10px 20px"
                push
            >
                <Text height="2000px">{content}</Text>
            </NavPaneItem>
        );
    }

    renderIcon(name) {
        const fill = this.props.theme === 'dark' ? '#ffffff' : '#000000';
        switch(name) {
            case 'Dashboard':
                return (
                    <span className="fa fa-tachometer fa-fw"></span>
                );
            case 'Ratios':
                return (
                    <span className="fa fa-bar-chart fa-fw"></span>
                );
            case 'Accounts':
                return (
                    <span className="fa fa-university fa-fw"></span>
                );
            case 'History':
                return (
                    <span className="fa fa-history fa-fw"></span>
                );
            case 'Entries':
                return (
                    <span className="fa fa-balance-scale fa-fw"></span>
                );
            case 'Statements':
                return (
                    <span className="fa fa-file fa-fw"></span>
                );
            case 'Settings':
                return (
                    <span className="fa fa-cog fa-fw"></span>
                );
            case 'Inventory':
                return (
                    <span className="fa fa-cubes fa-fw"></span>
                );
        }
    }
}