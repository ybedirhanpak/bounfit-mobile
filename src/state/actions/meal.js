const DENEME = 'DENEME';

export const actionTypes = {
  DENEME,
};

export const denemeAction = (text) => ({
  type: DENEME,
  payload: text,
});
