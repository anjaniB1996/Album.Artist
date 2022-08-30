import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



 
function Addmoreinput() {
  const navigate = useNavigate();
  const [inputList, setinputList]= useState([{Role:'', Name:''}]);
const [check, setCheck] = useState('')

  const handleinputchange=(e, index)=>{
    const {name, value}= e.target;
    const list= [...inputList];
    list[index][name]= value;
    // console.log(list);
    setinputList(list);
    setCheck(list);

  }
  
  const handleremove= index=>{
    const list=[...inputList];
    list.splice(index,1);
    setinputList(list);
    setCheck(list);
  }
 
  const handleaddclick=()=>{ 
    setinputList([...inputList, { Role:'', Name:''}]);
  }
  const submit=()=>{
      // this.datasubmission(inputList);
      console.log(check,"jdfhj");
      navigate('/data-table');
     
      localStorage.setItem("inputList",JSON.stringify(inputList));           
  }
  return (
    <div className="container">
        <div className="row">
        <div className="col-sm-12">
         <h5 className="mt-3 mb-4 fw-bold">Album Artist</h5>
            
            { 
            inputList.map( (x,i)=>{
              return(
              <div className="row mb-3" key={i}>
                 <div className="form-group col-md-4">
                 <label >Role</label>
                  <input type="text"  name="Role" className="form-control"  placeholder="Role" onChange={ e=>handleinputchange(e,i)} />
               </div>
               <div className="form-group col-md-4">
               <label > Name</label>
                  <input type="text"  name="Name" className="form-control"   placeholder="Enter the Name" onChange={ e=>handleinputchange(e,i) }/>
               </div>
               <div className="form-group col-md-2 mt-4">
               
               {
                  inputList.length!==1 &&
                  <button  className="btn btn-danger mx-1" onClick={()=> handleremove(i)} style={{marginBottom: 10}}>X</button>
               }
               
               {/* { inputList.length-1===i &&
               <button  className="btn btn-success" >Add More</button>
               } */}
              </div>
               { inputList.length-1===i &&
                <div>
                <button onClick={ handleaddclick} className="btn ms-2" style={{width:"10vw",color:"white", backgroundColor:"purple"}}>ADD MORE</button>
                <button onClick={submit} className="outline-none ms-4 mt-2 border-0" style={{width:"10vw",borderRadius:"7px" ,padding:"7.5px 0",color:"white", backgroundColor:"purple"}}>Submit</button>
                </div>
               }

            </div>
          
              );
             } )} 
       </div>
     </div>
    </div>
  );
}
export default Addmoreinput;





