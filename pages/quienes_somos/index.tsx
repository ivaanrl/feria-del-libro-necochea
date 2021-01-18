import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const QuienesSomos = () => {
  return (
    <Box margin="auto" maxWidth={1280} pt="80px" px="40px">
      <Box mb="30px">
        <Text fontSize="3xl" fontWeight="bold" color="text.main">
          Quienes somos?
        </Text>
        <Box
          width="45vw"
          height="4px"
          backgroundColor="primary.main"
          mt="10px"
        />
      </Box>
      <Text
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        fontWeight="600"
        color="text.main"
        mb="30px"
      >
        La Feria del Libro y de las Artes comenzó a realizarse en Necochea en
        septiembre de 2002 y desde entonces ha tenido continuidad
        ininterrumpida. El objetivo es, poner en contacto a la gente de
        Necochea, con quienes producen cultura y enriquecer la mirada de todos
        con los aportes de artistas y escritores reconocidos. Han participado:
        Osvaldo Bayer, Carlos Aldalzabal, Sergio De Matteo, Lucía Gálvez,
        Eduardo Sacheri, Carlos Trillo, Ema Wolf, Liliana Hecker, Fernando
        Bravo, Inés Garland, Martín Kohan, Miguel Vitagliano, Jorge Monteleone,
        Cristina Piña, Adela Basch y hemos contado con el apoyo de escritores e
        investigadores necochenses, como Mercedes Yaben, Cecilia Secreto, María
        Inés Arrizabalaga, entre otros.
      </Text>
      <Image
        height={720}
        width={1280}
        src="/images/quienes_somos/entrance.jpeg"
      />
      <Text
        fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
        fontWeight="600"
        color="text.main"
        my="30px"
      >
        Además, participan editoriales independientes y las librerías locales.
        Con el fin de que esta actividad resulte un estimulo social sin
        limitaciones para toda la población la entrada es siempre libre y
        gratuita, de esta manera se busca que la Feria sea un espacio más de
        acceso al arte y la literatura.
      </Text>
    </Box>
  );
};

export default QuienesSomos;
