import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {Home, Hero} from './pages'
import {loader as heroLoader} from './pages/Hero'
import {loader as searchLoader} from './components/SearchForm/index'
import {ToastContainer} from 'react-toastify';
import {QueryClient, QueryClientProvider} from 'react-query';
import {FavoritesProvider} from '../src/context/FavoriteContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    loader: searchLoader,
  },
  {
    path: '/hero/:id',
    element: <Hero />,
    loader: heroLoader,
  }
])

const App = () => {
  return (
    <FavoritesProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer position='top-center' />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </FavoritesProvider>
  )
}

export default App
