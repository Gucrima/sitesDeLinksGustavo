import React, { useRef, useState, useEffect } from 'react';
import './PlayListGustavo.css';
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";
import { CiPause1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";

function PlayListGustavo() {
    const playlist = [
        {
            title: 'In My Life (Remastered 2009) - The Beatles',
            src: '/Musicas/In My Life (Remastered 2009).mp3',
            cover: 'https://upload.wikimedia.org/wikipedia/pt/7/78/The_Beatles_-_HRubber_Soul.jpg',
        },
        {
            title: 'Ain t No Mountain High Enough - Marvin Gaye',
            src: '/Musicas/Ain t No Mountain High Enough (extra HQ) - Marvin Gaye & Tammi Terrell - Doc Rudy  Soul Studios.mp3',
            cover: 'https://i.scdn.co/image/ab67616d0000b2739173e50e99bdea2400222f02',
        },
        {
            title: 'Bon Jovi - Bed Of Roses',
            src: '/Musicas/Bon Jovi - Bed Of Roses (Official Music Video).mp3',
            cover: 'https://cdn-images.dzcdn.net/images/cover/4a2821c5cfa61955ddd982c15cc21882/500x500.jpg',
        },
    ];

    const audioRef = useRef(null);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const handleUserInteraction = () => {
        setHasInteracted(true);
        if (audioRef.current) {
            audioRef.current.src = playlist[currentTrack].src;
            audioRef.current.load();
            audioRef.current.play().catch((error) => {
                console.error('Erro ao reproduzir o áudio:', error);
                alert('Não foi possível reproduzir o áudio. Verifique o caminho ou o formato do arquivo.');
            });
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.src = playlist[currentTrack].src;
            audioRef.current.load(); // Carrega o áudio ao trocar de faixa
            if (isPlaying) {
                audioRef.current.play().catch((error) => {
                    if (error.name !== 'AbortError') {
                        console.error('Erro ao reproduzir o áudio:', error);
                    }
                });
            }
        }
    }, [currentTrack]);

    const togglePlay = () => {
        if (audioRef.current) {
            // Se o áudio estiver mutado, desmuta ao clicar no play
            if (isMuted) {
                audioRef.current.muted = false;
                setIsMuted(false);
            }

            if (isPlaying) {
                // Pausa o áudio sem reiniciar
                audioRef.current.pause();
            } else {
                // Reproduz o áudio sem reiniciar
                audioRef.current.play().catch((error) => {
                    if (error.name !== 'AbortError') {
                        console.error('Erro ao reproduzir o áudio:', error);
                    }
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);

            // Pausa a música ao mutar
            if (!isMuted) {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    };

    const playNext = () => {
        setCurrentTrack((prev) => (prev + 1) % playlist.length);
    };

    const playPrev = () => {
        setCurrentTrack((prev) =>
            prev === 0 ? playlist.length - 1 : prev - 1
        );
    };

    const handleEnded = () => {
        playNext();
    };

    const current = playlist[currentTrack];

    if (!hasInteracted) {
        return (
            <button
                onClick={handleUserInteraction}
                className='botão-liberacao'
            >
                Quer ouvir uma musiquinha?
            </button>
        );
    }

    return (
        <div style={{ textAlign: 'center', fontSize: 8, marginTop: -25, fontFamily: 'inter', color: '#3b5739' }}>
            <div className="capa-album">
                <h2 className='titulo-musicas'>{current.title}</h2>
                <img
                    src={current.cover}
                    alt={`Capa do álbum ${current.title}`}
                    style={{
                        width: 120,
                        height: 120,
                        borderRadius: 10,
                        objectFit: 'cover',
                        marginBottom: 20,
                    }}
                />
            </div>
            <audio
                ref={audioRef}
                onEnded={handleEnded}
                controls={false}
            />
            <div className='container-botoes'>
                <button className='Botoes-play-list' onClick={playPrev}><FaAngleDoubleLeft /></button>
                <button className='Botoes-play-list' onClick={togglePlay}>
                    {isPlaying ? <CiPause1 /> : <IoPlayOutline />}
                </button>
                <button className='Botoes-play-list' onClick={playNext}><FaAngleDoubleRight /></button>
                <button className='Botoes-play-list' onClick={toggleMute}>
                    {isMuted ? <MdMusicNote /> : <MdMusicOff />}
                </button>
            </div>
        </div>
    );
}

export default PlayListGustavo;
