import React from 'react'
import '../assets/styles/leftMenu.css';
import { FaSpotify, FaEllipsisH } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { Menu } from './Menu';
import { MenuList } from './MenuList';
import { MenuPlaylist } from './MenuPlaylist';
import { Tracklist } from './Tracklist';

const LeftMenu = () => {
    return (
			<div className="leftMenu">
            <div className="logoContainer">
                <i><FaSpotify /></i>
                <h2>Spotify</h2>
                <i><FaEllipsisH className='ellipse'/></i>
                </div>
            <div className="searchBox">
                <input type="text" placeholder='Search...' />
                <i>
                    <BiSearchAlt className='searchIcon' />
                </i>

            </div>
            <Menu title={'Menu'} menuObject={ MenuList}/>
            <MenuPlaylist />
            <Tracklist/>
			</div>
		);
}

export { LeftMenu };
