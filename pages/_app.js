import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import "../styles/globals.css";
import Head from "next/head";
import user from "../reducer/user";

//Persistance

// import { persistStore, persistReducer } from "redux-persist";
// import { PersistGate } from "redux-persist/integration/react";
// import storage from "redux-persist/lib/storage";

// const reducers = combineReducers({ reducername });
// const persistConfig = { key: "applicationName", storage };

// const persistor = persistStore(store);
// const store = configureStore({
//   reducer: persistReducer(persistConfig, reducers),
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
//  });

const store = configureStore({
  reducer: { user }
});
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
        <Head>
          <title>Next.js App</title>
        </Head>
      {/* </PersistGate> */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
