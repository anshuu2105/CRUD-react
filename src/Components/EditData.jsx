import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function EditData(props) {
  const {id} = useParams();  

  const [stu, setStu] = useState({});
  const navigate = useNavigate()
  async function getData()
    {
        const d = await axios.get('https://642cb7d4bf8cbecdb4f5beaa.mockapi.io/api/v1/coerproject/'+id)
        console.log(d.data);
        setStu(d.data);
    }

    useEffect(function(){
        getData();
    },[]);

    async function HandlerUpdate()
    {
      console.log('testing')
      const d = await axios.put('https://642cb7d4bf8cbecdb4f5beaa.mockapi.io/api/v1/coerproject/'+id, stu)
      console.log(d);
      navigate('/')

    }
    return (
       <div className='row '>
        <h1>Edit here</h1>
        <div className='offset-3 shadow mt-3 p-3 col-sm-5'>
        
        <div class="mb-3">
          <label for="" class="form-label">Id {id}</label>
          
         
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Name</label>
          <input onChange={(e)=>setStu({...stu, name:e.target.value})} type="text" value={stu.name} class="form-control" id="" />
         
        </div>

        <div class="mb-3">
          <label for="" class="form-label">Mobile</label>
          <input onChange={(e)=>setStu({...stu, mobile:e.target.value})}  type="text" value={stu.mobile} class="form-control" id=""/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">City</label>
          <input onChange={(e)=>setStu({...stu, city:e.target.value})}  type="text" value={stu.city} class="form-control" id=""/>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Course</label>
          <input onChange={(e)=>setStu({...stu, course:e.target.value})}  type="text" value={stu.course} class="form-control" id=""/>
        </div>
        <button onClick={()=>HandlerUpdate()} type="submit" class="btn btn-primary">Submit</button>
      
        </div>
       </div>
    );
}

export default EditData;