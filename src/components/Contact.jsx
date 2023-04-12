import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  return (
    <Container h="90vh">
      <VStack h={'full'} justifyContent={'center'} spacing="12">
        <Heading children="Contact Us" />
        <form style={{ width: '100%' }}>
          <Box marginY={'6'}>
            {' '}
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              placeholder="john doe"
              value={name}
              onChange={e => setName(e.target.value)}
              type="password"
              focusBorderColor="orange.600"
            />
          </Box>{' '}
          <Box>
            {' '}
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              placeholder="xyz@gmail.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="email"
              focusBorderColor="orange.600"
            />
          </Box>{' '}
          <Box marginY={'6'}>
            {' '}
            <FormLabel htmlFor="Message" children="Message" />
            <Textarea />
          </Box>{' '}
          <Button type="submit">Send Message</Button>
        </form>
      </VStack>
    </Container>
  );
}

export default Contact;
