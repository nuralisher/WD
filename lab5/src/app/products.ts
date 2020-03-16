export interface Product{
  name:string,
  price:number,
  description:string,
  rating:number,
  link:string,
  img:string[],
  categoryID:number,
  productID:number;
}



export var product = {
  name:null,
  price:null,
  description:null,
  rating:null,
  link:null,
  img:null,
  categoryID:null,
  productID:null
}

export var productCategory=[
  product,product,product,product,product,product,product,product,product,product
]



export const products = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:0,
      productID:1
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone5.jpg"],
      categoryID:0,
      productID:2
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg",, "assets/images/phone6.jpg"],
      categoryID:0,
      productID:3
    },
    {
      name: 'Phone4 Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone5.jpg", "assets/images/phone6.jpg", "assets/images/phone1.jpg"],
      categoryID:0,
      productID:4
    },
    {
      name: 'Phone5 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/iphone2.jpg"],
      categoryID:0,
      productID:5
    },
    {
      name: 'Phone6 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/iphone1.png"],
      categoryID:0,
      productID:6
    },

    {
      name: 'Phone7 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:0,
      productID:7
    },

    {
      name: 'Phone8 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone2.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:0,
      productID:8
      
    },
    {
      name: 'Phone9 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:0,
      productID:9
    },
    {
      name: 'Phone10 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:0,
      productID:10
    }
    
  ]
  
  export const products1 = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:11
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone5.jpg"],
      categoryID:1,
      productID:12
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg",, "assets/images/phone6.jpg"],
      categoryID:1,
      productID:13
    },
    {
      name: 'Phone4 Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone5.jpg", "assets/images/phone6.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:14
    },
    {
      name: 'Phone5 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/iphone2.jpg"],
      categoryID:1,
      productID:15
    },
    {
      name: 'Phone6 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/iphone1.png"],
      categoryID:1,
      productID:16
    },

    {
      name: 'Phone7 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:1,
      productID:17
    },

    {
      name: 'Phone8 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone2.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:1,
      productID:18
      
    },
    {
      name: 'Phone9 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:1,
      productID:19
    },
    {
      name: 'Phone10 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:1,
      productID:20
    }
    
  ]
  
  export const products2 = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:2,
      productID:21
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone5.jpg"],
      categoryID:2,
      productID:22
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg",, "assets/images/phone6.jpg"],
      categoryID:2,
      productID:23
    },
    {
      name: 'Phone4 Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone5.jpg", "assets/images/phone6.jpg", "assets/images/phone1.jpg"],
      categoryID:2,
      productID:24
    },
    {
      name: 'Phone5 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/iphone2.jpg"],
      categoryID:2,
      productID:25
    },
    {
      name: 'Phone6 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/iphone1.png"],
      categoryID:2,
      productID:26
    },

    {
      name: 'Phone7 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:2,
      productID:27
    },

    {
      name: 'Phone8 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone2.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:2,
      productID:28
    },
    {
      name: 'Phone9 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:2,
      productID:29
    },
    {
      name: 'Phone10 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:2,
      productID:30
    }
    
  ]

  export const products3 = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:3,
      productID:31
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone5.jpg"],
      categoryID:3,
      productID:32
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg",, "assets/images/phone6.jpg"],
      categoryID:3,
      productID:33
    },
    {
      name: 'Phone4 Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone5.jpg", "assets/images/phone6.jpg", "assets/images/phone1.jpg"],
      categoryID:3,
      productID:34
    },
    {
      name: 'Phone5 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/iphone2.jpg"],
      categoryID:3,
      productID:35
    },
    {
      name: 'Phone6 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/iphone1.png"],
      categoryID:3,
      productID:36
    },

    {
      name: 'Phone7 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:3,
      productID:37
    },

    {
      name: 'Phone8 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone2.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:3,
      productID:38
    },
    {
      name: 'Phone9 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:3,
      productID:39
    },
    {
      name: 'Phone10 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:3,
      productID:40
    }
    
  ]

  export const products4 = [
    {
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      rating:5,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:4,
      productID:41
    },
    {
      name: 'Phone Mini',
      price: 699,
      description: 'A great phone with one of the best cameras',
      rating:3,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone5.jpg"],
      categoryID:4,
      productID:42
    },
    {
      name: 'Phone Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg",, "assets/images/phone6.jpg"],
      categoryID:4,
      productID:43
    },
    {
      name: 'Phone4 Standard',
      price: 299,
      description: '',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone5.jpg", "assets/images/phone6.jpg", "assets/images/phone1.jpg"],
      categoryID:4,
      productID:44
    },
    {
      name: 'Phone5 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/iphone2.jpg"],
      categoryID:4,
      productID:45
    },
    {
      name: 'Phone6 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/iphone1.png"],
      categoryID:4,
      productID:46
    },

    {
      name: 'Phone7 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone6.jpg", "assets/images/phone2.jpg"],
      categoryID:4,
      productID:47
    },

    {
      name: 'Phone8 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone2.jpg", "assets/images/phone5.jpg", "assets/images/phone3.jpg"],
      categoryID:4,
      productID:48
    },
    {
      name: 'Phone9 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone3.jpg", "assets/images/phone4.jpg", "assets/images/phone1.jpg"],
      categoryID:4,
      productID:49
    },
    {
      name: 'Phone10 Standard',
      price: 299,
      description: 'A standard phone with one of the best screens',
      rating:4,
      link:'https://aliexpress.ru/item/4000229686678.html?spm=a2g0o.detail.1000023.3.356c5871NRVwLj',
      img:["assets/images/phone1.jpg", "assets/images/phone2.jpg", "assets/images/phone6.jpg"],
      categoryID:4,
      productID:50
    }
    
  ]
  
export interface Categories{
  id:number,
  categoryName:string,
  productsList:Product[],
}

  export const categories=[
    {
      id:1,
      name:'First Category',
      productsList:products1
    }
    ,
    {
      id:2,
      name:'Second Category',
      productsList:products2
    }
    ,
    {
      id:3,
      name:'Third Category',
      productsList:products3
    },
    {
      id:4,
      name:'Fourth Category',
      productsList:products4
    }
  ]
  
  export const allProducts = ((products1.concat(products2)).concat(products3)).concat(products4);