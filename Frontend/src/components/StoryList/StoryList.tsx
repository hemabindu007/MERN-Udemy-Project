import { Row } from "antd";
import Story from "../Story/Story";

function StoryList() {
    return(
        <div>
            <Row gutter={[48 , 32]}></Row>
            <Story/>
            <Story/>
        </div>
    )
}
export default StoryList;