import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  // createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Components/Routes/Route/Route';
import AuthProniders from './Components/Prvider/authProvider/AuthProvider';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'


// Create a client
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

<AuthProniders>

<QueryClientProvider client={queryClient}>

    <div className='max-w-7xl mx-auto'>
    <RouterProvider router={router} />
    </div>

    </QueryClientProvider>
</AuthProniders>



  </React.StrictMode>
);
