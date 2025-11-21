import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { updatePoposalAPI } from '../services/allAPI';
import { CiCircleRemove } from "react-icons/ci";
import Swal from 'sweetalert2'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1000,
  Height: 800,
  bgcolor: 'background.paper',
  border: '3px solid #575757ff',
  boxShadow: 24,
  p: 4,
};

function Edit({input,setInput,afterRefresh}) {

  const [originalData, setOriginalData] = useState(null)

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
  setOriginalData(JSON.parse(JSON.stringify(input))); 
  setOpen(true);
   };

  // console.log(originalData);

  const handleClose = () => setOpen(false);

  const tech = useRef()
  
  const addTech = (stack)=>{
  if (input.techStack.includes(stack)) {
    alert("Stack is already Added!!!")
  }
  else if(!stack){
    alert("please fill the field!!!")
  }
  else{
    setInput({...input,techStack:[...input.techStack,stack]})
  }
  tech.current.value = ""
 }
  
 const removeTech = (stack)=>{
  setInput({...input,techStack:input.techStack.filter(item=>item!=stack)})
 }
  

 const handleUpdate = async ()=>{
    
     const noChange =
            originalData.username == input.username &&
            originalData.mail == input.mail &&
            originalData.mobile == input.mobile &&
            originalData.company == input.company &&
            originalData.projectTitle == input.projectTitle &&
            originalData.projectType == input.projectType &&
            originalData.pDescription == input.pDescription &&
            JSON.stringify(originalData.techStack) == JSON.stringify(input.techStack) &&
            originalData.budget == input.budget;


  if (noChange) {
    alert("Input not Changed!")
    return;
  }
    else{
        try{
        const result = await updatePoposalAPI(input.id,input)
        if (result.status == 200) {
            Swal.fire({
            title: 'Done',
            text: 'Proposal Updated',
            icon: 'success',
            confirmButtonText: 'OK'
          })
            afterRefresh()
            handleClose()
        }
        }
        catch(err){
            console.log(err);
        }
    }
 }

  return (
    <div>
      <button className='btn btn-warning' onClick={handleOpen} >EDIT <i className="fa-solid fa-pen-to-square"></i> </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id='project-form' style={{height:'90vh',width:'88%'}} className='d-flex align-items-center justify-content-center border shadow flex-column mx-5 rounded'>
          <input value={input.username} onChange={e=>setInput({...input,username:e.target.value})} className='form-control w-50 mt-3' type="text" placeholder='Enter Your Name' />
          <input value={input.mail} onChange={e=>setInput({...input,mail:e.target.value})} className='form-control w-50 mt-3' type="mail" placeholder='Email' />
          <input value={input.mobile} onChange={e=>setInput({...input,mobile:e.target.value})} className='form-control w-50 mt-3' type="text" placeholder='Mobile' />
          <input value={input.company} onChange={e=>setInput({...input,company:e.target.value})} className='form-control w-50 mt-3' type="text" placeholder='Company Name (optional)' />
          <input value={input.projectTitle} onChange={e=>setInput({...input,projectTitle:e.target.value.toUpperCase()})} className='form-control w-50 mt-3' type="text" placeholder='Project Title' />
          <select value={input.projectType} onChange={e=>setInput({...input,projectType:e.target.value})} className="form-select w-50 mt-3">
              <option value="">Select Project Type</option>
              <option value="Website">Website</option>
              <option value="Web Application">Web Application</option>
              <option value="Mobile App">Mobile App</option>
              <option value="E-commerce">E-Commerce</option>
              <option value="UI/UX">UI/UX Design</option>
              <option value="API/Backend">API/Backend Development</option>
              <option value="CRM/ERP">CRM/ERP</option>
              <option value="Others">Others</option>
          </select>
          <textarea value={input.pDescription} onChange={e=>setInput({...input,pDescription:e.target.value})} className="form-control w-50 mt-3" placeholder="Project Description"></textarea>

          <div className='d-flex align-items-center justify-content-center' style={{width:'83%'}}><input ref={tech} className='form-control w-50 mt-3' type="text" placeholder='Tech Stack (eg: React)' />
          <button onClick={()=>addTech(tech.current.value.toUpperCase())} className='btn btn-primary mt-3 ms-2'>ADD</button>
          </div>
           
          <div className='mt-3'>
            {
              input.techStack?.length>0?
                input.techStack?.map((stack,index)=>(
                  <button key={index} className='btn btn-secondary ms-1'>{stack} <CiCircleRemove onClick={()=>removeTech(stack)}/></button>
                ))
              :
               "no stacks added"
            }
          </div>

          <select value={input.budget} onChange={e=>setInput({...input,budget:e.target.value})} className="form-select w-50 mt-3">
              <option value="">Estimated Budget</option>
              <option value="10k-20k">10k-20k</option>
              <option value="20k-50k">20k-50k</option>
              <option value="50k-1L">50k-1L</option>
              <option value="1L-5L">1L-5L</option>
              <option value="5L+">5L+</option>
          </select>
          <div className='d-flex align-items-center justify-content-center mt-4'>
            <button onClick={handleUpdate} className='btn btn-success'>UPDATE</button>
          </div>
        </div>
        </Box>
      </Modal>
    </div>
  )
}

export default Edit
