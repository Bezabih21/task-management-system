import React, { useState , useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({modal, toggle, updateTask, taskObj}) => {
    const [personName,setPersonName] = useState('');
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [ date,setDate] = useState('')

        const handleChange = (e) => {

        const {name,value} = e.target
        if(name === "personName"){
             setPersonName(value)
        }else if (name=== "taskName"){
              setTaskName(value)
        }else if(name==="description"){
            setDescription(value)
        }else{
              setDate(value)
        }


       }
    useEffect(() => {
        setPersonName(taskObj.personName)
        setTaskName(taskObj.Name)
        setDescription(taskObj.description)
        setDate(taskObj.date)
    },[])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['personName'] = personName
        tempObj['Name'] = taskName
        tempObj['description'] = description
        tempObj['value'] = date
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Update Task</ModalHeader>
            <ModalBody>
            
                    <div className = "form-group">
                        <label>Person Name</label>
                        <input type="text" className = "form-control" value = {personName} onChange = {handleChange} name = "personName"/>
                    </div>
                    <div className = "form-group">
                        <label>task Name</label>
                        <input type="text" className = "form-control" value = {taskName} onChange = {handleChange} name = "taskName"/>
                    </div>
                    <div className = "form-group">
                        <label>Description</label>
                        <textarea rows = "5" className = "form-control" value = {description} onChange = {handleChange} name = "description"></textarea>
                    </div>
                           <br/> 
                    <div className='date'>
                         <h3 > set date:</h3>
                         <input type ="date" onChange={handleChange} name ="date"></input>
                         
                         
                  </div>
                
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={handleUpdate}>Update</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTaskPopup;