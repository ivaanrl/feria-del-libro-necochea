import { BooksTemplate } from '../../components/templates';
import { GetStaticProps } from 'next';
import { firebaseAdmin } from '../../firebaseAdmin';

export interface LibroParaAlquilar {
    [title: string]: {
        author: string;
        'Año': string;
        editorial: string;
      };
}

const mockupBooks = {
  'El duelo': {
    author: 'Gabriel Rolón',
    year: 2020,
    image:
      'https://images.unsplash.com/photo-1610053012491-24cf866090c5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  },
  'Lorem ipsum dolor sit amet': {
    author: 'Consectetur Adipiscing',
    year: 2018,
    image:
      'https://images.unsplash.com/photo-1609660863703-276e601b4b2b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  },
  'Aenean ornare scelerisque': {
    author: ' Sed consequat',
    year: 2010,
    image:
      'https://images.unsplash.com/photo-1608133854470-ff251d3666c7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  },
  ' Class aptent': {
    author: 'Aaptent',
    year: 2015,
    image:
      'https://images.unsplash.com/photo-1608103870856-1f4b9a997a0b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  },
  'Dolor Sit Amet': {
    author: 'Gabriel Rolón',
    year: 2020,
    image:
      'https://images.unsplash.com/photo-1609485191522-748aa65d6965?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  },
  'Amet Lorem ipsum dolor sit': {
    author: 'Consectetur Adipiscing',
    year: 2018,
    image:
      'https://images.unsplash.com/photo-1608506362775-360a48e692d9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  },
  'Sscelerisque aenean ornare ': {
    author: ' Sed consequat',
    year: 2010,
    image:
      'https://images.unsplash.com/photo-1608249398937-cdf36ed4b808?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  },
  'Aptent Class': {
    author: 'Aaptent',
    year: 2015,
    image:
      'https://images.unsplash.com/photo-1608453908394-f48474d01c23?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
  },
};

const BibliotecaDigital = ({books } : any) => {
  const search = (name: string) => {};

  return (<BooksTemplate
    title="Catálogo Digital"
    search={search}
    books={books}
  />
    
  );
};

export default BibliotecaDigital;


export const getStaticProps: GetStaticProps = async () => {
    const db = firebaseAdmin.database();
  
    const ref = db.ref('/libros_para_alquilar/');
    const bucket = firebaseAdmin.storage().bucket();
    let books: {
      [title: string]: {
        author: string;
        'Año': string;
        editorial: string;
        image: string;
      };
    };

  
    await ref.once('value', async (snapshot) => {
      books = await snapshot.val();
      Object.keys(books).forEach(async (n) => {
        const removeSpaces = n.replace(/ /g, '_').toLowerCase();
        const formattedName = removeSpaces.replace(/[$!.?,:]/g, '');

        const imageUrl = bucket
          .file('libros/' + formattedName + '.png')
          .publicUrl();

        books[n].image = imageUrl;
      });
    });

    //console.log(ref.ref);
    //console.log("books: ", books);
  
    return { props: { books } };
  };
