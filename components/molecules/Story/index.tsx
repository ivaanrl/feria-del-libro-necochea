import { Box, chakra, Flex, GridItem, Img, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FC } from 'react';

export interface StoryProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const MotionBox = chakra(motion.div);

export const Story: FC<StoryProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <MotionBox
      display="flex"
      flexDirection="column"
      width="fit-content"
      margin="auto"
      mb="80px"
      padding="20px"
      borderRadius={20}
      whileHover={{
        borderRadius: '20px',
        boxShadow: '10px 10px 38px -10px rgba(0,0,0,0.75)',
        cursor: 'pointer',
      }}
    >
      <Box height="300px" width="100%" maxWidth="450px">
        <Img src={imageUrl} width="100%" height="100%" />
      </Box>
      <Text
        color="text.main"
        fontSize="2xl"
        fontWeight="bold"
        mt="15px"
        mb="5px"
      >
        {title}
      </Text>
      <Text color="text.light" fontSize="lg">
        {subtitle}
      </Text>
    </MotionBox>
  );
};
