import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "../styles/globals.css";
import Head from "next/head";
import user from "../reducer/user";

//Persistance

import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({ user });
const persistConfig = { key: "applicationName", storage };

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Head>
          <title>HackaaTweeeeeeeet</title>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
      </PersistGate>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
