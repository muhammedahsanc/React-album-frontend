import { createSlice } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

interface UserDataState {
    userList: string[];
}

const INITIAL_STATE: UserDataState = {
    userList: [],
};
 
const dataSlice = createSlice({
    name: "userdata",
    initialState: INITIAL_STATE,
    reducers: {
        addToList: (state, action) => {
            console.log(action.payload);
            state.userList= action.payload;

        },
    },
});
const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, dataSlice.reducer);
export default persistedReducer;
export const { addToList } = dataSlice.actions;
// export default dataSlice.reducer
