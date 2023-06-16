import Friends from "../../assets/diversity.png";
import Groups from "../../assets/teamwork.png";
import Market from "../../assets/retail.png";
import Watch from "../../assets/multimedia.png";
import Memories from "../../assets/clock.png";
import Events from "../../assets/calendar.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/video-camera.png";
import Messages from "../../assets/new-email.png";
import Readings from "../../assets/stack-of-books.png";
import Youtube from "../../assets/youtube.png";
import Donations from "../../assets/donation.png";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import {Image, Flex, Stack, VStack} from "@chakra-ui/react";

const SideBar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
        <Flex flex={'2'} position={'sticky'} top={'50px'} bottom={'50px'}
        overflow={'scroll'} overflowY={'scroll'} sx={{"&::-webkit-scrollbar": { display: "none" }}} 
        bgColor={'#222'} color={'lightgray'} h="calc(100vh - 50px)">
        <Flex p={'20px'}>
          <Stack>
            <VStack>
            <Flex display={'flex'} flexDir={'column'} gap={'20px'}>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image
                  src={currentUser.profilePic}
                  alt=""
                  w={'30px'} h={'30px'} borderRadius={'50%'} objectFit={'cover'}
                />
                <span style={{fontSize:"14px", fontFamily:"sans-serif", color:"slategrey"}}>{currentUser.name}</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Friends} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Friends</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Groups} alt="" w={'30px'} />
                <span style={{fontSize:"12px"}}>Groups</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Market} alt=""  w={'30px'}/>
                <span style={{fontSize:"12px"}}>Marketplace</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Watch} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Watch</span>
              </Flex>    
            </Flex>
            <hr style={{mt:"20px", border:"none", height:"0.5px", backgroundColor:"gray"}}/>
            <Flex display={'flex'} flexDir={'column'} gap={'20px'}>
              <span style={{fontSize:"14px", fontFamily:"sans-serif", fontWeight:"bold"}}>Your shortcuts</span>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Events} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Events</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Messages} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Messages</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Gallery} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Gallery</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Memories} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Memories</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Videos} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Videos</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Gaming} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Gaming</span>
              </Flex>
            </Flex>
            <hr style={{mt:"20px", border:"none", height:"0.5px", backgroundColor:"gray"}}/>
            <Flex display={'flex'} flexDir={'column'} gap={'20px'}>
              <span style={{fontSize:"14px",fontFamily:"sans-serif", fontWeight:"bold"}}>Others</span>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Donations} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Donations</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Readings} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Readings</span>
              </Flex>
              <Flex display={'flex'} alignItems={'center'} gap={'10px'}>
                <Image src={Youtube} alt="" w={'30px'}/>
                <span style={{fontSize:"12px"}}>Youtube</span>
              </Flex>
            </Flex>
            </VStack>
          </Stack>
            </Flex>
        </Flex>
  );
};

export default SideBar;
