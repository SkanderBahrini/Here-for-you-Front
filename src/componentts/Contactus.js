
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const Contactus = () => {


    const[date,setDate]=useState(


      []
    );

    const [bol,setBol]=useState();

    

        useEffect(() => {
    axios.get('http://localhost:3001/contactus').then((response) => {
      setDate(response);

       setBol(response)
      console.log(date)
    });
  },);


    return ( 

        <div className="contact">
            <br/>
            <br/>
             <img style={{ width:'200px', height:'200px' }} src="/images/citrouille.png" alt=""/>
             <h2 style={{color:'red'}}> You can contact us </h2>
      
             {date.data}

            {bol &&  <div>
                    Welcome what can we do for you 
                    <button > Click here to contact us </button>
                      </div>
               } 
           
        </div>
     );
}
 
export default Contactus;