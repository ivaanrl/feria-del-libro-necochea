import { Flex, Icon } from '@chakra-ui/react';
import { FC } from 'react';
import { FcKindle } from 'react-icons/fc';
import { BiBookBookmark } from 'react-icons/bi';
import { RiFilePaper2Fill } from 'react-icons/ri';
import { CategoryDescriptor } from '../../molecules';

export interface CategoryDescriptorsProps {}

const categories = [
  {
    title: 'Biblioteca Digital',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Icon as={FcKindle} color="primary.dark" w={20} h={20} />,
    route: '/biblioteca_digital',
  },
  {
    title: 'Libros para alquilar',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Icon as={BiBookBookmark} color="primary.dark" w={20} h={20} />,
    route: '/alquilar',
  },
  {
    title: 'Publicaciones y trabajos académicos',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    icon: <Icon as={RiFilePaper2Fill} color="primary.dark" w={20} h={20} />,
    route: '/publicaciones',
  },
];

export const CategoryDescriptors: FC<CategoryDescriptorsProps> = () => {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      justifyContent="center"
      margin="auto"
    >
      {categories.map(({ icon, title, description, route }) => (
        <CategoryDescriptor
          icon={icon}
          title={title}
          description={description}
          route={route}
        />
      ))}
    </Flex>
  );
};
