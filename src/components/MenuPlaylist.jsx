import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { BsMusicNoteList, BsTrash } from 'react-icons/bs';
import { Playlist } from './Playlist';

const MenuPlaylist = () => {
	return (
		<div className="playlistContainer">
			<div className="nameContainer">
				<p>PLAYLISTS</p>
				<i>
					<FaPlus />
				</i>
			</div>
			<div className="playlistScroll">
				{Playlist &&
					Playlist.map((item) => (
						<div className="playlist" key={item.id}>
							<i className="list">
								<BsMusicNoteList />
							</i>

							<p>{item.name}</p>
							<i className="trash">
								<BsTrash />
							</i>
						</div>
					))}
			</div>
		</div>
	);
};

export { MenuPlaylist };
