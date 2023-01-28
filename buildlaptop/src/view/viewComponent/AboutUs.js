import React, { Component } from 'react';
import AboutBars from '../../components/about/AboutBars';
import AboutContent from '../../components/about/AboutContent';
class AboutUs extends Component {
    render() {
        return (
            <div>
                <AboutBars/>
                <AboutContent/>
            </div>
        );
    }
}

export default AboutUs;