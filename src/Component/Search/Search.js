import React from 'react';
import { useEffect , useState } from 'react'
import CurrentWeather from '../Currentweather/Current-weather';
import './search.css'

const Search = () => {
    const [data, setdata] = useState([])
const [final, setfinal] = useState("london");
const [search, setsearch] = useState('');


const getdata = (e) => {
    e.preventDefault();
     console.log(e.target.value);
     const x= e.target.value;
     setsearch(x);


}

const addData = (e) => {
    e.preventDefault();
  setfinal(search)
 
   }

useEffect(() => {
    getData()
   
},[final] )

const getData = async() => {
     try{  const xit = await  fetch(`https://mernweatherapp-backend.onrender.com/forcasts/`+ final)
         const yit = await xit.json();
          
     
    
     console.log(yit)
     setdata(yit)}
     catch(err)
     {

     }
    
 }
    return <div className='wrapper'>  



           
           <form  action='' className="d-flex justify-content-center form-container" onSubmit={addData}>               

<input  className="col-lg-3 px-md-5" type="text" name='email' onChange={getdata} placeholder="search"/>
&nbsp;&nbsp;&nbsp;
<button  className='btn'  style={{ background: "rgb(67, 185, 127)" }} type="submit">
Search
</button>
</form>

<CurrentWeather data={data}/>

    </div>;
}



export default Search;