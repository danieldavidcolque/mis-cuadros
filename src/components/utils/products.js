
export const products = [
    {id: 1, title:'Camino amor', category: 'cuadros', description:'Autor: Alejandro Lima', pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/131/products/7625-294-afremov-45x301-db364258f99265f91a16111587199026-640-0.jpg', price: 2800},
    {id: 2, title:'Mirada mujer', category: 'cuadros', description:'Autor: Maria Zenith', pictureUrl: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/131/products/4866-366-arte-mujeres-45x301-0af1df53a9c4d92cb616111585653442-640-0.jpg', price: 3000},
    {id: 3, title:'Mapa de especias', category: 'cuadros', description:'Autor: Marisa Renna', pictureUrl:'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/131/products/354-mapa-con-especias-45x301-a4315fc82c7edbb88816111585729441-640-0.jpg', price: 3500},
    {id: 4, title:'La noche estrellada', category: 'cuadros', description:'Autor: Jorge Lanata', pictureUrl:'https://d3ugyf2ht6aenh.cloudfront.net/stores/827/131/products/7655-300-arte-vincent-van-gogh-la-noche-estrellada-45x301-1ea1264314477c454616111587143262-640-0.jpg', price: 3200},
    {id: 5, title:'Amistad', category: 'esculturas', description:'Autor: Miguel Guia', pictureUrl:'https://buysculpture.es/2358-thickbox_default/escultura-amistad-en-bronce-azul.jpg', price: 10900},
    {id: 6, title:'Niño en caballo', category: 'esculturas', description:'Autor: Martin Duque', pictureUrl:'https://buysculpture.es/1190-thickbox_default/escultura-nino-con-caballo.jpg', price: 12200},
    {id: 7, title:'Sigilo felino', category: 'esculturas', description:'Autor: Miguel Guia', pictureUrl:'https://buysculpture.es/2271-thickbox_default/escultura-sigilo-felino.jpg', price: 8900},
    {id: 8, title:'Juego espacios', category: 'esculturas', description:'Autor: Juan del Olmo', pictureUrl:'https://buysculpture.es/1122-thickbox_default/escultura-juegos-espacios-1-bronce-oxidado.jpg', price: 900}
  ]

  //esta funcion retorna el array al cabo de 2 segundos
  export const getAllProducts = () => {
    const promise = new Promise((resolve) => {
      setTimeout(()=>{
        return resolve(products);
      },2000)
    })
    return promise
  };

  //esta funcion hace una busqueda en el array products y devuelve un solo producto (metodo find) y luego la retorna en 2 segundos
  export const getProduct = (id)=>{
    const promise = new Promise((resolve) => {
      const result = products.find((product)=> product.id === parseInt(id))
      setTimeout(() => {
        return resolve(result);
      }, 2000)
    })

    return promise
  };

//esta funcion hace una busqueda en el array products por categoria y devuelve la categoria seleccionada (metodo filter) y luego la retorna en 2 segundos
  export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const results=products.filter((product)=> product.category === categoryId)
      setTimeout(()=>{
        return resolve(results);
      },2000)
    })
    return promise
  };