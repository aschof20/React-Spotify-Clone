import React, { useEffect } from 'react';

const Menu = ({ title, menuObject }) => {
    
    useEffect(() => {
        const listItems = document.querySelector('.menuContainer ul').querySelectorAll('li');

        function changeMenuActive() {
            listItems.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        }     

        listItems.forEach( list =>list.addEventListener('click', changeMenuActive))
     }, []);

    return (
        <div className='menuContainer'>
            <p className='title'>{title}</p>

            <ul>
                {menuObject && menuObject.map(menu => (
                    <li key={menu.id}>
                        <a href="#">
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                        </a>
                    </li>
                ) )}
            </ul>
        </div>
    )
}

export { Menu };
