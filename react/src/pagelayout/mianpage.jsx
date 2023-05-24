import RightSide from "./rightside";
import { RouterProvider } from 'react-router-dom';

import router from "../router";

const Mianpage = ()=>{

    return(
        <div>
       <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default Mianpage;