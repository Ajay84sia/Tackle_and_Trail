import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    HStack,
  } from '@chakra-ui/react';
  

  
  export default function MyCard({image , title , price , mrp ,save}) {
    return (
      <Center py={12}>
        <Box
        height={"480px"}
          role={'group'}
          p={6}
          minW={"330px"}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
        //   boxShadow={'2xl'}
        //   rounded={'lg'}
          pos={'relative'}
          _hover={{boxShadow:'2xl'}}
          cursor="pointer"
          style={{borderTop:"1px solid lightgrey"}}
          zIndex={1}>
            
          <Box
            rounded={'lg'}
            // mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
              
            />
          </Box>
          <Stack pt={10} align={'center'} >
            {/* <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
              {title}
            </Text> */}
            <Text color={"black"} textTransform={'uppercase'} fontSize={'lg'} fontWeight="semibold" fontFamily={'body'}>
            {title}
            </Text>
            <Stack spacing={1} direction={'column'} align={'center'}>
            <Text fontSize={'md'} fontWeight="semibold" color={'#B84D00'}>
                    {save}
              </Text>
                <Text fontSize={'md'} fontWeight="semibold">
                    Sale {price}
                </Text>
              <Text fontSize={'md'} fontWeight="semibold" color={'gray.600'}>
                    Orig. {mrp}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }