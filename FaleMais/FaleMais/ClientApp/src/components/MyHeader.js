import React, { Component } from 'react';
import NavMenu from './NavMenu';
import { HeroMain } from './HeroMain';
import { HeroDefault } from './HeroDefault';

export class MyHeader extends Component {
    static displayName = MyHeader.name;

    constructor(props) {
        super(props);      
    }       

    Hero() {
        if (this.state.route) {
            return 
        }
        return <HeroMain />;
    }

    render() {

        const renderHero = () => {
            if (window.location.pathname === "/calculator") {
                return <HeroDefault />;
            } else {
                return <HeroMain />;
            }
        }

        return (
            <header>
                <NavMenu />
                {renderHero()}
            </header>
        );
    }
}