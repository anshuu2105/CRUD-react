import axios from 'axios';
import React, { useState } from 'react';

function CreateData(props) {

  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [city, setCity] = useState('')
  const [course, setCourse] = useState('')
  async function HandlerSubmit()
  {

    console.log(name,mobile,city,course);
    const data = {name,mobile,city,course};
    console.log(data);

    const r = await axios.post('https://642cb7d4bf8cbecdb4f5beaa.mockapi.io/api/v1/coerproject', data)
    console.log(r);
  }
    return (
       <div className='row '>
        <h1>Create Here</h1>
        <div className='offset-3 shadow mt-3 p-3 col-sm-5'>
        
        <div class="mb-3">
          <label for="" class="form-label">Name</label>
          <input type="text" onChange={(e)=>setName(e.target.value)} class="form-control" id="" />
         
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Mobile</label>
          <input type="text" onChange={(e)=>setMobile(e.target.value)}  class="form-control" id=""/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">City</label>
          <input type="text" onChange={(e)=>setCity(e.target.value)}  class="form-control" id=""/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Course</label>
          <input type="text" onChange={(e)=>setCourse(e.target.value)}  class="form-control" id=""/>
        </div>


        
        <button type="submit" onClick={()=>HandlerSubmit()} class="btn btn-primary">Submit</button>
      
        </div>
       </div>
    );
}

export default CreateData;