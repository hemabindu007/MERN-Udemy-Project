
import { Image,Typography, Layout } from 'antd'
import viLogo from './assets/react.svg'
import Home from './components/Home/Home'
import './App.css'
import styles from './styles'
const Title = Typography
const {Header , Footer} = Layout
function App() {

  return (
    <div>
     <Layout style={styles.layout}>
        <Header style={styles.header}>
          <Image style={styles.image} width="45"  src={viLogo}/>
          &nbsp;
          <Title style={styles.title}>Lite App</Title>
        </Header>
        <Home/>
        <Footer style={styles.footer}>2025 Lite App</Footer>
    </Layout>
    </div>
  )
}

export default App;