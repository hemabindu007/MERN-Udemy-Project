import { Layout } from "antd";
import StoryForm from "../StoryForm/StoryForm";
import StoryList from "../StoryList/StoryList";
import styles from "./Styles";
// import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import getStories from "../../actions/stories";

const {Sider ,Content} = Layout
function Home() {
    //  const dispatch = useDispatch()
     useEffect(() =>{
        // dispatch(getStories);
     },[])
    return(
        <div>
            <Layout style={{padding: "20px" , margin : "40px"}}>
                <Sider width={400} style={styles.sider}>
                    <StoryForm/>
                </Sider>
                <Content style={styles.content}>
                    <StoryList/>
                </Content>
            </Layout>
        </div>
    )
}
export default Home;