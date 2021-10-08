import React from 'react';
import { Link } from 'react-router-dom';
import linkedin from "../assets/linkedin.png";
import git from "../assets/github.png";

class Header extends React.Component{
    constructor() {
        super();
    }

    render() {
        return(

            <div className="header">

            <div>
                <a href="https://www.linkedin.com/in/evan-dalleau/" target="_">
                    <img src={linkedin} width="45" alt="linkedin" /></a>
                <a href="https://github.com/E-Kuru" target="_">
                    <img src={git} width="45" alt="gitHub" /></a>
            </div>
            <div>
                <Link to='/Skills'><a href="#">Mes compétences</a></Link>
                <Link to='/'><a href="#">Mon CV</a></Link>
                <Link to='/'><a href="#">Me contacter</a></Link>

            </div>
        </div>

        )
    }
}
export default Header;