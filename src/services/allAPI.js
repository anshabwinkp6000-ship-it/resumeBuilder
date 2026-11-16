
import { apiService } from '../api/apiService'

// add resume
export const addResumeAPI = async (reqBody) => {
    return await apiService("POST", "/resumes", reqBody)
}

// get single resume
export const getResumeAPI = async (resumeId) => {
    return await apiService("GET", `/resumes/${resumeId}`, {})
}

// download API
export const downloadResumeAPI = async (reqBody) => {
    return await apiService("POST", "/history", reqBody)
}

// get history
export const getHistoryAPI = async () => {
    return await apiService("GET", "/history", {})
}

// delete history
export const dltHistoryAPI = async (id) => {
    return await apiService("DELETE", `/history/${id}`, {})
}

// update resume
export const UpdateResumeAPI = async (id, reqBody) => {
    return await apiService("PUT", `/resumes/${id}`, reqBody)
}
