import UserProvider from "./providers/UserProvider";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <DefaultLayout />
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
