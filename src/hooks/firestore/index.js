import { db } from "../../firebase"

export const fetchCollectionOnce = async ({ collection, queryParams, key }) => {
  let data = [];
  let query = db.collection(collection);

  Object.keys(queryParams).forEach(key => {
    const value = queryParams[key];
    if (value) {
      return query = query.where(key, '==', value);
    }
  })

  const snapshot = await query.orderBy('createdAt', 'desc').get();
  snapshot.forEach(doc => data.push({ id: doc.id, ...doc.data() }));
  return data;
}

export const listenToCollection = async ({ collection, queryParams, dispatch, type, key }) => {
  let query = db.collection(collection);

  Object.keys(queryParams).forEach(key => {
    const value = queryParams[key];
    if (value) {
      return query = query.where(key, '==', value);
    }
  })

  query.orderBy('createdAt', 'desc').onSnapshot(snapshot => {
    const data = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })
    return dispatch({
      type,
      payload: {
        [key]: data
      }
    })
  })
}

export const getDocument = async ({ collection, id, dispatch, type, key }) => {
  const snapshot = await db.collection(collection).doc(id).get();

  return dispatch({
    type,
    payload: {
      [key]: {
        id: snapshot.id,
        ...snapshot.data()
      }
    }
  })
}

export const listenToDocument = async ({ collection, id, dispatch, type, key }) => {
  await db.collection(collection).doc(id).onSnapshot(snapshot => {
    const data = {
      id: snapshot.id,
      ...snapshot.data()
    }

    return dispatch({
      type,
      payload: {
        [key]: data
      }
    })
  })
}
