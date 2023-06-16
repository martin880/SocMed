import Post from "../post/Post";
import {Box} from "@chakra-ui/react";
import { useQuery } from 'react-query';
import { makeRequest } from "../../axios";


const Posts = () => {
  const { isLoading, error, data } = useQuery('posts', () =>
      makeRequest.get("/posts").then((res) => {
        return res.data;
      })
  )

  console.log(data);

  return <Box display={'flex'} flexDir={'column'} gap={'50px'}>
    {error ? "Upss something wrong !!" : (isLoading ? "loading" : data.map(post=>(
      <Post post={post} key={post.id}/>
    )))}
  </Box>;
};

export default Posts;
