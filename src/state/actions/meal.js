const DENEME = 'DENEME';

export const actionTypes = {
    DENEME,
}

export const denemeAction = (text) => {
    return {
        type: DENEME,
        payload: text
    }
}