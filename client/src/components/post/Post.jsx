import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useContext, useState } from "react";
import moment from 'moment';
import {Flex, Image, Stack, Text, VStack} from "@chakra-ui/react";
import { useQuery, useQueryClient, useMutation } from 'react-query';
import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";

const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);

  const {currentUser} = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(['likes', post.id], () =>
  makeRequest.get("/likes?postId = " + post.id).then((res) => {
    return res.data;
  })
)

const queryClient = useQueryClient();
  
  const mutation = useMutation((liked) => {
    if(liked) return makeRequest.delete("/likes?postId = " + post.id);
    return makeRequest.post("/likes", {postId: post.id});
  }, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['likes']);
    },
  });

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  }

  return (
    <Flex boxShadow={'lg'} borderRadius={'20px'} bgColor={'#222'} color={'lightgrey'}>
      <Flex p={'20px'} w={'100%'}>
        <Stack display={'flex'} w={'100%'}>
            <Flex display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
              <Flex display={'flex'} gap={'20px'}>
                <Image src={post.profilePic} alt="" w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'}/>
                <Flex display={'flex'} flexDirection={'column'}>
                  <Link
                    to={`/profile/${post.userId}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <span style={{fontWeight:"bold"}}>{post.name}</span>
                  </Link>
                  <span style={{fontWeight:"12px"}}>{moment(post.createdAt).fromNow()}</span>
                </Flex>
              </Flex>
              <MoreHorizIcon />
            </Flex>
        <Flex m={'20px'}>
          <Stack w={'100%'}>
          <VStack display={'flex'} alignItems={'start'}>
            <Text as={'p'}>{post.desc}</Text>
          </VStack>
          <VStack display={'flex'} alignItems={'center'} justifyContent={'center'}>
            <Image src={"./upload/" + post.img} alt="" w={'100%'} maxH={'500px'} objectFit={'cover'} marginTop={'20px'} />
          </VStack>
          </Stack>
        </Flex>

        <Flex display={'flex'} alignItems={'center'} gap={'20px'}>
          <Flex display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'} fontSize={'14px'}>
            {isLoading ? "loading" : data.includes(currentUser.id) ? (<FavoriteOutlinedIcon onClick={handleLike} style={{color:"red"}}/>) : (<FavoriteBorderOutlinedIcon onClick={handleLike} />)}
            {data} Likes
          </Flex>
          <Flex display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'} fontSize={'14px'} onClick={() => setCommentOpen(!commentOpen)}>
            <TextsmsOutlinedIcon />
            12 Comments
          </Flex>
          <Flex display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'} fontSize={'14px'}>
            <ShareOutlinedIcon />
            Share
          </Flex>
        </Flex>
        {commentOpen && <Comments postId={post.id} />}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default Post;
