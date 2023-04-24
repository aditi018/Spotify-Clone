export const initialState = {
    user : null,
    playlists: [],
    playing: false,
    item : null,
    token : 'BQB1K8L07b-iBiav5GHA5BIvH5TS8APAPkEpggp36xQdpPiwx08SeLjDpO9BtWewDtmZRc4MWfYODSyrcrHDlS6yIsK3l0AguDREvExyrvAT462tUGIzU-y7E1nspeiQdOI7mki3IlVciQrXeKCz-hrlETjWzIDtiSsXZ9K15RlI_P6fS89mZgA9mi1XoIZukUrLWsb-DQWzpFzFPQ',
}


const reducer = (state,action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER' : 
            return{
                ...state,
                user : action.user,
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token : action.token,
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        default: 
            return state;
    }
}

export default reducer;