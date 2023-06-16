import {Flex, Image, Text,Stack, VStack} from "@chakra-ui/react";

const RightBar = () => {
  return (
    <Flex className="rightBar" flex={'3'} display={'flex'} position={'sticky'} top={'50px'} h="calc(100vh - 50px)"
    overflow={'scroll'} bgColor={'#333'} sx={{ "&::-webkit-scrollbar": { display: "none" }}}>
      <Flex className="container" p={'20px'}>
        <Flex className="item" boxShadow={'lg'} p={'10px'} bgColor={"#222"}  display={'flex'} w={'100%'}>
          <Stack>
            <VStack>
              <Text style={{fontWeight:"normal", color:"lightgray"}}>Online Friends</Text>
              <Flex className="user" display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'} m={'20px'}>
                <Flex className="userInfo" display={'flex'} alignItems={'center'} gap={'20px'} pos={'relative'}>
                <Image
                    src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'}
                  />
                  <Flex className="online" w={'12px'} h={'12px'} borderRadius={'50%'}
                  bgColor={'limegreen'} pos={'absolute'} top={0} left={'30px'} />
                  <Text style={{fontWeight:"bold", color:"lightgray"}}>Netizen</Text>
                </Flex>
              </Flex>
              <Flex className="user" display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'} m={'20px'}>
                <Flex className="userInfo" display={'flex'} alignItems={'center'} gap={'20px'} pos={'relative'}>
                <Image
                    src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'}
                  />
                  <Flex className="online" w={'12px'} h={'12px'} borderRadius={'50%'}
                  bgColor={'limegreen'} pos={'absolute'} top={0} left={'30px'} />
                  <Text style={{fontWeight:"bold", color:"lightgray"}}>Netizen</Text>
                </Flex>
              </Flex>
              <Flex className="user" display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'} m={'20px'}>
                <Flex className="userInfo" display={'flex'} alignItems={'center'} gap={'20px'} pos={'relative'}>
                <Image
                    src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'}
                  />
                  <Flex className="online" w={'12px'} h={'12px'} borderRadius={'50%'}
                  bgColor={'limegreen'} pos={'absolute'} top={0} left={'30px'} />
                  <Text style={{fontWeight:"bold", color:"lightgray"}}>Netizen</Text>
                </Flex>
              </Flex>
              <Flex className="user" display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'} m={'20px'}>
                <Flex className="userInfo" display={'flex'} alignItems={'center'} gap={'20px'} pos={'relative'}>
                <Image
                    src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'}
                  />
                  <Flex className="online" w={'12px'} h={'12px'} borderRadius={'50%'}
                  bgColor={'limegreen'} pos={'absolute'} top={0} left={'30px'} />
                  <Text style={{fontWeight:"bold", color:"lightgray"}}>Netizen</Text>
                </Flex>
              </Flex>
              <Flex className="user" display={'flex'} alignItems={'flex-start'} justifyContent={'space-between'} m={'20px'}>
                <Flex className="userInfo" display={'flex'} alignItems={'center'} gap={'20px'} pos={'relative'}>
                <Image
                    src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt=""
                    w={'40px'} h={'40px'} borderRadius={'50%'} objectFit={'cover'}
                  />
                  <Flex className="online" w={'12px'} h={'12px'} borderRadius={'50%'}
                  bgColor={'limegreen'} pos={'absolute'} top={0} left={'30px'} />
                  <Text style={{fontWeight:"bold", color:"lightgray"}}>Netizen</Text>
                </Flex>
              </Flex>
            </VStack>
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RightBar;
