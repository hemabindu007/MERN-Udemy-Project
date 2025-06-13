import { fetchStories } from "../services/service";

 const getStories = ()=> async (dispatch:any)=>{
 try {
    const data = await fetchStories;
    dispatch({ type : "FETCH_ALL_STORIES",payload : data})
 } catch (error : any) {
    console.log(error.message);
 }
};
export default getStories;