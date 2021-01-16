import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Book } from '../../organisms';

export interface BooksTemplateProps {
  title: string;
  search: (name: string) => void;
  books: {
    [title: string]: {
      author: string;
      year: number;
      image: string;
    };
  };
}

export const BooksTemplate: FC<BooksTemplateProps> = ({
  title,
  search,
  books,
}) => {
  return (
    <Flex pt="65px" px="50px" flexDirection="column">
      <Box>
        <Text fontSize="2xl" fontWeight="bold" color="text.main">
          {title}
        </Text>
        <Box
          width="45vw"
          height="4px"
          backgroundColor="primary.main"
          mt="10px"
        />
      </Box>
      <Box my="30px">
        <InputGroup width="40vw" borderRadius={9999} ml="20px">
          <InputLeftElement
            pointerEvents="none"
            children={
              <Icon
                as={AiOutlineSearch}
                w="100%"
                h="100%"
                color="text.light"
                ml="20px"
                padding="5px"
              />
            }
          />
          <Input
            placeholder="Buscar por título, autor, año o género"
            borderRadius={9999}
            borderRight="none"
            pl="50px"
            color="text.main"
            fontSize="lg"
          />
          <InputRightAddon
            borderRadius={9999}
            backgroundColor="primary.main"
            border="1px solid"
            borderColor="primary.main"
            _hover={{
              backgroundColor: 'primary.dark',
              color: 'text.main',
              borderColor: 'primary.dark',
            }}
            children={
              <Button
                backgroundColor="transparent"
                fontWeight="600"
                _hover={{
                  backgroundColor: 'transparent',
                }}
                _focus={{
                  outline: 'none',
                }}
                _active={{
                  backgroundColor: 'transparent',
                }}
              >
                Buscar
              </Button>
            }
          />
        </InputGroup>
      </Box>
      <Flex
        flexWrap="wrap"
        alignItems="center"
        justifyContent={{ base: 'center', sm: 'space-between' }}
      >
        {Object.keys(books).map((book) => {
          const { author, year, image } = books[book];

          return (
            <Book
              title={book}
              author={author}
              year={year}
              image={image}
              key={book}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};
