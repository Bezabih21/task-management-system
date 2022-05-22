import React, { useState  } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const CreateTaskPopUp = ({modal,toggle,save}) => {
      const [personName,setPersonName] = useState('');
      const [taskName, setTaskName] = useState('');
      const [description, setDescription] = useState('');
      const [ date,setDate] = useState('')
       console.log("Date",date);
       
        

       const handleChange = (e) =>{

             const {name,value} = e.target
             if(name === "personName"){
                  setPersonName(value)
             }else if (name=== "taskName"){
                   setTaskName(value)
             }else if(name=== "description"){
                 setDescription(value)
             }else{
                   setDate(value)
             }
             
            }
             
            
           const handleSave = () =>{
                 let taskObj = {}
                 taskObj["personName"] = personName
                 taskObj["Name"] = taskName
                 taskObj["description"] = description
                 taskObj["value"] = date
                 save(taskObj)
                   
                 toast('task is assign to new users')
                 
           }

           
                 
           const notify = ()=>{
 
            // Calling toast method by passing string
                
           }
           
             
          
return (

  <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>AddTask
        </ModalHeader>
        <ModalBody></ModalBody>
             <form>
                  <div className= "form-group">
                        <label> Person Name</label>  <br/> <br/> 
                        <input type="text" className="form-control"value={personName}onChange ={handleChange} name = "personName"  /> <br/> 
                        <label> Task Name</label>  <br/>  <br/>
                        <input type="text" className="form-control" value={taskName} onChange ={handleChange} name = "taskName" />  
                  </div> 
                      <br/>
                  <div className= "form-group">
                         <label>Task Description</label>   <br/>  <br/> 
                         <textarea rows="5"className="form-control"value={description} onChange ={handleChange} name ="description"> </textarea> 
                  </div>
                  <div className='date'>
                         <h1> Set Date</h1>
                         <input type ="date" onChange={handleChange} name ="date"></input>
                         
                  </div>
                  

             </form>
                     <br/>  <br/>  <br/>  <br/>  
             <ModalFooter>
                       <Button color="primary" onClick={handleSave}>Add</Button>{' '}
                      <Button color="secondary" onClick={toggle}>Cancel</Button>
             </ModalFooter>
              
    </Modal>
           
);
};

export default CreateTaskPopUp;