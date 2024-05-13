import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.js';
import Body from './components/Body';
import About from './components/About.js';
import Contactus from './Contactus.js';
import Error from './Error.js';
import Restramenu from './components/Restramenu.js';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Restramenu from './components/Restramenu.js';
import {Provider} from "react-redux";
import appStore from './components/utils/appstore.js';
import Cart from './components/Cart.js';

// const parent=React.createElement("div",{id:"parent"}, [React.createElement("div",{id:"child1"},
//              [React.createElement("h1",{},"hello world"),React.createElement("h2",{},"I am h2")]),
//              React.createElement("div",{id:"child2"},
//              [React.createElement("h1",{},"this is new"),React.createElement("h2",{},"I am h2")])
//             ]);
// // const parent =React.createElement("div",{id:"parent"},
// //               React.createElement("div",{id:"child"},
// // //               React.createElement("h1",{},"this is React")));
// // const parent=React.createElement("h1",{},"this is h1 tag");       
// // console.log(parent);
// const root=ReactDOM.createRoot(document.getElementById("app"));
// root.render(parent);

//COMPONENT IN COMPONENT 
// const JsxHeading= () => (
// <h1 className="heading">
//     Namasthe REACT using jsx
// </h1>
// );
// const num=109203;

// const Heading = () => (
//     <div id="container">

//         <JsxHeading />
//         <h1>THIS IS FUNCTIONAL COMPONENT</h1>
//     </div>
//     );

//ElEMENT IN COMPONENT
// const JsxHeading=  (
//     <h1 className="heading">
//         Namasthe REACT using jsx
//     </h1>
//     );


// const Heading = () => (
//     <div id="container">

//         {JsxHeading}
//         <h1>THIS IS FUNCTIONAL COMPONENT</h1>
//     </div>
//    );

//Element inside Element
// const ele=<span>this is element</span>
//        const JsxHeading=  (


//         <h1 className="heading">
//             {ele}
//             Namasthe REACT using jsx
//         </h1>
//         );
//         const Heading = () => (
//             <div id="container">

//                 {JsxHeading}
//                 <h1>THIS IS FUNCTIONAL COMPONENT</h1>
//             </div>
//            );




const Applayout = () => {
    return (
       <Provider store={appStore}> 
        <div className="app">
            <Header />
            <Outlet/>
        </div>
        </Provider>
    )
}
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<Applayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contactus",
                element:<Contactus/>,
            },
            {
                path:"/restaurants/:resId",
                element:<Restramenu/>,
            },

           { 
                path:"/Cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>
    },
    
])
const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(<RouterProvider router={appRouter}/>);
