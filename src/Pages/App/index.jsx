import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import Navbar from '../../Components/Navbar'
import '../../App.css'

const AppRoutes = () => {
  //creacion de variable para las rutas, se crea como un 
  let routes = useRoutes([
    //Se generan los path's y elementos que los confroman
    { path: '/', element: <Home /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SignIn /> }
  ])

  return routes
}

function App() {  
  return (
    //esto nos va a mostrar segun la ruta en la que naveguemos
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
