import React, { Component, useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux'
import YouTube from 'react-youtube'
import { GrPlayFill } from 'react-icons/gr'
import { GiConsoleController, GiPauseButton, GiPlayerTime } from 'react-icons/gi'
import { IoShuffle, IoRepeat } from 'react-icons/io5'
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md'
import { setPlayer, togglePlay } from '../store/player.action.js'

export class _AudioPlayer extends Component {

    state = {
        isRepeat: false,
        isShuffle: false,
        firstPlay: true
    }

    componentDidMount() {
        // console.log(this.props);
    }

    onReady = async (ev) => {
        const { isPlaying } = this.props;
        await this.props.setPlayer(ev.target);
        this.props.togglePlay(!isPlaying);
        this.props.player.playVideo();
    }

    onStateChange = (ev) => {
        console.log('on state change')
    }

    onChangeSong = (diff) => {
        const { isRepeat, isShuffle } = this.state;
        const { player } = this.props;
        if (!player) return;

        if (isRepeat) {
            player.stopVideo();
            player.playVideo();
            return;
        }

        if (isShuffle) {
            // need the function from toggle, didnt write it yet
        }

        // use the diff to change idx in a playlist and play another song
    }

    onTogglePlayPause = async () => {
        try {
            const { player, isPlaying } = this.props;
            // const { firstPlay } = this.state;
            this.props.togglePlay(!isPlaying);
            if (isPlaying) {
                player.playVideo();
            } else player.pauseVideo();
        } catch (err) {
            console.log('error...')
        }
    }

    onToggleRepeat = () => {
        this.setState({ isRepeat: !this.state.isRepeat })
        console.log('is Repeat', this.state.isRepeat);
    }

    onToggleShuffle = () => {
        this.setState({ isShuffle: !this.state.isShuffle }, () => {
            if (this.state.isShuffle) {
                // function that checks songs are not repeating
            }
            console.log('is Shuffle', this.state.isShuffle);
        })
    }

    render() {
        const { isPlaying } = this.props;
        const videoId = 'RdVx-GrnQzk';
        const opts = {
            height: '360',
            width: '360'
        }
        return (
            <div className='audio-player'>
                {/* <audio ref={audioPlayer} src="../assets/songs/song1.mp3" preload="metadata" type="audio/mpeg"></audio> */}

                <YouTube
                    videoId={videoId}
                    id={videoId}
                    className="video-player"
                    // title name of the song
                    opts={opts}
                    onReady={this.onReady}
                    onEnd={() => this.onChangeSong(1)}
                    onStateChange={this.onStateChange}
                />

                <div className="player-btns">

                    <button className="shuffle btn" onClick={this.onToggleShuffle}><IoShuffle /></button>

                    <button className="pre-song btn" onClick={() => this.onChangeSong(-1)}><MdSkipPrevious /></button>

                    <button className="play-pause btn" onClick={this.onTogglePlayPause}>
                        {isPlaying ? <GrPlayFill /> : <GiPauseButton />}
                    </button>

                    <button className="next-song btn" onClick={() => this.onChangeSong(1)}><MdSkipNext /></button>

                    <button className="repeat btn" onClick={this.onToggleRepeat}><IoRepeat /></button>
                </div>

                <div className="player-bar flex">

                    <div className="currTime">0:00</div>

                    <div className="currProgress"><input type="range" /></div>

                    <div className="duration">3:26</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ playerModule }) {
    return {
        player: playerModule.player,
        isPlaying: playerModule.isPlaying

    }
}

const mapDispatchToProps = {
    setPlayer,
    togglePlay
}

export const AudioPlayer = connect(mapStateToProps, mapDispatchToProps)(_AudioPlayer)

// player.getPlayerState()
// -1 – unstarted
// 0 – ended
// 1 – playing
// 2 – paused
// 3 – buffering
// 5 – video cued