import { Row } from "antd";
import Story from "../Story/Story";
import { useSelector } from "react-redux";

function StoryList() {
    const stories = useSelector((state :any)=>state.stories)
    console.log('stories:-',stories);
    
    return(
        <div>
            <Row gutter={[48 , 32]}></Row>
            <Story/>
            <Story/>
        </div>
    )
}
export default StoryList;