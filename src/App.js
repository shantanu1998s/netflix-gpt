import {  Provider } from "react-redux";
import Body from "./components/body/Body";
import appStore from "./utils/redux/appStore";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Browse from "./components/browse/Browse";

const AppRouter = createBrowserRouter([
    
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
]);


function App() {
    console.log("hello i am here")
  return (
    <Provider store={appStore}>
    <RouterProvider router={AppRouter}>
    
    
    
    </RouterProvider>
    </Provider>
  );
}


  

export default App;
