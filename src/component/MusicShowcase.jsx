import React from 'react'

const MusicShowcase = () => {
    const bollywoodSongs = [
        {
            songName: "Kesariya",
            artistName: "Arijit Singh",
            duration: "4:28",
            image: "./src/component/songImages/kesariya.jpg"
        },
        {
            songName: "Tujh Mein Rab Dikhta Hai",
            artistName: "Roop Kumar Rathod",
            duration: "5:39",
            image: "./src/component/songImages/Tujh Mein Rab Dikhta Hai.jpeg"
        },
        {
            songName: "Tum Hi Ho",
            artistName: "Arijit Singh",
            duration: "4:22",
            image: "./src/component/songImages/Tum Hi Ho.jpeg"
        },
        {
            songName: "Shayad",
            artistName: "Arijit Singh",
            duration: "4:08",
            image: "./src/component/songImages/Shayad.jpg"
        },
        {
            songName: "Raataan Lambiyan",
            artistName: "Jubin Nautiyal, Asees Kaur",
            duration: "3:50",
            image: "./src/component/songImages/Raataan Lambiyan.jpg"
        },
        {
            songName: "Apna Bana Le",
            artistName: "Arijit Singh",
            duration: "3:57",
            image: "./src/component/songImages/Apna Bana Le.jpeg"
        },
        {
            songName: "Dil Diyan Gallan",
            artistName: "Atif Aslam",
            duration: "4:20",
            image: "./src/component/songImages/Dil Diyan Gallan.jpg"
        },
        {
            songName: "Kalank (Title Track)",
            artistName: "Arijit Singh",
            duration: "5:11",
            image: "./src/component/songImages/Kalank.webp"
        },
        {
            songName: "Zaalima",
            artistName: "Arijit Singh, Harshdeep Kaur",
            duration: "4:59",
            image: "./src/component/songImages/Zaalima.jpg"
        },
        {
            songName: "Tera Ban Jaunga",
            artistName: "Akhil Sachdeva, Tulsi Kumar",
            duration: "3:56",
            image: "./src/component/songImages/Tera Ban Jaunga.jpg"
        },

    ];
    return (
        <div>
            <div className=' main-div w-full h-screen bg-zinc-200'>
                <div className='header w-full px-5 py-4 bg-[#22577a] text-center '>
                    <h2 className='text-3xl text-zinc-50 font-[600]'>Music Player Showcase</h2>
                </div>
                <div className='music-div flex justify-start gap-x-14 gap-y-6 flex-wrap w-full  px-6  py-4  bg-[#38a3a5] '>
                       
                    {bollywoodSongs.map((song, index) => (
                        <div key={index} className=' music-card w-65 h-77 p-3 bg-gradient-to-t from-[#2c2b2b] to-[#38a3a5] rounded-2xl '>
                            <div className='image w-full h-[50%] object-cover object-center overflow-hidden rounded-t-md '>
                                <img className="w-full h-full" src={song.image} alt="" />
                            </div>
                            <div className='description-div w-full py-1   '>
                                <h2 className='text-white text-[1rem] opacity-85'> 🎶Song Name : {song.songName}</h2>
                                <h2 className='text-white text-[1rem] opacity-85 '> 🎤Artist : {song.artistName}</h2>
                                <p className='text-white text-[1rem] opacity-85 '> ⌛Duration : {song.duration}</p>
                            </div>
                            <div className='card-footer flex justify-between items-center py-1  w-full'>
                                <p className='text-2xl  w-fit hover:scale-[0.95] cursor-pointer'>💟</p>
                                <h2 className='text-white text-xl border-1 rounded-xl py-1 px-2'>Play ▶️</h2>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default MusicShowcase;