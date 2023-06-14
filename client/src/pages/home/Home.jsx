import Stories from "../../components/stories/Stories"
import Posts from "../../components/posts/Posts"
import Share from "../../components/share/Share"
import "./home.scss"
import { Box } from "@chakra-ui/react"

const Home = () => {
  return (
    <Box className="home">
      <Stories/>
      <Share/>
      <Posts/>
    </Box>
  )
}

export default Home