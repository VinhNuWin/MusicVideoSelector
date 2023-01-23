//Action Creator
export const selectSong = song => {
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

//Action Creator
export const selectBrawler = brawler => {
    // Return an action
    return {
        type: 'BRAWLER_SELECTED',
        payload: brawler
    };
};