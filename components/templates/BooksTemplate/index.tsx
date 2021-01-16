import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface BooksTemplateProps {
  title: string;
  search: (name: string) => void;
  books: [];
}

export const BookTemplate: FC<BooksTemplateProps> = ({
  title,
  search,
  books,
}) => {
  return (
    <Flex>
      <Box>
        <Text>{title}</Text>
        <Box />
      </Box>
    </Flex>
  );
};
