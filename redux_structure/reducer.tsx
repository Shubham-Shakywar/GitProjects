import {CHANGE_THEME, DECREMENT_COUNT, INCREMENT_COUNT} from './action';

const intialState = {
  theme: 'light',
};

let count = 0;



export const reducerTheme = (state = intialState, action: any) => {
  console.log("reducer log=============",action)
  switch (action.type) {
    case CHANGE_THEME:
      return {...state, theme: state.theme === 'light' ? 'dark' : 'light'};
    default:
      return state;
  }
};

// second reducer
export const IncrementReducer = (state = count, action) => {
    console.log("reducer increment=============",action)
  switch (action.type) {
    case INCREMENT_COUNT:
      return action.payload;
    default:
      return state;
  }
};

