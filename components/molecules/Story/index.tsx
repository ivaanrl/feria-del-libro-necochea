import { Box, Flex, GridItem, Img, Text } from '@chakra-ui/react';
import { FC } from 'react';

export interface StoryProps {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export const Story: FC<StoryProps> = ({ title, subtitle, imageUrl }) => {
  return (
    <GridItem width="100%" height="100%">
      <Box height="100%" width="100%">
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
    </GridItem>
  );
};
