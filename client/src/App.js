import React, { Suspense, useState } from 'react';
import './App.css';
import Website from './Pages/Website';
import Layout from './Components/Layout/Layout';
import Properties from './Pages/Properties/Properties';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools} from 'react-query/devtools';
import 'react-toastify/dist/ReactToastify.css';
import Property from './Pages/Property/Property';
import { User } from '@auth0/auth0-react';
import UserDetailContext from './context/UserDetailContext';


function App() {

  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    bookings: [],
    token: null
  });

  return (

    <UserDetailContext.Provider value={{userDetails, setUserDetails}}>

    <QueryClientProvider client={queryClient}>
   
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>

        <Routes>

          <Route element={<Layout />}>
            <Route path="/" element={<Website />} />
            <Route path='/properties'>
              <Route index element={<Properties />} />
              <Route path=':propertyId' element={<Property />} />
            </Route>
          </Route>

        </Routes>

      </Suspense>
    </BrowserRouter>

    <ToastContainer />

    <ReactQueryDevtools initialIsOpen={false} />

    </QueryClientProvider>

    </UserDetailContext.Provider>

  );
}

export default App;
    
