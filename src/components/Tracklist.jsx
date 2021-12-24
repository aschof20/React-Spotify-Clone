import React from 'react';
import { BsMusicNoteList, BsFillVolumeUpFill} from 'react-icons/bs';
import { FaDesktop } from 'react-icons/fa';
import Track from "../assets/img/track.jpg"

const Tracklist = () => {
    return (
			<div className="tracklist">
				<div className="top">
					<img src={Track} alt="" />
					<p className='trackName'>
						Sample Name <span className='trackSpan'>Artist</span>
					</p>
				</div>
				<div className="bottom">
					<i>
						<BsFillVolumeUpFill />
					</i>
					<input type="range" />
					<i>
						<BsMusicNoteList />
					</i>
					<i>
						<FaDesktop/>
					</i>
				</div>
			</div>
		);
}

export { Tracklist };
