import { Box } from '@mui/material'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { clientRoute, publicClientRoutes } from './utils/constants/route'
import PublicLayout from './layouts/public-layout/PublicLayout'
import ScrollToTop from './components/ScrollToTop'

function App() {

  return (
    <Box>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/trang-chu" replace />} />
          <Route path={clientRoute.base} element={<PublicLayout />}>
            {
              publicClientRoutes.map((route, index) => {
                const Page = route.component || '';
                return (
                  <Route key={index} path={route.path} element={<Page />}>
                    {
                      route.children &&
                      route.children.length > 0 &&
                      route.children.map((childRoute, index) => {
                        const ChildComponent = childRoute.component;
                        return (
                          <Route
                            key={index}
                            path={childRoute.path}
                            index={childRoute.index ?? false}
                            element={<ChildComponent />}
                          />
                        );
                      })
                    }
                  </Route>
                )
              })
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App
