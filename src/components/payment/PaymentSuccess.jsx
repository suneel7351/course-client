import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

function PaymentSuccess() {
  const refNo = useSearchParams()[0].get('reference');
  return (
    <Container h={'90vh'} p="16">
      <Heading children="You have pro pack" my={'8'} textAlign="center" />
      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius="lg"
      >
        <Box
          w={'full'}
          bg="orange.400"
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'} children="Payment Success" />
        </Box>
        <Box p="4">
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text children="Congratulation you're a pro member.You have access to premium content." />

            <Heading size={'4xl'} children={<RiCheckboxCircleFill />} />
          </VStack>
        </Box>
        <Link to={'/profile'}>
          <Button variant={'ghost'}>Go to profile</Button>
          <Heading size={'xs'} children={`Reference : ${refNo}`} />
        </Link>
      </VStack>
    </Container>
  );
}

export default PaymentSuccess;
