import { Provider } from "./chakra/ui/provider";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProdiver } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./Redux/store.js";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <ReduxProdiver store={store}>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ReduxProdiver>
);
