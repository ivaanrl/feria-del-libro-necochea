export const getRandomPlaceholder = () => { 
    const rndInt = Math.floor(Math.random() * 5);

    switch(rndInt){
        case 0:
            return 'https://firebasestorage.googleapis.com/v0/b/feriadellibronecochea.appspot.com/o/libros%2Fplaceholder.png?alt=media&token=5e1aa7b8-1108-4d42-ba5f-2bf394f44fc9'
        case 1: return 'https://firebasestorage.googleapis.com/v0/b/feriadellibronecochea.appspot.com/o/libros%2Fplaceholder4.png?alt=media&token=b1a68d8e-a6c9-41ef-a398-5b54a907c359'
        case 2: return 'https://firebasestorage.googleapis.com/v0/b/feriadellibronecochea.appspot.com/o/libros%2Fplaceholder5.png?alt=media&token=84a951e5-235a-4f0d-88bc-dd991d645bd4'
        case 3: return 'https://firebasestorage.googleapis.com/v0/b/feriadellibronecochea.appspot.com/o/libros%2Fplaceholder2.png?alt=media&token=f2e0332d-180a-4748-b22b-f9da50456876'
        case 4: return 'https://firebasestorage.googleapis.com/v0/b/feriadellibronecochea.appspot.com/o/libros%2Fplacehodler3.png?alt=media&token=b7b5f5d4-6de3-4800-921a-ee434cbbb6e0'
    }

}