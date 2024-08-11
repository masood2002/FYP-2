
// import React from 'react';
// import { Card, CardBody, CardFooter, ButtonGroup, Button, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

// function ProductCard({ product }) {
  

//   return (
//     <Card maxW={{ base: '100%', md: '60%', lg: '30%' }} rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
//       <CardBody
//         boxShadow={'sm'}
//         display={'flex'}
//         flexDir={'column'}
//         align={'center'}
//         justify={'center'}
//         alignItems={'center'}
//       >
//         {console.log(product)}
//         <Image
//           w={{ base: '40vw', md: '8vw' }}
//           src={product.photo.data} // Use the converted image URL
//           alt={product.name} // Use product's name for alt text
//           borderRadius="lg"
//           h={{ base: '40vh', md: '20vh' }}
//         />
//         <Stack mt="6" spacing="3">
//           <Heading size="md">{product.name}</Heading>
//           <Text>
//             {product.description} {/* Use product's description */}
//           </Text>
//           <Text color="red.500" fontWeight={"600"} fontSize="3xl">
//             ${product.price} {/* Use product's price */}
//           </Text>
//         </Stack>
//       </CardBody>
//       <Divider color={"red.500"} />
//       <CardFooter>
//         <ButtonGroup spacing="2">
//           <Link to={`/ProductPage/${product._id}`}> {/* Navigate to the specific product page */}
//             <Button variant="solid" colorScheme="red">
//               Buy now
//             </Button>
//           </Link>
//           <Button variant="ghost" colorScheme="red">
//             Add to cart
//           </Button>
//         </ButtonGroup>
//       </CardFooter>
//     </Card>
//   );
// }

// export default ProductCard;
import React from 'react';
import { Card, CardBody, CardFooter, ButtonGroup, Button, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function card({ product }) {

  


  return (
    <Card maxW={{ base: '100%', md: '60%', lg: '30%' }} rounded={20} boxShadow={'0px 4px 10px rgba(0, 0, 0, 0.1)'}>
      <CardBody
        boxShadow={'sm'}
        display={'flex'}
        flexDir={'column'}
        align={'center'}
        justify={'center'}
        alignItems={'center'}
      >
        <Image
          w={{ base: '40vw', md: '8vw' }}
          src={product.image} // Use the converted image URL
          alt={product.name} // Use product's name for alt text
          borderRadius="lg"
          h={{ base: '40vh', md: '20vh' }}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.name}</Heading>
          <Text>
            {product.description} {/* Use product's description */}
          </Text>
          <Text color="red.500" fontWeight={"600"} fontSize="3xl">
            ${product.price} {/* Use product's price */}
          </Text>
        </Stack>
      </CardBody>
      <Divider color={"red.500"} />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Link to={`/ProductPage/${product._id}`}> {/* Navigate to the specific product page */}
            <Button variant="solid" colorScheme="red">
              Buy now
            </Button>
          </Link>
          <Button variant="ghost" colorScheme="red">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default card;
