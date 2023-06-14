import { Link } from "react-router-dom";
// import "./register.scss";
import { Box, Flex, HStack, Heading, Stack,Text, Spacer, Button, Input } from "@chakra-ui/react";

const Register = () => {
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
                <Input type="text" placeholder="Username" color={'white'} variant={'flushed'}/>
                <Input type="email" placeholder="Email" color={'white'} variant={'flushed'}/>
                <Input type="password" placeholder="Password" color={'white'} variant={'flushed'}/>
                <Input type="text" placeholder="Name" color={'white'} variant={'flushed'}/>
                <Spacer/>
                <Button colorScheme="whatsapp" cursor={'pointer'}>Register</Button>
              </form>
            </Box>
          </Box>
        </HStack>
      </Stack>
    </Flex>
  );
};

export default Register;
