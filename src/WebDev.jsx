import React from 'react'
import Header from './Header';
import { useParams,Link} from "react-router-dom";

const WebDev = () => {
   
    const myParams=useParams();
    return (
        <div>
            <Header/>
           <section>
           <h1>{myParams.name} Page</h1>
           <Link to="/service/Web Development/Front End Development">
               <button className="btn btn-primary">Front End Development</button>
           </Link>
           </section>
        </div>
    )
}

export default WebDev
