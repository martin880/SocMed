import Img from "../../assets/image-files.png";
import Map from "../../assets/map2.png";
import Friend from "../../assets/user.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Flex, Input, Image, Button, Stack, VStack } from "@chakra-ui/react";
import { useMutation, useQueryClient} from 'react-query';
import { makeRequest } from "../../axios";

const Share = () => {

  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data
    } catch (error) {
      console.log(error);
    }
  };
  
  const {currentUser} = useContext(AuthContext);

  const queryClient = useQueryClient();
  
  const mutation = useMutation((newPost) => {
    return makeRequest.post("/posts", newPost);
  }, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['posts']);
    },
  });

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({desc, img: imgUrl});
    setDesc("");
    setFile(null);
  };

  return (
    <Flex boxShadow={'lg'} borderRadius={'20px'} bgColor={'#222'} color={'gray.200'} marginBottom={'20px'}>
          <Flex p={'20px'} w={'100%'}>
            <Stack display={'flex'} w={'100%'}>
              <VStack display={'flex'} alignItems={'start'} justifyContent={'start'}>
                <Flex gap={'20px'} w={'100%'}>
                    <Image
                      src={currentUser.profilePic}
                      alt=""
                      w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'}
                      />
                    <Input type="text" variant='flushed' placeholder={`What's on your mind ${currentUser.name}?`} display={'flex'}
                    border={'none'} outline={'none'} p={'10px'} bgColor={'transparent'} w={'250px'} color={'whitesmoke'} 
                    onChange={(e) => setDesc(e.target.value)} value={desc}/>
                  <Flex display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                    {file && <Image w={'200px'} src={URL.createObjectURL(file)}></Image>}
                  </Flex>
                </Flex>
              </VStack>
              <hr style={{margin:"20px", border:"none", height:"0.5px", backgroundColor:"whitesmoke"}}/>
              <VStack>
                <Flex display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
                  <Flex display={'flex'} alignItems={'center'} gap={'20px'}>
                    <Input type="file" id="file" style={{display:"none"}} onChange={(e) => setFile(e.target.files[0])}/>
                    <label htmlFor="file">
                      <Flex display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'}>
                        <Image src={Img} alt="" h={'20px'}/>
                        <span style={{fontSize:"12px", color:"gray"}}>Add Image</span>
                      </Flex>
                    </label>
                    <Flex display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'}>
                      <Image src={Map} alt="" h={'20px'}/>
                      <span style={{fontSize:"12px", color:"gray"}}>Add Place</span>
                    </Flex>
                    <Flex display={'flex'} alignItems={'center'} gap={'10px'} cursor={'pointer'}>
                      <Image src={Friend} alt="" h={'20px'}/>
                      <span style={{fontSize:"10px", color:"gray", marginRight:"4px"}}>Tag Friends</span>
                    </Flex>
                  </Flex>
                  <Flex>
                    <Button border={'none'} m={4} p={2} color={'white'} w={'full'} cursor={'pointer'}
                    colorScheme={'messenger'} borderRadius={'3px'} onClick={handleClick}>Share</Button>
                  </Flex>
                </Flex>
              </VStack>
            </Stack>
          </Flex>
    </Flex>
  );
};

export default Share;
