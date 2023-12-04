import { Suspense } from 'react';
import './App.css';
import Website from './Pages/Website';
import Layout from './Components/Layout/Layout';
import Properties from './Pages/Properties/Properties';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools} from 'react-query/devtools';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const queryClient = new QueryClient();

  return (

    <QueryClientProvider client={queryClient}>
   
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path='/properties' element={<Properties />} />
          </Route>

        </Routes>

      </Suspense>
    </BrowserRouter>

    <ToastContainer />

    <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>

  );
}

export default App;
    
