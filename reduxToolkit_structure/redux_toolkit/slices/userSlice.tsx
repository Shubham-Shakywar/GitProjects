import {createSlice} from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'userData',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    delteUser(state, action) {
      state.splice(action.payload, 1);
    },
    clearAll(state){
        return []
    }
  },
});

export const {addUser, delteUser,clearAll} = UserSlice.actions;
export default UserSlice;
