import React, { useRef, useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { addProposalAPI } from '../services/allAPI'
import Swal from 'sweetalert2'

function ProjectForm() {

 const localtimedata = new Date()
//  console.log(localtimedata);
 const date = `${localtimedata.toLocaleDateString()}`
//  console.log(date);
 

const [input,setInput] = useState({
  username:"",
  mail:"",
  mobile:"",
  company:"",
  projectTitle:"",
  projectType:"",
  pDescription:"",
  techStack:[],
  budget:"",
  date: date
})

const [view,setView] = useState(false)

const [ids,setIds] = useState(null)

const navigate = useNavigate()

const tech = useRef()
//  console.log(input);
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
 

 const handleSubmit = async()=>{
  const {username,mail,projectTitle,projectType,techStack,budget} = input
  if (!username || !mail || !projectTitle || !projectType || techStack.length==0 || !budget) {
    Swal.fire({
              title: 'Error!',
              text: 'Please Fill the Remaining Fields',
              icon: 'error',
              confirmButtonText: 'OK'
            })
  }
  else{
    try{
       const result = await addProposalAPI(input)
       console.log(result);
       if (result.status == 201) {
         localStorage.setItem("submittedProposal",JSON.stringify(result.data))
          Swal.fire({
              title: 'Done',
              text: 'Project Proposal Recieved',
              icon: 'success',
              confirmButtonText: 'OK'
            })
          const {id} = result.data
          console.log(id);
          setIds(id)
          setView(true)
       }
    }
    catch(err){
      console.log(err);
    }
  }
 }

  const handleView = ()=>{
  navigate(`/projectview/${ids}/view`);
  }

  
  return (
    <div className=' p-5 ' style={{backgroundImage:"url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?cs=srgb&dl=pexels-fauxels-3183150.jpg&fm=jpg')",height:'100vh',backgroundSize:'cover',backgroundPosition:'cente'}}>
        <div id='project-form' style={{height:'90vh',width:'50%'}} className='d-flex align-items-center justify-content-center border shadow flex-column mx-5 rounded'>
          <h2 className='fw-bold'>PROJECT DETAILS</h2>
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
              <option value="Ec-ommerce">E-Commerce</option>
              <option value="UI/UX">UI/UX Design</option>
              <option value="API/Backend">API/Backend Development</option>
              <option value="CRM/ERP">CRM/ERP</option>
              <option value="Others">Others</option>
          </select>
          <textarea value={input.pDescription} onChange={e=>setInput({...input,pDescription:e.target.value})} className="form-control w-50 mt-3" placeholder="Project Description"></textarea>

          <div className='d-flex align-items-center justify-content-center' style={{width:'80%'}}><input ref={tech} className='form-control w-50 mt-3' type="text" placeholder='Tech Stack (eg: React)' />
          <button onClick={()=>addTech(tech.current.value.toUpperCase())} className='btn btn-primary mt-3 ms-2'>ADD</button>
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
            <button onClick={handleSubmit} className='btn btn-success'>SUBMIT</button>
              {
                view && 
                <button onClick={handleView} className='btn btn-warning ms-5'>VIEW</button>
              }
          </div>
          <div style={{marginLeft:'70%'}} ><Link to={'/allproposals'} className='fw-bold text-dark text-decoration-none'>CLIENT PROJECTS</Link></div>
        </div>
    </div>
  )
}

export default ProjectForm