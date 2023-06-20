import React from 'react';
import { CiBoxList } from 'react-icons/ci';
import "./sass/css-navbar.scss";
import Navlink from './Navlink';

const Navbar = () => {
    return (
        
        <nav className='backgound'>
            <div className='top-nav'>
                <a>FilmPone</a>
            </div>
            <div className='center-nav'>
                <ul>
                    <li>
                        <a href=''>Menu</a>

                        <div class="dropdown-content">
                            <Navlink link ="" name="Link 2"></Navlink>
                            <Navlink link ="" name=""></Navlink>
                            <Navlink link ="" name=""></Navlink>
                        </div>
                    </li>
                        
                    <li>
                        <a href='#'>Library</a>
                        <div class="dropdown-content">
                            <Navlink link ="" name =""></Navlink>
                            <Navlink link ="" name =""></Navlink>
                            <Navlink link ="" name =""></Navlink>
                        </div>
                    </li>
                    <li>
                        <a href='#'>Categories</a>
                        <div class="dropdown-content">
                            <Navlink link ="" name =""></Navlink>
                            <Navlink link ="" name =""></Navlink>
                            <Navlink link ="" name =""></Navlink>
                        </div>
                    </li>
                    <li>
                        <a href='#'>General</a>
                        <div class="dropdown-content">
                            <Navlink link = "" name =""></Navlink>
                            <Navlink link = "" name =""></Navlink>
                            <Navlink link = "" name =""></Navlink>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='bottom-nav'>
            </div>
        </nav>
    );
};

export default Navbar;