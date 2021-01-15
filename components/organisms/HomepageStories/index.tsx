import { Box, Button, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { Story, StoryProps } from '../../molecules';

export interface HomepagStoriesProps {
  stories: {
    [title: string]: {
      subtitle: string;
      imageUrl: string;
    };
  };
}

export const HomepageStories: FC<HomepagStoriesProps> = ({ stories }) => {
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(1,1fr)',
          lg: 'repeat(2,1fr)',
          xl: 'repeat(3,1fr)',
        }}
        margin="auto"
        columnGap="30px"
        mt="100px"
        px="7%"
      >
        {Object.keys(stories).map((title) => {
          const { subtitle, imageUrl } = stories[title];
          return (
            <Story
              title={title}
              subtitle={subtitle}
              imageUrl={imageUrl}
              key={title}
            />
          );
        })}
      </Grid>
      <Box margin="auto" width="fit-content" mb="60px">
        <Button
          margin="auto"
          borderRadius={9999}
          backgroundColor="secondary.main"
          color="text.main"
          height="4rem"
          px="60px"
          fontSize="xl"
          _hover={{
            backgroundColor: 'secondary.light',
          }}
          _focus={{
            outline: 'none',
          }}
          _active={{
            backgroundColor: 'secondary.main',
          }}
        >
          Ver más
        </Button>
      </Box>
    </>
  );
};
