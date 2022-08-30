import React,{useEffect, useState} from 'react'

const Datatable = (tableData) => {
  const[items,setItems]=useState([])
// console.log(tableData);
//  console.log(JSON.parse(localStorage.getItem('inputList')))
useEffect(() => {
  const items = JSON.parse(localStorage.getItem('inputList'));
  if (items) {
    setItems(items);
  }
}, []);

  return (
    
    <>
  <div >Data-table</div>
  <table>
    <tr>
      <td>S.no.</td>
      <td>Role</td>
      <td>Name</td>
    </tr>
    <tr>
      <td></td>
      <td>{items.Role}</td>
      <td>{items.Name}</td>
    </tr>
    </table>

  {items &&
          items.map((singleService, index) => (

            <ul key={index}>
              <li>
                {singleService.Name && <span >{singleService.Name}</span>}
                <span className='value'>{singleService.Role && <span>{singleService.Role}</span>}</span>
              </li>
            </ul>

            
      
      
    


          ))}
          
    </>
  
 
  )
}

export default Datatable;