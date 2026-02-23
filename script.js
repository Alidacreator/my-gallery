const { useState } = React;

// --- JSON CONFIG: EDIT THIS TO CHANGE ALBUMS/PHOTOS ---
const GALLERY_CONFIG = {
    albums: [
        {
            id: 1,
            title: "Happy Birthday ❤️ ENIOLA ❤️",
            cover: "./Assets1/1/IMG-20260221-WA0116~2.jpg",
            photos: [
                { type: "image", url: "./Assets1/1/1.jpg"},
                { type: "image", url: "./Assets1/1/3.jpg"},
                { type: "image", url: "./Assets1/1/4.jpg"},
                { type: "image", url: "./Assets1/1/17.jpg"},
                { type: "image", url: "./Assets1/1/16.jpg"},
                { type: "video", url: "./Assets1/1/VID-20260222-WA0030.mp4" }
            ]
        },
        {
            id: 2,
            title: "Happy Birthday ❤️ ALIMAT ❤️",
            cover: "./Assets1/2/Snapchat-662685168.jpg",
            photos: [
                { type: "image", url: "./Assets1/2/IMG-20240724-WA0037.jpg" },
                { type: "image", url: "./Assets1/2/IMG-20240724-WA0038.jpg" },
                { type: "image", url: "./Assets1/2/IMG-20240724-WA0039.jpg" },
                { type: "image", url: "./Assets1/2/IMG-20240724-WA0040.jpg" },
                { type: "image", url: "./Assets1/2/Snapchat-662685168.jpg" }
            ]
        },
        {
            id: 3,
            title: "Happy Birthday ❤️ ADEOLA ❤️",
            cover: "./Assets1/3/Snapchat-1908775105.jpg",
            photos: [
                { type: "image", url: "./Assets1/3/Snapchat-11190297.jpg"},
                { type: "image", url: "./Assets1/3/Snapchat-72492610.jpg"},
                { type: "image", url: "./Assets1/3/Snapchat-84391015.jpg"},
                { type: "image", url: "./Assets1/3/Snapchat-170784202.jpg"},
                { type: "image", url: "./Assets1/3/Snapchat-1022162278.jpg"},
                { type: "image", url: "./Assets1/3/Snapchat-1231056604.jpg"},
                { type: "image", url: "./Assets1/3/Snapchat-1678029599.jpg"},
                { type: "image", url: "./Assets1/3/Snapchat-1814643712.jpg"},
                { type: "image", url: "./Assets1/3/Snapchat-1815568011.jpg"},
            ]
        },
        {
            id: 4,
            title: "Happy Birthday ❤️MY PANDA❤️",
            cover: "./Assets1/4/Snapchat-1565457805.jpg",
            photos: [
                { type: "image", url: "./Assets1/4/Snapchat-217025047.jpg"},
                { type: "image", url: "./Assets1/4/Snapchat-383472431.jpg"},
                { type: "image", url: "./Assets1/4/Snapchat-991178838.jpg"},
                { type: "image", url: "./Assets1/4/Snapchat-1126392652.jpg"},
                { type: "image", url: "./Assets1/4/Snapchat-1332616924.jpg"},
                { type: "image", url: "./Assets1/4/Snapchat-1347144789.jpg"},
                { type: "video", url: "./Assets1/4/Snapchat-1926641119.mp4" }
            ]
        },
        {
            id: 5,
            title: "Happy Birthday ❤️ IYAWO MI ❤️",
            cover: "./Assets1/5/Snapchat-2074175960.jpg",
            photos: [
                { type: "image", url: "./Assets1/5/Snapchat-569095708.jpg"},
                { type: "image", url: "./Assets1/5/Snapchat-1002406756.jpg"},
                { type: "image", url: "./Assets1/5/Snapchat-2074175960.jpg"},
                { type: "image", url: "./Assets1/5/Snapchat-2095059851.jpg"},
                { type: "image", url: "./Assets1/5/Snapchat-2118541484.jpg"},
                { type: "video", url: "./Assets1/5/Snapchat-127262652.mp4" },
                { type: "video", url: "./Assets1/5/Snapchat-546959026.mp4" },
                { type: "video", url: "./Assets1/5/Snapchat-1146969437.mp4" },
                { type: "video", url: "./Assets1/5/Snapchat-1404380966.mp4" },
                { type: "video", url: "./Assets1/5/Snapchat-1831755927.mp4" }
            ]
        }
    ]
};

const App = () => {
    const [activeAlbum, setActiveAlbum] = useState(null);
    const [selectedMedia, setSelectedMedia] = useState(null);

    // Dynamic Math for Equidistant Positioning
    const getCircleStyles = (index, total) => {
        const angle = (index / total) * 2 * Math.PI - (Math.PI / 2); // Start at 12 o'clock
        const radius = window.innerWidth < 768 ? 140 : 240;
        const x = Math.round(Math.cos(angle) * radius);
        const y = Math.round(Math.sin(angle) * radius);
        return { '--x': `${x}px`, '--y': `${y}px` };
    };

    return (
        <div className="app-wrapper">
            {!activeAlbum ? (
                /* HOMEPAGE: THE CIRCLE */
                <div className="home-container">
                    <div className="circle-wrapper">
                        {GALLERY_CONFIG.albums.map((album, i) => (
                            <div 
                                key={album.id} 
                                className="album-card" 
                                style={getCircleStyles(i, GALLERY_CONFIG.albums.length)}
                                onClick={() => setActiveAlbum(album)}
                            >
                                <img src={album.cover} className="album-cover" alt={album.title} />
                                <div className="album-info">
                                    <h3>{album.title}</h3>
                                    <p>{album.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                /* DETAIL VIEW: THE GRID */
                <div className="view-container">
                    <button className="back-btn" onClick={() => setActiveAlbum(null)}>
                        <i className="fa-solid fa-arrow-left"></i> BACK
                    </button>
                    <h1 style={{textAlign: 'center', marginBottom: '50px'}}>{activeAlbum.title}</h1>
                    <div className="photo-grid">
                        {activeAlbum.photos.map((item, i) => (
                            <div key={i} className="photo-item" onClick={() => setSelectedMedia(item)}>
                                {item.type === 'video' ? (
                                    <video src={item.url} muted loop autoPlay playsInline />
                                ) : (
                                    <img src={item.url} alt={item.desc} />
                                )}
                                <div className="photo-desc">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            /* FULLSCREEN MODAL */
            {selectedMedia && (
                <div className="modal" onClick={() => setSelectedMedia(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="modal-close" onClick={() => setSelectedMedia(null)}>&times;</span>
                        {selectedMedia.type === 'video' ? (
                            <video src={selectedMedia.url} controls autoPlay loop />
                        ) : (
                            <img src={selectedMedia.url} alt="Fullscreen" />
                        )}
                        <p style={{marginTop: '15px', textAlign: 'center'}}>{selectedMedia.desc}</p>
                    </div>
                </div>
            )}
        </div>
    );
};
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);