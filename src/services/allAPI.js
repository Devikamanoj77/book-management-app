
import commonAPI from './commonAPI'
import SERVERURL from './serverURL'
// uploadBookAPI - called add Component

export const saveBookAPI = async (bookDetails)=>{
    return await commonAPI("POST",`${SERVERURL}/uploadBooks`,bookDetails)
}

// getAllBooksAPI - get http reqst

export const getAllBooksAPI = async ()=>{
    return await commonAPI("GET",`${SERVERURL}/uploadBooks`,"")
}

// removeBookAPI - delete http reqst
export const removeBookAPI = async (id)=>{
    return await commonAPI("DELETE",`${SERVERURL}/uploadBooks/${id}`,{})
}

// updateBookAPI - PUT reqst
export const updateBookAPI = async (updateDetails)=>{
    return await commonAPI("PUT",`${SERVERURL}/uploadBooks/${updateDetails?.id}`,updateDetails)
}
