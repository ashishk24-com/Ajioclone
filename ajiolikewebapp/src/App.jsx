import { useState,useEffect } from 'react'

import './App.css'

function App() {

  const[isloading,setIsloading]=useState(false);

  const[data,setData]=useState([]);

  const[error,setError]=useState(false);



  const getdata=async()=>{
    setIsloading(true)
    await fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>setData(data), console.log(data))
    .catch((error)=>setError(true),console.log(error));

    setIsloading(false)
  }

    useEffect(()=>{
     getdata()
     },[])


     if(isloading){
      return(
  <>
      <div className='flex justify-center m-10'>
  
            <Audio
              height="80"
              width="80"
              radius="9"
              color="green"
              ariaLabel="loading"
              wrapperStyle
              wrapperClass
              />
      </div>
   </>
      )
  
    }
        if(error){
          return(
  
            < >
            <div className='bg-orange-400 h-screen'> 
  
              <p>OOPS!  Something went wrong</p>
            </div>
            </>
          )
          
 
 
        }
 


  return (
    <>
     <div>

      <div className='flex justify-evenly'>

    
         <div>AJIO</div>
        
        
         <div>
                <ul className='flex justify-center'>
                      <li>MEN</li>
                      <li>WOMEN</li>
                      <li>KIDS</li>
                      <li>BEAUTY</li>
                      <li>HOME & KITCHEN</li>
                </ul>
         </div>

      </div>

     </div>
    </>
  )
}

export default App
