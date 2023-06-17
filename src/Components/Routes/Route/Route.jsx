import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../../../LayOut/Main";
import AllCources from "../../../Pages/AllCoueces/AllCources";
import Home from "../../../Pages/Home/Home/Home";
  import Teachers from "../../../Pages/AllTeachers/Teachers";
  import Frovite from "../../../Pages/Frovite/Frovite";
import Login from "../../../Pages/Login/Login";
import Register from "../../../Pages/Register/Register";
import PrivateRoutes from "../privateRoute/PrivateRoute";
import Dashboard from "../../../Pages/UserManu/Dashboard";
import Mycard from "../../../Pages/MyCard/Mycard";
import AllUser from "../../../Pages/AllUser/AllUser";
import AddClass from "../../../Pages/UserManu/AddClass/AddClass";
import CatagoryTeacher from "../../../Pages/AllTeachers/CatagoryTeacher";
import PostedClass from "../../../Pages/UserManu/PostedClass/PostedClass";
import NotFound from "../../../Pages/404/NotFound";
import Payment from "../../../Payment/Payment";
import Subceribe from "../../../Pages/MyCard/SubceibeClass/Subcerbe";
import CouressHolder from "../../../Pages/MyCard/CouseHolder/CouressHolder";
import Holder from "../../../Pages/MyCard/SubceibeClass/Subcerbe";
import AllPostedClass from "../../../Pages/UserManu/PostedClass/AllPosted";
 
  export const router = createBrowserRouter(
    [
      {
        path: "/",
        element:<Main></Main>,
        
        children:[
          {
            path: '/',
            element:<Home></Home>,
          },
          {
            path: '/cources',
            element:<AllCources> </AllCources>,
          },
          {
            path: '/allteacher',
            element:<CatagoryTeacher></CatagoryTeacher>,
          },
          {
            path: '/login',
            element:<Login></Login>,
          },
          {
            path: '/Subceribe',
            element:<Subceribe></Subceribe>,
          },
          
          {
            path: '/register',
            element:<Register></Register>,
          },
          {
            path: '/teacher',
            element:<Teachers></Teachers>,
          },
          {
            path: '/frovite',
            element:<PrivateRoutes><Frovite></Frovite></PrivateRoutes>  ,
          },
         
        ]
    },
    
    {
      path: '/dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path: '',
          element:<Mycard></Mycard>,
        },
   {

      path: '/dashboard/frovite',
      element:<PrivateRoutes><Frovite></Frovite></PrivateRoutes>  ,
    },
   {
      path: '/dashboard/allusers',
      element:<PrivateRoutes><AllUser></AllUser> </PrivateRoutes>  ,
    },
    {
      path: '/dashboard/Subceriber',
      element:<CouressHolder></CouressHolder>,
    },
    {
      path: '/dashboard/Subceriber/class',
      element:<Holder></Holder>,
    },
   {
      path: '/dashboard/postclass',
      element:<PrivateRoutes><PostedClass></PostedClass> </PrivateRoutes>  ,
    },
   {
      path: '/dashboard/allpostclass',
      element:<AllPostedClass></AllPostedClass>   ,
    },
    {
      path: '/dashboard/payment',
      element:<Payment></Payment>,
    },

   {
      path: '/dashboard/addclass',
      element:<PrivateRoutes><AddClass></AddClass> </PrivateRoutes>  ,
    },

  ]
    },
     {

      path: "/*",
      element:<NotFound></NotFound>
    },

    ]);
  