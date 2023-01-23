import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '1:45' },
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

// const brawlerReducer = () => {
//     return [
//         { name: 'Frank', attack: '1000' },
//         { name: 'Rico', attack: '500' },
//     ];
// };

// const selectedBrawlerReducer = (selectedBrawler=null, action) => {
//     if (action.type === 'BRAWLER_SELECTED') {
//         return action.payload;
//     }
//     return selectedBrawler;
// };

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
