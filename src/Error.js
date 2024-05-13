import { CUTE_URL } from "./components/utils/constants";
// import { useRouteError } from "react-router-dom";
// import { LOGO_URL } from "./components/utils/constants";
const Error=()=>
{
    // const err=useRouteError();
    return(
        <center>
            <div > <img className="cute"src={CUTE_URL}></img></div>
      
        <h1 >Oops! Something went wrong</h1>
        {/* <h3>{err.status}:{err.statusText}</h3> */}
        </center>
        
    )
}
export default Error;