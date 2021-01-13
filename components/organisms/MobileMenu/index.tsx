import { chakra, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';
import NextLink from 'next/link';
import { SocialLinks } from '../../molecules';

export interface MobileMenuProps {
  activeRoute: string;
}

const MotionBox = chakra(motion.div);

const mobileMenuVariants = {
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
  hidden: {
    x: 1000,
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export const MobileMenu: FC<MobileMenuProps> = ({ activeRoute }) => {
  return (
    <MotionBox
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      minHeight="100vh"
      backgroundColor="bg.main"
      variants={mobileMenuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      display="flex"
      flexDirection="column"
      py="100px"
    >
      <Flex flexDirection="column" mt="30px">
        <NextLink href="/">
          <Text
            color={activeRoute === '/' ? 'primary.main' : 'text.inactive'}
            px="10px"
            py="15px"
            fontSize="lg"
            fontWeight="bold"
            _hover={{
              cursor: 'pointer',
            }}
            textAlign="center"
          >
            Inicio
          </Text>
        </NextLink>
        <NextLink href="/quienes_somos">
          <Text
            color={
              activeRoute === '/quienes_somos'
                ? 'primary.main'
                : 'text.inactive'
            }
            px="10px"
            py="15px"
            fontSize="lg"
            fontWeight="bold"
            _hover={{
              cursor: 'pointer',
            }}
            textAlign="center"
          >
            Quiénes somos?
          </Text>
        </NextLink>
        <NextLink href="/publicaciones">
          <Text
            color={
              activeRoute === '/publicaciones'
                ? 'primary.main'
                : 'text.inactive'
            }
            px="10px"
            py="15px"
            fontSize="lg"
            fontWeight="bold"
            _hover={{
              cursor: 'pointer',
            }}
            textAlign="center"
          >
            Publicaciones y trabajos académicos
          </Text>
        </NextLink>
        <NextLink href="/">
          <Text
            color={activeRoute === '/libros' ? 'primary.main' : 'text.inactive'}
            px="10px"
            py="15px"
            fontSize="lg"
            fontWeight="bold"
            _hover={{
              cursor: 'pointer',
            }}
            textAlign="center"
          >
            Libros
          </Text>
        </NextLink>
        <NextLink href="/galeria">
          <Text
            color={
              activeRoute === '/galeria' ? 'primary.main' : 'text.inactive'
            }
            px="10px"
            py="15px"
            fontSize="lg"
            fontWeight="bold"
            _hover={{
              cursor: 'pointer',
            }}
            textAlign="center"
          >
            Galería
          </Text>
        </NextLink>
      </Flex>
      <Flex width="100%" alignItems="center" justifyContent="center" mt="120px">
        <SocialLinks />
      </Flex>
    </MotionBox>
  );
};
