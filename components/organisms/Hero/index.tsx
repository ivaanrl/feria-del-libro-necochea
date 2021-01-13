import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BackgroundBook } from '../../molecules';

export interface HeroProps {}

export const Hero: FC<HeroProps> = () => {
  return (
    <Flex
      width="100%"
      height="100vh"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
    >
      <BackgroundBook />
      <Flex
        zIndex="1"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        pl="4%"
        pr="4%"
        mb="200px"
      >
        <Text
          display={{ base: 'none', lg: 'block' }}
          fontSize={{ base: '5xl', xl: '5xl', xxl: '6xl' }}
          color="text.main"
          fontWeight="bold"
        >
          Feria del Libro <br />y de las Artes
        </Text>

        <Text
          color="text.light"
          fontSize={{ base: 'xl', sm: '2xl', md: '3xl', lg: 'xl', xxl: '2xl' }}
          textAlign="center"
          maxWidth={{ base: '100%', lg: '55%' }}
          fontWeight="300"
          lineHeight="215%"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim et felis
          elit lacus dolor vitae. Mi ac vitae dignissim mauris adipiscing
          lobortis. Porttitor porta parturient mattis sed blandit amet est.
        </Text>
      </Flex>
      <Button
        position="absolute"
        bottom="30%"
        right={{ base: '5%', md: '4%' }}
        width={{ base: '90%', md: 'auto' }}
        backgroundColor="secondary.main"
        color="text.main"
        borderRadius={9999}
        height="3rem"
        px="50px"
        alignSelf="flex-end"
        fontSize="xl"
        _hover={{
          backgroundColor: 'secondary.light',
        }}
        _focus={{
          outline: 'none',
        }}
        _active={{
          backgroundColor: 'secondary.main',
        }}
      >
        Ver más
      </Button>
    </Flex>
  );
};
