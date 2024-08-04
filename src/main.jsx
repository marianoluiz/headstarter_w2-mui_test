import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Mui from './Component/MuiTest.jsx'
import { createTheme, ThemeProvider } from '@mui/material/styles'; // Import ThemeProvider and createTheme


/* customize to overwrite default theme */
const theme = createTheme({
  palette: {
    primary: {
      main: "#030303",
    }
  },
   /* typhography etc..*/
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    {/* <App /> */}
    <Mui />
    </ThemeProvider>
  </React.StrictMode>,
)
