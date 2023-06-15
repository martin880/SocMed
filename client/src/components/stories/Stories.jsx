import { useContext } from "react";
import { Button, Flex, Image } from "@chakra-ui/react";
import { AuthContext } from "../../context/authContext";

const Stories = () => {

  const {currentUser} = useContext(AuthContext)

  //TEMPORARY
  const stories = [
    {
      id: 1,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 2,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 3,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
    {
      id: 4,
      name: "John Doe",
      img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    },
  ];

  return (
    <Flex display={'flex'} gap={'10px'} h={'180px'} marginBottom={'30px'}>
      <Flex flex={'1'} borderRadius={'10px'} overflow={'hidden'} position={'relative'}>
          <Image src={currentUser.profilePic} alt="" w={'100%'} h={'100%'} objectFit={'cover'} />
          <span style={{position:"absolute",bottom:'10px',left:"10px",color:"white",fontWeight:"normal"}}>{currentUser.name}</span>
          <Button size={'sm'} pos={'absolute'} bottom={'40px'} left={'10px'} color={'white'} colorScheme={'messenger'}
          border={'none'} borderRadius={'50%'} w={'20px'} cursor={'pointer'}
          fontSize={'30px'} display={'flex'} alignItems={'center'} justifyContent={'center'}>+</Button>
        </Flex>
      {stories.map(story=>(
        <Flex flex={'1'} borderRadius={'10px'} overflow={'hidden'} position={'relative'} key={story.id}>
          <Image src={story.img} alt="" w={'100%'} h={'100%'} objectFit={'cover'}/>
          <span style={{position:"absolute",bottom:'10px',left:"10px",color:"white",fontWeight:"normal"}}>{story.name}</span>
        </Flex>
      ))}
    </Flex>
  )
}

export default Stories