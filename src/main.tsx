import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/onest/wght.css'
import '@fontsource-variable/lora/wght.css'
import '@fontsource-variable/lora/wght-italic.css'
import '@fontsource-variable/bodoni-moda/wght.css'
import '@fontsource-variable/bodoni-moda/wght-italic.css'
import '@fontsource/barlow-condensed/latin-600.css'
import '@fontsource-variable/syne/wght.css'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(<React.StrictMode><BrowserRouter><App /></BrowserRouter></React.StrictMode>)
