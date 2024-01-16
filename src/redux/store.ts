import {configureStore} from  "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import userDataReducer from "./data"
 const store = configureStore({
    reducer:{
        userData:userDataReducer
        
    },
})
 const persistor = persistStore(store);
export { store, persistor };