import * as firebaseAdmin from 'firebase-admin';

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: process.env.private_key,
      clientEmail: process.env.client_email,
      //['project_id' as 'projectId']: process.env.project_id,
      project_id: process.env.project_id,
    } as any),
    databaseURL: `https://feriadellibronecochea-default-rtdb.firebaseio.com/`,
    storageBucket: 'feriadellibronecochea.appspot.com',
  });
}

export { firebaseAdmin };
