import { Box, chakra, Flex, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

export interface BookInterface {
  title: string;
  author: string;
  year: number;
  image: string;
}

const MotionBox = chakra(motion.div);

export const Book: FC<BookInterface> = ({ title, author, year, image }) => {
  return (
    <MotionBox
      display="flex"
      flexDirection="column"
      padding="20px"
      borderRadius="10px"
      whileHover={{
        boxShadow: '10px 10px 38px -10px rgba(0,0,0,0.75)',
        cursor: 'pointer',
      }}
    >
      <Box height="250px" width="200px" mb="10px">
        <Img
          src={image}
          alt={`${title} book cover`}
          width="100%"
          height="100%"
        />
      </Box>
      <Text
        color="text.main"
        fontWeight="bold"
        fontSize="lg"
        maxWidth="200px"
        isTruncated
      >
        {title}
      </Text>
      <Text color="text.light" maxWidth="200px" isTruncated>
        {author}
      </Text>
      <Text color="text.light">{year}</Text>
    </MotionBox>
  );
};
