import commonApi from "./commonAPI";
import serverURL from "./serverURL";

//Project proposal adding to the server
export const addProposalAPI = async(proposal)=>{
    return await commonApi(`${serverURL}/proposals`,"POST",proposal)
}

//propsal view
export const getProposalAPI = async(id)=>{
    return await commonApi(`${serverURL}/proposals/${id}`,"GET",{})
}

//update proposal
export const updatePoposalAPI = async(id,proposal)=>{
    return await commonApi(`${serverURL}/proposals/${id}`,"PUT",proposal)
}

//DELETE proposal
export const deleteProposalAPI = async(id)=>{
    return await commonApi(`${serverURL}/proposals/${id}`,"DELETE")
}

// allproposals view
export const getAllProposalAPI = async()=>{
    return await commonApi(`${serverURL}/proposals`,"GET")
}