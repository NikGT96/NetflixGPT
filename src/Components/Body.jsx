import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Browse from "./Browse";
import { Provider } from "react-redux";
import appStore from "../Utils/appStore"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  return (
    <Provider store={appStore}>
    <div>
      <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
};

export default Body;
