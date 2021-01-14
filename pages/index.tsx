import { GetStaticProps } from 'next';
import { Hero } from '../components/organisms';
import { CategoryDescriptors } from '../components/organisms/CategoryDescriptors';
import { firebaseAdmin } from '../firebaseAdmin';
import { firebase } from '../firebase';
import { HomepageStories } from '../components/organisms/HomepageStories';

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
  console.log(stories);
  return (
    <>
      <Hero />
      <CategoryDescriptors />
      <HomepageStories stories={stories} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const db = firebaseAdmin.database();

  const ref = db.ref('/news/');
  let stories: {
    [title: string]: {
      subtitle: string;
      imageUrl: string;
    };
  };

  ref.on('value', (snapshot) => {
    stories = snapshot.val();
  });

  const bucket = firebaseAdmin.storage().bucket();

  Object.keys(stories).forEach((n) => {
    const formattedName = n.replace(/ /g, '_').toLowerCase();
    const imageUrl = bucket
      .file('noticias/' + formattedName + '.jpeg')
      .publicUrl();

    stories[n].imageUrl = imageUrl;
  });

  return { props: { stories } };
};
