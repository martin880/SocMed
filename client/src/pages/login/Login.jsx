import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
// import "./login.scss";
import {Box, Button, Flex, HStack, Heading, Input, Spacer, Stack, Text} from "@chakra-ui/react";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
  };

  return (
    // login
    <Flex minH={'100vh'} bgColor={'slategrey'} 
    display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Stack>
        <HStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
      {/* card */}
      <Box w={{base:"50%", md:"75%", sm:"100%"}} display={'flex'} m={2} boxShadow={'lg'}
      bgColor={'white'} borderRadius={'10px'} minH={'500px'} overflow={'hidden'}>
        {/* Left */}
            <Box flex={'1'} bgImage={"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
            bgSize={'cover'} p={'50px'} display={'flex'} flexDir={'column'} gap={'30px'} color={'white'}>
              <Heading fontSize={'50px'}>Martin Media</Heading>
              <Text as={'p'} fontFamily={'sans-serif'} fontSize={'md'}>
              This is a mini project for test selection held in Purwadhika. Created by Martin
              </Text>
              <Spacer/>
              <span style={{fontFamily:"sans-serif"}}>Don't you have an account?</span>
              <Link to="/register">
                <Button w={'100%'} cursor={'pointer'} colorScheme={'messenger'}>Register</Button>
              </Link>
            </Box>
            <Box flex={1} p={'50px'} display={'flex'} 
            flexDir={'column'} gap={'50px'} justifyContent={'center'} bgImage={'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}>
              <Heading display={'flex'} alignItems={'center'} justifyContent={'center'} color={'white'}>Login</Heading>
              <form style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                <Input type="text" placeholder="Username" color={'white'} variant={'flushed'} />
                <Input type="password" placeholder="Password" color={'white'} variant={'flushed'} />
                <Spacer p={12}/>
                <Button colorScheme="whatsapp" cursor={'pointer'} onClick={handleLogin}>Login</Button>
              </form>
            </Box>    
            </Box>
          </HStack>
        </Stack>
    </Flex>
  );
};

export default Login;
