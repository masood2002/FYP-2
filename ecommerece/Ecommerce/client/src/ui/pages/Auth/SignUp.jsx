import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import BGImg from '../../assets/images/Screenshot 2024-08-05 122640.png';
import NavBar from '../../components/navBar';
import Footer from '../../components/Footer';
import {
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
function SignUp() {
  return (
    <>
    <NavBar/>
      <Box
        h={'100vh'}
        zIndex={-10}
        bgImg={BGImg}
          //  bgGradient="linear(to-r, black, red)"
        bgPosition={'center'}
        bgRepeat={'repeat'}
        bgSize={'cover'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Flex
          rounded={20}
          p={8}
          color={'white'}
          backdropFilter={'blur(20px) brightness(200%)'}
          bg={"whiteAlpha.200"}
          justify={'center'}
          w={{base: '90%', md: '30%'}}
        >
          <Flex
            w={'100%'}
            justify={'center'}
            align={'center'}
            flexDir={'column'}
          >
            <Box my={5} textAlign={'center'}>
              <Text as={'h1'} fontSize={'5xl'} fontWeight={'500'}>
                Sign Up
              </Text>
            </Box>
            <FormControl my={5} w={'100%'}>
              <Box mb={8}>
                <FormLabel fontSize={'15px'} color={'white'}>
                  Enter Your Name
                </FormLabel>
                <Input placeholder="Your Name*" type="text" />
              </Box>
              <Box mb={8}>
              <FormLabel fontSize={'15px'} color={'white'}>
                Enter Your Email
              </FormLabel>
              <Input placeholder="Your Email*" type="email" />
              </Box>
              <Box mb={8}>
              <FormLabel fontSize={'15px'} color={'white'}>
                Enter Your Password
              </FormLabel>
              <Input placeholder="Your Password*" type="password" />
              </Box>
              <Button w={"100%"}>Register</Button>
              <Text mt={5}>Have An Account? <Link className='text-red-500' to={"/Login"}> Login</Link></Text>
            </FormControl>
          </Flex>
        </Flex>
      </Box>
      <Footer/>
    </>
  );
}

export default SignUp;
