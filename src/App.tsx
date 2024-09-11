import { useState, useEffect } from 'react';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline, Theme } from '@mui/material';
import { lightTheme, darkTheme } from './theme'; 
import Home from './pages/visitor/Home';
import VisitorLayout from './layouts/VisitorLayout';

function App() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const savedMode = (localStorage.getItem('themeMode') as 'light' | 'dark') || 'light';
    setMode(savedMode);
  }, []);

  const handleThemeChange = () => {
    const newMode: 'light' | 'dark' = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const appliedTheme: Theme = mode === 'light' ? lightTheme : darkTheme;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<VisitorLayout />} >
        <Route index element={<Home />} />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={appliedTheme}>
      
      <CssBaseline />
      <RouterProvider router={router} />
      <button onClick={handleThemeChange}>Toggle Theme</button>
    </ThemeProvider>
  );
}

export default App;
