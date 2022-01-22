// import { playerService } from "../services/player.service.js";

export function setPlayer(player) {
    return (dispatch) => {
        dispatch({
            type: 'SET_PLAYER',
            player
        })
        return Promise.resolve();
    }
}

export function togglePlay(isPlaying) {
    return (dispatch) => {
        dispatch({
            type: 'TOGGLE_ISPLAYING',
            isPlaying
        })
    }
}