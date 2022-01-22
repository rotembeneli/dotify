import React from 'react'
import { AudioPlayer } from './AudioPlayer.jsx'
import { IoVolumeMediumOutline } from 'react-icons/io5'

export function MusicPlayer() {
    return (
        <div className='music-player flex space-between align-center'>
            <div className='song-view'>Song is here</div>
            <div className='player'>
                <audio src="" preload="metadata"></audio>
                <AudioPlayer />
            </div>
            <div className='volume'><IoVolumeMediumOutline /></div>
        </div>
    )
}
