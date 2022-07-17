import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalProvider } from './context/Provider'
import routes from './routes'

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  )
}

export default App
