import React, {useEffect} from 'react';
import '../assets/styles/mainContainer.css';
import { Banner } from '../components/Banner';
import { FaUsers } from 'react-icons/fa';

const MainContainer = () => {


    useEffect(() => {
			const listItems = document
				.querySelector('.menuList')
				.querySelectorAll('li');

			function changeMenuActive() {
				listItems.forEach((item) => item.classList.remove('active'));
				this.classList.add('active');
			}

			listItems.forEach((list) =>
				list.addEventListener('click', changeMenuActive),
			);
    }, []); 
    
	return (
		<div className="mainContainer">
			<Banner />
			<div className="menuList">
				<ul>
					<li>
						<a href="#">Popular</a>
					</li>
					<li>
						<a href="#">Albums</a>
					</li>
					<li>
						<a href="#">Songs</a>
					</li>
					<li>
						<a href="#">Fans</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
				</ul>
				<p>
					<i>
						<FaUsers />
					</i>
					12.3M <span>Followers</span>
				</p>
			</div>
		</div>
	);
};

export { MainContainer };
