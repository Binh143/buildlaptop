import React, { Component } from 'react';
import TitleFAQ from '../../components/FAQ/TitleFAQ';
import ContentFAQ from '../../components/FAQ/ContentFAQ';
class FAQ extends Component {
    render() {
        return (
            <div>
                <TitleFAQ/>
                <ContentFAQ/>
                
            </div>
        );
    }
}

export default FAQ;