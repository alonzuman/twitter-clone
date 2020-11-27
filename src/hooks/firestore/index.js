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

export const listenToCollection = async ({ collection, queryParams, action, type, key }) => {
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
    return action({
      type: type,
      payload: {
        [key]: data
      }
    })
  })
}
