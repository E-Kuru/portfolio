import React from 'react';
import Header from './header';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
          
        return (
            // HEADER / HOME PAGEs
            <div id="home-page">
                
                    <Header/>

                <div className="name-part">
                    <h2>Salut, moi c'est Evan</h2>
                    <p>Développeur Web Fullstack</p>
                </div>
            </div>

        )
    }
}

export default Home;