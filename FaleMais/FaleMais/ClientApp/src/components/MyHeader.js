import React, { Component } from 'react';
import NavMenu from './NavMenu';
import { HeroDefault } from './HeroDefault';

export class MyHeader extends Component {
    static displayName = MyHeader.name;

    render() {
        return (
            <header>
                <NavMenu />
                <HeroDefault />
            </header>
        );
    }
}