import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface BackgroundBookProps {}

export const BackgroundBook: FC<BackgroundBookProps> = () => {
  return (
    <Flex
      position="absolute"
      top="0"
      left="7%"
      mr="40px"
      height="80vh"
      width="30vw"
      minWidth="350px"
      backgroundColor="primary.main"
      alignItems="center"
      display={{ base: 'none', lg: 'block' }}
    >
      <Box position="absolute" top="0" height="70%" width="15%" right="15%">
        <svg viewBox="0 0 149 663" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 663V0H149V663L76.5777 583.05L0 663Z" fill="white" />
        </svg>
      </Box>
    </Flex>
  );
};
