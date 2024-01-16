import { Page } from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  return (
    <div>
      <ToastContainer />
      <GoogleOAuthProvider clientId="464602140242-f6tjojvl47ebbqeld5h4fmk424ngsvb8.apps.googleusercontent.com">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Page />
        </PersistGate>
      </Provider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
