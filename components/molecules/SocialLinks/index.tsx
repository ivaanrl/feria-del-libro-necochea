import { Flex, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { Link } from '@chakra-ui/react';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';

export interface SocialLinksProps {}

export const SocialLinks: FC<SocialLinksProps> = () => {
  return (
    <>
      <Link isExternal>
        <Icon as={AiFillFacebook} w={30} h={30} color="text.main" mx="15px" />
      </Link>
      <Link isExternal>
        <Icon as={AiOutlineTwitter} w={30} h={30} color="text.main" mx="15px" />
      </Link>
      <Link isExternal>
        <Icon as={AiFillInstagram} w={30} h={30} color="text.main" mx="15px" />
      </Link>
    </>
  );
};
