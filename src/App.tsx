import { QueryClient, QueryClientProvider } from "react-query";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import "./App.css";

function App() {

  // Initialze the client
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <BrowserRouter>
          <DefaultLayout />
        </BrowserRouter>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
