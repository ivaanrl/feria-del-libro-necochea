import { Box, Flex, GridItem, Img, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface StoryProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const Story: FC<StoryProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <Flex direction="column" width="fit-content" margin="auto" mb="80px">
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
    </Flex>
  );
};
