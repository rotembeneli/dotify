const initialState = {
    player: null,
    isPlaying: false
}

export function playerReducer(state = initialState, action) {
    let newState = state;

    switch (action.type) {
        case 'SET_PLAYER':
            newState = { ...state, player: action.player };
            break;
        case 'TOGGLE_ISPLAYING':
            newState = { ...state, isPlaying: action.isPlaying };
            break;
        default:
            break;
    }

    return newState;
}