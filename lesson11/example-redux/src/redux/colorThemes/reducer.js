const defaultState = {
    colorTheme: 'light'
}

export const colorThemesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_COLOR_THEME':
            return {
                ...state,
                colorTheme: action.payload,
            };
        default:
            return state;
    }
}