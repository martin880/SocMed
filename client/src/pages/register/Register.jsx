import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Box, Flex, HStack, Heading, Stack,Text, Spacer, Button, Input, useToast } from "@chakra-ui/react";

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:""
  });

  const [error, setError] = useState(null);

  const toast = useToast();

  const handleChange = (e) => {
    setInputs((prev) => ({...prev, [e.target.name] : e.target.value}));
  };

  const handleClick = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:2000/api/auth/register", inputs)
      toast({
        title:"User has been registered",
        status:"success",
        duration:4000,
        isClosable:false,
        position:"top"
      })
    } catch (error) {
      setError(error.response.data);
      toast({
        title:"User already exists",
        status:"error",
        duration:4000,
        isClosable:false,
        position:"top"
      })
    }
  }

  console.log(error);

  return (
    <Flex minH={'100vh'} bgColor={'slategrey'}
    display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Stack>
        <HStack display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box w={{base:"50%", md:"75%", sm:"100%"}} display={'flex'} m={2} boxShadow={'lg'}
            bgColor={'white'} borderRadius={'10px'} minH={'500px'} overflow={'hidden'}>
            <Box flex={'1'} bgImage={"https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
            bgSize={'cover'} p={'50px'} display={'flex'} flexDir={'column'} gap={'30px'} color={'white'}>
              <Heading fontSize={'50px'}>Martin Media</Heading>
              <Text as={'p'} fontFamily={'sans-serif'} fontSize={'md'}>
              This is a mini project for test selection held in Purwadhika. Created by Martin
              </Text>
              <Spacer/>
              <span style={{fontFamily:"sans-serif"}}>Don't you have an account?</span>
              <Link to="/login">
                <Button w={'100%'} cursor={'pointer'} colorScheme={'messenger'}>Login</Button>
              </Link>
            </Box>
            <Box flex={1} p={'50px'} display={'flex'} 
            flexDir={'column'} gap={'50px'} justifyContent={'center'} bgImage={'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}>
              <Heading display={'flex'} alignItems={'center'} justifyContent={'center'} color={'white'}>Register</Heading>
              <form style={{display:"flex", flexDirection:"column", gap:"30px"}}>
                <Input type="text" placeholder="Username" color={'white'} variant={'flushed'} name="username" onChange={handleChange}/>
                <Input type="email" placeholder="Email" color={'white'} variant={'flushed'} name="email" onChange={handleChange}/>
                <Input type="password" placeholder="Password" color={'white'} variant={'flushed'} name="password" onChange={handleChange}/>
                <Input type="text" placeholder="Name" color={'white'} variant={'flushed'} name="name" onChange={handleChange}/>
                <Spacer/>
                <Button colorScheme="whatsapp" cursor={'pointer'} onClick={handleClick}>Register</Button>
              </form>
            </Box>
          </Box>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default Register;
