import {createSlice} from '@reduxjs/toolkit';

const AdminSlice = createSlice({
  name: 'AdminData',
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

export const {addUser, delteUser,clearAll} = AdminSlice.actions;
export default AdminSlice;
