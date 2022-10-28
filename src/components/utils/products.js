import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";


export const getAllProducts = () => {
  const database = getFirestore();
  const collectionReference = collection(database, 'items');

  return getDocs(collectionReference)
    .then(snapshot => {
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

export const getProduct = (id) => {
  const database = getFirestore();
  const itemReference = doc(database, 'items', id);
  return getDoc(itemReference)
    .then(snapshot => {
      if(snapshot.exists()) {
        const item = {
          id: snapshot.id,
          ...snapshot.data()
        };
        return item;
      }
    })
  
};

export const getProductsByCategory = (categoryId) => {
  // obtenemos la basedatos
  const database = getFirestore();

  // obtenemos la referencia a la collecion
  const collectionReference = collection(database, 'items');

  // crear query/consulta con el filtro que queremos aplicar
  const collectionQuery = query(collectionReference, where('category', '==', categoryId))

  // obtenemos los datos desde firestore
  return getDocs(collectionQuery)
    .then(snapshot => {
      if (snapshot.size === 0)
        return [];
      
      const list = snapshot
        .docs
        .map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
      return list;
    })
    .catch(error => console.warn(error))
};

/* const products = [
  {title:'Camino amor', category: 'cuadros', description:'Autor: Alejandro Lima', pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/131/products/7625-294-afremov-45x301-db364258f99265f91a16111587199026-640-0.jpg', price: 2800, stock: 3},
  {title:'Mirada mujer', category: 'cuadros', description:'Autor: Maria Zenith', pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/131/products/4866-366-arte-mujeres-45x301-0af1df53a9c4d92cb616111585653442-640-0.jpg', price: 3000, stock: 2},
  {title:'Mapa de especias', category: 'cuadros', description:'Autor: Marisa Renna', pictureUrl:'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/131/products/354-mapa-con-especias-45x301-a4315fc82c7edbb88816111585729441-640-0.jpg', price: 3500, stock: 2},
  {title:'La noche estrellada', category: 'cuadros', description:'Autor: Jorge Lanata', pictureUrl:'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/131/products/7655-300-arte-vincent-van-gogh-la-noche-estrellada-45x301-1ea1264314477c454616111587143262-640-0.jpg', price: 3200, stock: 3},
  {title:'Amistad', category: 'esculturas', description:'Autor: Miguel Guia', pictureUrl:'https://buysculpture.es/2358-thickbox_default/escultura-amistad-en-bronce-azul.jpg', price: 10900, stock:2},
  {title:'Niño en caballo', category: 'esculturas', description:'Autor: Martin Duque', pictureUrl:'https://buysculpture.es/1190-thickbox_default/escultura-nino-con-caballo.jpg', price: 12200, stock: 2},
  {title:'Sigilo felino', category: 'esculturas', description:'Autor: Miguel Guia', pictureUrl:'https://buysculpture.es/2271-thickbox_default/escultura-sigilo-felino.jpg', price: 8900, stock:5}, 
  {title:'Juego espacios', category: 'esculturas', description:'Autor: Juan del Olmo', pictureUrl:'https://buysculpture.es/1122-thickbox_default/escultura-juegos-espacios-1-bronce-oxidado.jpg', price: 900, stock: 2}
]

export const createAllProducts = async () => {
  try {
    // obtenemos la basedatos
    const database = getFirestore(); 

    // obtenemos la referencia a la collecion
    const collectionReference = collection(database, 'items');
    for(let i = 0; i < products.length; i++) {
      const snapshot = await addDoc(collectionReference, products[i]);
    }
  } catch (error) {
    console.warn(error)
  }
} */