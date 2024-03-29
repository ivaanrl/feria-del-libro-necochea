import { GetStaticProps } from 'next';
import { Hero } from '../components/organisms';
import { CategoryDescriptors } from '../components/organisms/CategoryDescriptors';
import { firebaseAdmin } from '../firebaseAdmin';
import { HomepageStories } from '../components/organisms/HomepageStories';
import { ListItem, OrderedList } from '@chakra-ui/react';

export default function Home({
  stories,
}: {
  stories: {
    [title: string]: {
      subtitle: string;
      imageUrl: string;
    };
  };
}) {
  return (
    <>
      <Hero />
      <CategoryDescriptors />
      <HomepageStories stories={stories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  console.log('aaaaaaaaaaaaaaaaa');
  const db = firebaseAdmin.database();

  const ref = db.ref('/news/');
  const bucket = firebaseAdmin.storage().bucket();
  let stories: {
    [title: string]: {
      subtitle: string;
      imageUrl: string;
    };
  };

  await ref.once('value', async (snapshot) => {
    stories = await snapshot.val();

    Object.keys(stories).forEach((n) => {
      const formattedName = n.replace(/ /g, '_').toLowerCase();
      const imageUrl = bucket
        .file('noticias/' + formattedName + '.jpeg')
        .publicUrl();

      stories[n].imageUrl = imageUrl;
    });
  });

  return { props: { stories: {} } };
};
