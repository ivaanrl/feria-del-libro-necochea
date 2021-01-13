import { Flex, Text } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import NextLink from 'next/link';

export interface CategoryDescriptorProps {
  icon: ReactNode;
  title: string;
  description: string;
  route: string;
}

export const CategoryDescriptor: FC<CategoryDescriptorProps> = ({
  icon,
  title,
  description,
  route,
}) => {
  return (
    <NextLink href={route}>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        mx={{ base: '0px', xl: '50px' }}
        px={{ base: '0px', md: '30px', lg: '40px', xl: '50px' }}
        py="45px"
        borderRadius="10px"
        border="1px solid transparent"
        _hover={{
          backgroundColor: 'bg.light',
          cursor: 'pointer',
          border: '1px solid',
          borderColor: 'primary.main',
        }}
      >
        {icon}
        <Text
          color="text.main"
          fontSize="xl"
          fontWeight="600"
          my="10px"
          textAlign="center"
          maxWidth="200px"
        >
          {title}
        </Text>
        <Text color="text.light" maxWidth="200px" textAlign="center">
          {description}
        </Text>
      </Flex>
    </NextLink>
  );
};
