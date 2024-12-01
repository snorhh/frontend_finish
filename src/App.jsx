import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Customers from './components/Customers';
import Navbar from './components/NavBar';
import Trainings from './components/Trainings';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient();
  
  const theme = createTheme();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/trainings" element={<Trainings />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App
