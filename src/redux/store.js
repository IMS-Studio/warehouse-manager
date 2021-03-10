import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import warehouseReducer from "./warehouse/reducer";

const rootReducer = combineReducers({
  warehouse: warehouseReducer,
});

const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["warehouse"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { persistor, store };
