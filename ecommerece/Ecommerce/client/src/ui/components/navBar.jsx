import React from 'react';
import { Box, Flex, HStack, Img, Input, InputGroup } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { InputLeftElement } from '@chakra-ui/react';
import Logo from '../assets/images/logo_top_bar.png';
import { Link } from 'react-router-dom';
function navBar() {
  return (
    <Box py={5} px={20} as="nav" bg={'#080609'}>
      <Flex
        gap={3}
        flexWrap={'wrap'}
        alignItems={'center'}
        justify={{ base: 'center', md: 'space-between' }}
      >
        <Link to="/">
          {' '}
          <Img w="10rem" src={Logo} />
        </Link>
        <HStack
          align={'center'}
          textTransform={'uppercase'}
          letterSpacing={'0.5px'}
          fontWeight={'400'}
          justify={'space-between'}
          spacing={'1.8rem'}
          listStyleType={'none'}
          as={'ul'}
          color={'white'}
        >
          <Link to="/">
            <Box
              className=" active:scale-75 cursor-pointer transition-all ease-in duration-150"
              as={'li'}
            >
              Home
            </Box>
          </Link>
          <Link to={'/Shop'}>
            <Box
              className=" active:scale-75 cursor-pointer transition-all ease-in duration-150"
              as={'li'}
            >
              Shop
            </Box>
          </Link>
          <Box as={'li'}>
            <Menu>
              <MenuButton
                px={4}
                spacing={2}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
              >
                CATEGORIES <ChevronDownIcon fontSize={'20px'} />
              </MenuButton>
              <MenuList border={'gray'} bg={'gray.200'} p={2} color={'#afafaf'}>
                <MenuItem
                  _hover={{ bg: 'gray.300' }}
                  bg={'gray.200'}
                  color={'black'}
                >
                  Men's Clothig
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{ bg: 'gray.300' }}
                  bg={'gray.200'}
                  color={'black'}
                >
                  {' '}
                  Women's Clothing
                </MenuItem>
                <MenuDivider color={'black'} />
                <MenuItem
                  _hover={{ bg: 'gray.300' }}
                  bg={'gray.200'}
                  color={'black'}
                >
                  Child's Clothing
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
        <HStack align={'center'}>
          <InputGroup className="focus:outline-none" border={'none'}>
            <InputLeftElement
              // pointerEvents="none"
              color="white"
              fontSize="1.2em"
              className="focus:outline-none"
            >
              <i className="fa-solid fa-search"></i>
            </InputLeftElement>
            <Input
              borderBottom="2px solid white"
              borderTop={'none'}
              borderX={'none'}
              placeholder="Search Products"
              type="search"
              _focus={{ boxShadow: 'none' }}
              className="focus:outline-none focus:border-t-0 focus:border-x-0 focus:border-b-2 focus:border-b-white"
              color={'white'}
            />
          </InputGroup>
          <i className="text-[20px]  text-white fa-light fa-cart-shopping p-2 active:scale-75 cursor-pointer transition-all ease-in duration-150"></i>
          <i className="text-[20px] text-white  fa-light fa-heart p-2 active:scale-75 cursor-pointer transition-all ease-in duration-150"></i>

          <Menu>
            <MenuButton as={'Button'} rightIcon={<ChevronDownIcon />}>
              <i className="text-[20px] text-white  fa-light fa-user p-2 active:scale-75 cursor-pointer transition-all ease-in duration-150"></i>
            </MenuButton>
            <MenuList border={'gray'} bg={'gray.200'} p={2} color={'#afafaf'}>
              <MenuItem
                _hover={{ bg: 'gray.300' }}
                bg={'gray.200'}
                color={'black'}
              >
                Dashboard
              </MenuItem>
              <MenuDivider />
              <MenuItem
                _hover={{ bg: 'gray.300' }}
                bg={'gray.200'}
                color={'black'}
              >
                Account
              </MenuItem>
              <MenuDivider color={'black'} />
              <MenuItem
                _hover={{ bg: 'gray.300' }}
                bg={'gray.200'}
                color={'black'}
              >
                Cart
              </MenuItem>
              <MenuDivider color={'black'} />
              <Link to="/Signup">
              <MenuItem
                _hover={{ bg: 'gray.300' }}
                bg={'gray.200'}
                color={'black'}
              >
                Sign Out 
              </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}

export default navBar;
