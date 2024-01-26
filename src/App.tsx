import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "react-query";
import UserProvider from "./providers/UserProvider";
import { BrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import "./App.css";

function App() {
  // Initialze the client
  const queryClient = new QueryClient();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DateRangePicker"]}>
        <QueryClientProvider client={queryClient}>
          <UserProvider>
            <BrowserRouter>
              <DefaultLayout />
            </BrowserRouter>
          </UserProvider>
        </QueryClientProvider>
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default App;
