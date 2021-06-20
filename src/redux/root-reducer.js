import {combineReducers} from "redux";
import userReducer from "./user/user-reducer";
import cartReducer from "./cart/cart-reducer"
import {persistReducer} from "redux-persist";
import directoryReducer from "./directory/direcory-reducer";
import storage from "redux-persist/lib/storage"

const  persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

export const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
})

export default persistReducer(persistConfig, rootReducer)
