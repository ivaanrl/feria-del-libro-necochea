import { Grid, GridItem } from '@chakra-ui/react';
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
    <Grid
      templateColumns={{
        base: '1fr',
        lg: 'repeat(2,1fr)',
        xl: 'repeat(3,1fr)',
      }}
      maxWidth="1440px"
      margin="auto"
      templateRows="300px 100px 200px"
      columnGap="30px"
      mt="100px"
      px="20px"
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
  );
};
