import React, { useEffect, useState } from 'react'
import { getAllProposalAPI} from '../services/allAPI'
import { Link } from 'react-router-dom'

function Allproposals() {
   const [getAll,setGetAll] = useState()

   useEffect(()=>{
    allproposals()
   },[])

   const allproposals = async()=>{
    try{
        const result = await getAllProposalAPI()
        console.log(result);
        if (result.status==200) {
            setGetAll(result.data)
        }
    }
    catch(err){
        console.log(err);
    }
    
   }

  return (
    <div id ='allproposal'>
            <h1 className='text-center text-black fw-bold'>CLIENT PROJECTS</h1>

        {
            getAll?.length>0?
            getAll?.map((proposal,index)=>(
                <div key={index} style={{height:"30%"}} className=' p-3 shadow border rounded mt-3 d-flex align-items-center justify-content-between text-dark bg-light'>
            <div>
                <h2 className='fw-bold '>{proposal?.projectTitle}</h2>
                <h3>{proposal?.username}</h3>
            </div>
            <div>
                <h5>{proposal?.date}</h5>
            </div>
        </div>
            ))
            :
            <div style={{height:'70vh'}} className='d-flex align-items-center justify-content-center flex-column'>
                <h4>Nothing to See Here !</h4>
                <Link to={'/'} className='btn btn-outline-light mt-2'>Go Back to Home</Link>
            </div>
        }
    </div>
  )
}

export default Allproposals