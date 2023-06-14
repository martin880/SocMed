import HouseIcon from '@mui/icons-material/House';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WidgetsIcon from '@mui/icons-material/Widgets';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import {Flex, Image, Input, Text} from "@chakra-ui/react";

const Navbar = () => {
  // const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    // Navbar
      <Flex display={'flex'} w={{base:"75%",sm:"100%"}} alignItems={'center'} justifyContent={'space-between'}
      p={'20px'} h={'50px'} borderBottom={'1px solid gray'} pos={'sticky'} top={0} bgColor={'white'} color={'gray.400'} zIndex={'999'}>
        {/* left */}
        <Flex display={'flex'} alignItems={'center'} gap={'20px'} cursor={'pointer'}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <span style={{fontWeight:"bold",fontSize:"20px",color:"darkblue"}}>Martin Media</span>
          </Link>
          <HouseIcon />
          {/* {darkMode ? (
            <WbSunnyIcon onClick={toggle} />
          ) : (
            <DarkModeIcon />
          )} */}
          <WidgetsIcon />
          {/* search bar */}
          <Flex display={'flex'} alignItems={'center'} justifyContent={'center'} gap={'20px'} border={'1px solid gray.600'}
          borderRadius={'5px'} p={'5px'}>
            <SearchOutlinedIcon />
            <Input type="text" placeholder="Search..." border={'none'} alignItems={'center'} justifyContent={'center'}
            w={{base:'50%', md:'500px', sm:'75%'}} bgColor={'transparent'}
            textColor={'gray.600'}/>
          </Flex>
        </Flex>
        {/* rigth */}
        <Flex display={{base:"flex", md:"flex-end", sm:"flex-end"}} alignItems={'center'} gap={'20px'}>
          <PersonIcon />
          <EmailIcon />
          <NotificationsActiveIcon />
          {/* user */}
          <Flex display={{base:"flex", md:"flex-end", sm:"flex-end"}} alignItems={'center'} gap={'10px'} fontSize={'sm'}
          fontWeight={'medium'} color={'slategrey'}>
            <Text style={{display:"flex", fontSize:"12px"}}>{currentUser.name}</Text>
            <Image display={{base:"flex", md:"flex-end", sm:"flex-end"}}
            w={{base:'30px', md:'30px', sm:"30px"}} h={'30px'} borderRadius={'50%'} objectFit={'cover'}
              src={currentUser.profilePic}
              alt=""
            />
          </Flex>
        </Flex>
      </Flex>
  );
};

export default Navbar;
