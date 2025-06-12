import { Layout } from "antd";
import StoryForm from "../StoryForm/StoryForm";
import StoryList from "../StoryList/StoryList";
import styles from "./Styles";
const {Sider ,Content} = Layout
function Home() {
    return(
        <div>
            <Layout >
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