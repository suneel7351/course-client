import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { url } from '../../redux/store';
import Subscription from '../../redux/actions/subscription';
import toast from 'react-hot-toast';

function Enroll({ user }) {
  const [key, setKey] = useState('');
  const dispatch = useDispatch();
  const { subscriptionId, error, loading } = useSelector(state => state.enroll);

  const enrollHandler = async () => {
    const {
      data: { key },
    } = await axios.get(`${url}/api/v3/getkeyid`);
    setKey(key);

    dispatch(Subscription.enrollCourse());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      const popUp = () => {
        const options = {
          key, // Enter the Key ID generated from the Dashboard
          // amount: '50000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          // currency: 'INR',
          name: 'Acme Corp', //your business name
          description: 'Test Transaction',
          image: 'https://example.com/your_logo',
          subscription_id: subscriptionId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          callback_url: `${url}/api/v3/verify`,
          prefill: {
            name: user && user.name, //your customer's name
            email: user && user.email,
          },
          notes: {
            address: 'Razorpay Corporate Office',
          },
          theme: {
            color: '#3399cc',
          },
        };
        const razor = new window.Razorpay(options);
        razor.open();
      };
      popUp();
    }
  }, [error, dispatch, key, subscriptionId, user]);
  return (
    <Container h="95vh" p={'12'}>
      <Heading children="Welcome" my={'8'} textAlign="center" />
      <VStack
        boxShadow={'lg'}
        alignItems="stretch"
        borderRadius={'lg'}
        spacing="0"
      >
        <Box bg={'orange.400'} p="4" css={{ borderRadius: '8px 8px 0 0' }}>
          <Text children={`Pro Pack - $9`} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px="8" mt={'4'} spacing="8">
            <Text children="Join Pro pack and get access to all content." />
            <Heading size={'md'} children={'$9 only'} />
          </VStack>
          <Button
            my={'8'}
            w="full"
            colorScheme={'orange'}
            onClick={enrollHandler}
          >
            Buy Now
          </Button>
        </Box>{' '}
        <Box bg={'blackAlpha.600'} p="4" css={{ borderRadius: '0 0 8px 8px' }}>
          <Heading
            color={'white'}
            size={'sm'}
            children={'100% refund at cacellation'}
          />
          <Text
            children={'*Term & Conditions Apply'}
            size="xs"
            color={'white'}
          />
        </Box>
      </VStack>
    </Container>
  );
}

export default Enroll;
