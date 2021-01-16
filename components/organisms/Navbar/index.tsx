import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  chakra,
  Flex,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Text,
  useTheme,
} from '@chakra-ui/react';
import {
  AnimatePresence,
  motion,
  useTransform,
  useViewportScroll,
} from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect, useState, useMemo } from 'react';
import { MobileMenu } from '../MobileMenu';

export interface NavbarProps {}

const MotionBox = chakra(motion.div);

export const Navbar: FC<NavbarProps> = () => {
  const theme = useTheme();
  const router = useRouter();
  const [activeRoute, setActiveRoute] = useState<string>('/');
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  useEffect(() => {
    yRange.onChange((v) => {
      setHasScrolled(v > 0.1);
    });
  }, [yRange]);

  const sameWidthPopperModifier = useMemo(
    () => ({
      name: 'sameWidth',
      enabled: true,
      phase: 'beforeWrite' as 'beforeWrite',
      requires: ['computeStyles'],
      fn: ({ state }: any) => {
        state.styles.popper.width = `${state.rects.reference.width + 40}px`;
      },
      effect: ({ state }: any) => () => {
        state.elements.popper.style.width = `${
          state.elements.reference.offsetWidth + 40
        }px`;
      },
    }),
    [],
  );

  useEffect(() => {
    setActiveRoute(router.pathname);
  }, []);

  return (
    <MotionBox
      display="flex"
      width="100%"
      px={{ base: '20px', xl: '30px' }}
      py="10px"
      position="fixed"
      justifyContent="flex-end"
      alignItems="center"
      zIndex="2"
      animate={{
        backgroundColor: hasScrolled ? theme.colors.bg.light : 'rgba(0,0,0,0)',
        transition: {
          duration: 0.3,
        },
      }}
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
        <Popover trigger="hover" placement="bottom-start">
          <PopoverTrigger>
            <Text
              color={
                activeRoute === '/libros' ? 'primary.main' : 'text.inactive'
              }
              px="10px"
              _hover={{
                cursor: 'pointer',
                color: 'primary.main',
              }}
            >
              Libros
            </Text>
          </PopoverTrigger>
          <PopoverContent
            width="fit-content"
            backgroundColor="bg.light"
            border="none"
          >
            <NextLink href="/biblioteca_digital">
              <Text
                px="10px"
                py="6px"
                whiteSpace="nowrap"
                color="text.main"
                _hover={{
                  color: 'primary.main',
                  cursor: 'pointer',
                }}
              >
                Biblioteca digital
              </Text>
            </NextLink>
            <NextLink href="/libros_para_alquilar">
              <Text
                px="10px"
                py="6px"
                whiteSpace="nowrap"
                color="text.main"
                _hover={{
                  color: 'primary.main',
                  cursor: 'pointer',
                }}
              >
                Libros para alquilar
              </Text>
            </NextLink>
          </PopoverContent>
        </Popover>
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
    </MotionBox>
  );
};
