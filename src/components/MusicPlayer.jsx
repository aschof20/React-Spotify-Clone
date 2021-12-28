import React,{useState} from 'react';
import '../assets/styles/musicPlayer.css';
import { FaHeart, FaRegHeart, FaStepBackward, FaBackward, FaPlay, FaPause, FaFolder, FaForward, FaStepForward, FaShareAlt } from 'react-icons/fa';
import {BsDownload} from 'react-icons/bs'

const MusicPlayer = ({ song, imgSrc }) => {
    const [isFavourite, setFavourite] = useState(false);
    const [isPlaying, setPlaying] = useState(false);
    

    const changeFavourited = () => {
        setFavourite(!isFavourite);
    }

    const changePlaying = () => {
        setPlaying(!isPlaying);
    }

    return (
			<div className="musicPlayer">
            <div className="songImage">
                <img src={imgSrc} alt="" />
                </div>
				<div className="songAttributes">
					<audio src={song} preload="metadata" />
					<div className="top">
						<div className="left">
							<div className="favourited" onClick={changeFavourited}>
								{isFavourite ? (
									<i>
										<FaHeart />
									</i>
								) : (
									<i>
										<FaRegHeart />
									</i>
								)}
							</div>
							<div className="download">
								<i>
									<BsDownload />
								</i>
							</div>
						</div>
						<div className="middle">
							<div className="back">
								<i>
									<FaStepBackward />
								</i>
								<i>
									<FaBackward />
								</i>
							</div>
                        <div className="playPause"
                        onClick={changePlaying}
                        >
								{isPlaying ? (
									<i>
										<FaPause />
									</i>
								) : (
									<i>
										<FaPlay />
									</i>
								)}
							</div>
                        <div className="forward">
                            <i><FaForward /></i>
                            <i><FaStepForward/></i>

                            </div>
						</div>
                    <div className="right">
                        <i><FaShareAlt/></i>

                        </div>
					</div>
                <div className="bottom">
                    <div className="currentTime">00:00</div>
                    <input type="range" className='progressBar'/>
                    <div className="duration">00:00</div>
                    </div>
				</div>
			</div>
		);
}

export { MusicPlayer };
