import React, { useState, useEffect} from 'react';
import { FaClock, FaHeadphones, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MusicPlayer } from './MusicPlayer';
import { Songs } from './Songs';
const AudioList = () => {

    const [song, setSong] = useState(Songs[0].song);
    const [image, setImage] = useState(Songs[0].imgSrc);


useEffect(() => {
	const songs = document.querySelectorAll('.songs');

	function changeMenuActive() {
		songs.forEach((song) => song.classList.remove('active'));
		this.classList.add('active');
	}

	songs.forEach((song) => song.addEventListener('click', changeMenuActive));
}, []);



    // Function to update the favourited status of the song.
    const changeFavourite = (id) => {
        
        Songs.forEach(song => {
            if (song.id === id) {
                console.log(id);
                console.log(`Fav status before: ${song.favourite}`);
                song.favourite = !song.favourite;
                console.log(`Fav status after: ${song.favourite}`);
            }
        });
        setSong([...song]);
    };

//Function to send the selected song to tha audio player
    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc);
        setImage(imgSrc);
    }


	return (
		<div className="audioList">
			<h2 className="title">
				The List <span>{Songs.length} songs</span>
			</h2>

			<div className="songContainer">
				{Songs &&
					Songs.map((song, index) => (
                        <div className="songs" key={index}
                        onClick={()=> setMainSong(song?.song, song?.imgSrc)}
                        >
							<div className="count">#{song?.id}</div>
							<div className="song">
								<div className="imageBox">
									<img src={song.imgSrc} alt="" />
								</div>

								<div className="section">
									<p className="songName">
										{song?.songName}
										<span className="artistSpan"> {song?.artist}</span>
									</p>
									<div className="hits">
										<p className="hit">
											<i>
												<FaHeadphones />
											</i>
											95,100,232
										</p>
										<p className="duration">
											<i>
												<FaClock />
											</i>
											03:04
										</p>
                                        <div className="favourite"
                                        onClick={()=> changeFavourite(song?.id)}
                                        
                                        >
											{song.favourite ? (
												<i>
													<FaHeart />
												</i>
											) : (
												<i>
													<FaRegHeart />
												</i>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
            </div>
            <MusicPlayer song={song} imgSrc={image}/>
		</div>
	);
};

export { AudioList };
