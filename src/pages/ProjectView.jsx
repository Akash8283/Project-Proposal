import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteProposalAPI, getProposalAPI } from "../services/allAPI";
import Edit from "../components/Edit";
import Swal from 'sweetalert2'
import { MdHome } from "react-icons/md";

function ProjectList() {
  const { id } = useParams();
  const [list, setList] = useState({});

  const navigate = useNavigate() 

  // test comment
  useEffect(() => {
    getProposalDetails();
  }, []);

  const getProposalDetails = async () => {
    try {
      const result = await getProposalAPI(id);
      // console.log(result);
      if (result.status == 200) {
        setList(result.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
   
  const deleteProposal = async(id)=>{
     if (confirm("Are you sure you want to delete the Proposal")) {
      try{
        await deleteProposalAPI(id)
        Swal.fire({
             title: 'Done',
             text: 'Proposal Deleted',
             icon: 'success',
             confirmButtonText: 'OK'
        })
        setTimeout(()=>{
          navigate('/')
        },2000)
        
     }
     catch(err){
      console.log(err);
     }
     }
  }

  return (
    <div
      className="container d-flex align-items-center justify-content-center border my-5 py-5 bg-secondary shadow rounded flex-column"
      style={{ height: "90vh" }}
    >
      <div style={{ height: "70vh" }} className="container d-flex align-items-start justify-content-center flex-column border m-5 py-5 bg-light shadow rounded ">
        <h3 className="fw-bold">PROJECT : {list.projectTitle}</h3>
        <hr className="border border-dark border-1 w-100"/>
        <h3 className="mt-2">TYPE : {list.projectType}</h3>
        <h3 className="mt-2 d-inline">DESCRIPTION </h3><span className="fs-5">{list.pDescription}</span>
        <h3 className="mt-2">STACKS : {list.techStack?.map((item,index)=>(
          <button key={index} className="btn btn-secondary ms-2">{item} </button>
        ))}</h3>
        <h3 className="mt-2">BUDGET : {list.budget}</h3>
        <hr className="border border-dark border-1 w-100"/>
        <div className="d-flex">
          <Edit input={list} setInput={setList} afterRefresh={getProposalDetails}/>
          <button onClick={()=>deleteProposal(list.id)} className="btn btn-danger ms-3">
              DELETE <i className="fa-solid fa-trash "></i>
          </button>
        </div>
      </div>
      <div>
        <Link to={'/'} className="btn btn-outline-light"> <MdHome className="mb-1"/> Back to Home</Link>
      </div>
    </div>
  );
}

export default ProjectList;
 