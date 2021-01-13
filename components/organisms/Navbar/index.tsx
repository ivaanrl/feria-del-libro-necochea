import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { MobileMenu } from '../MobileMenu';

export interface NavbarProps {}

export const Navbar: FC<NavbarProps> = () => {
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState<string>('/');
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, []);

  return (
    <Flex
      width="100%"
      px={{ base: '20px', xl: '30px' }}
      py="10px"
      position="fixed"
      justifyContent="flex-end"
      alignItems="center"
      zIndex="2"
    >
      <Box
        justifyContent="flex-end"
        fontWeight="bold"
        alignItems="center"
        display={{ base: 'none', lg: 'flex' }}
      >
        <NextLink href="/">
          <Text
            color={activeRoute === '/' ? 'primary.main' : 'text.inactive'}
            px="10px"
            _hover={{
              cursor: 'pointer',
              color: 'primary.main',
            }}
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
            _hover={{
              cursor: 'pointer',
              color: 'primary.main',
            }}
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
            textAlign="center"
            px="10px"
            lineHeight="20px"
            _hover={{
              cursor: 'pointer',
              color: 'primary.main',
            }}
          >
            Publicaciones y <br /> trabajos académicos
          </Text>
        </NextLink>
        <NextLink href="/">
          <Text
            color={activeRoute === '/libros' ? 'primary.main' : 'text.inactive'}
            px="10px"
            _hover={{
              cursor: 'pointer',
              color: 'primary.main',
            }}
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
            _hover={{
              cursor: 'pointer',
              color: 'primary.main',
            }}
          >
            Galería
          </Text>
        </NextLink>
      </Box>
      <IconButton
        aria-label="mobile menu toggle"
        backgroundColor="transparent"
        _hover={{
          backgroundColor: 'transparent',
        }}
        _focus={{
          outline: 'none',
        }}
        _active={{
          backgroundColor: 'transparent',
        }}
        display={{ base: 'block', lg: 'none' }}
        icon={
          showMobileMenu ? (
            <CloseIcon color="text.main" w="20px" h="20px" />
          ) : (
            <HamburgerIcon color="text.main" w="25px" h="25px" />
          )
        }
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        zIndex="3"
      />
      <AnimatePresence>
        {showMobileMenu && <MobileMenu activeRoute={activeRoute} />}
      </AnimatePresence>
    </Flex>
  );
};
