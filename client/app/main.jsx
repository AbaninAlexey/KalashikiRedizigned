import '@/app/styles'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from '@/app/providers/AuthProvider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/KalashikiRedizigned/">
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
)
