const storyReducer = (state = [], action : any)=>{
    switch (action.type) {
        case "FETCH_ALL_STORIES":
            return action.payload
        case "CREATE_STORY":
            return state;
        default:
            return state;
    }
}
export default storyReducer;