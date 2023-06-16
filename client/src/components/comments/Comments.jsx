import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery,useMutation, useQueryClient } from 'react-query';
import { makeRequest } from "../../axios";
import moment from "moment";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

const Comments = ({postId}) => {

  const [desc, setDesc] = useState("");

  const { currentUser } = useContext(AuthContext);
  
  const { isLoading, error, data } = useQuery('comments', () =>
      makeRequest.get("/comments?postId=" + postId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();
  
  const mutation = useMutation((newComment) => {
    return makeRequest.post("/comments", newComment);
  }, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['comments']);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    mutation.mutate({desc, postId});
    setDesc("");
  };
  return (
    <Box className="comments">
      <Flex className="write" display={'flex'} alignItems={'center'} justifyContent={'space-between'}
      gap={'20px'} m={'20px'}>
        <Image src={currentUser.profilePic} alt="" w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'} />
        <Input type="text" placeholder="write a comment" flex={'5'} p={'10px'} border={'1px solid gray'} bgColor={'transparent'} color={'lightgray'}
         value={desc} onChange={(e) => setDesc(e.target.value)}/>
        <Button border={'none'} bgColor={'lightblue'} color={'white'} 
        p={'10px'} cursor={'pointer'} borderRadius={'3px'} onClick={handleClick}>Send</Button>
      </Flex>
      {isLoading ? "loading" : data.map((comment) => (
        <Flex className="comment" m={'30px 0px'} display={'flex'} justifyContent={'space-between'} gap={'20px'}>
          <Image src={comment.profilePic} alt="" w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'} />
          <Flex className="info" flex={'5'} display={'flex'} flexDir={'column'} gap={'3px'} alignItems={'flex-start'}>
            <span style={{fontWeight:"normal"}}>{comment.name}</span>
            <Text as={'p'} color={'lightgray'}>{comment.desc}</Text>
          </Flex>
          <span className="date" style={{flex:"1", alignSelf:"center", color:"gray",fontSize:"12px"}}>{moment(comment.createdAt).fromNow()}</span>
        </Flex>
      ))}
    </Box>
  );
};

export default Comments;
