const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Головные Уборы",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Коричневая Шляпка",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 1200,
      },
      {
        id: 2,
        name: "Синяя Вязаная Шапочка",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 900,
      },
      {
        id: 3,
        name: "Коричневая Ковбойская Шляпа",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 1650,
      },
      {
        id: 4,
        name: "Серая Шляпа",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 1500,
      },
      {
        id: 5,
        name: "Коричневая Вязаная Шапочка",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 1100,
      },
      {
        id: 6,
        name: "Кепка Пальмовое Дерево",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 700,
      },
      {
        id: 7,
        name: "Красная Вязаная Шапочка",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 900,
      },
      {
        id: 8,
        name: "Кепка Оранжевый Волк",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 1050,
      },
      {
        id: 9,
        name: "Синяя Кепка",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 1000,
      },
    ],
  },
  sneakers: {
    id: 2,
    title: "Кроссовки",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 3200,
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 3500,
      },
      {
        id: 12,
        name: "Черные Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 3000,
      },
      {
        id: 13,
        name: "Белые Nike AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 3500,
      },
      {
        id: 14,
        name: "Красные Nike High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 3700,
      },
      {
        id: 15,
        name: "Коричневые Nike High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 3100,
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 2900,
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 2700,
      },
    ],
  },
  jackets: {
    id: 3,
    title: "Куртки",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Черная Джинсовая Овчина",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 4000,
      },
      {
        id: 19,
        name: "Синяя Джинсовая Куртка",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 3500,
      },
      {
        id: 20,
        name: "Серая Джинсовая Куртка",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 3200,
      },
      {
        id: 21,
        name: "Коричневый Овчинный Мех",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 4200,
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 3600,
      },
    ],
  },
  womens: {
    id: 4,
    title: "Женская одежда",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Синяя Майка",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 700,
      },
      {
        id: 24,
        name: "Цветочная Блузка",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 900,
      },
      {
        id: 25,
        name: "Цветочное Платье",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 1500,
      },
      {
        id: 26,
        name: "Платье Красный Горошек",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 1700,
      },
      {
        id: 27,
        name: "Полосатый Свитер",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 1900,
      },
      {
        id: 28,
        name: "Желтый Спортивный Костюм",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 2200,
      },
      {
        id: 29,
        name: "Белая Блузка",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 1300,
      },
    ],
  },
  mens: {
    id: 5,
    title: "Мужская Одежда",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Камуфляжный Пуховый Жилет",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 2800,
      },
      {
        id: 31,
        name: "Футболка Цветочный Принт",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 1400,
      },
      {
        id: 32,
        name: "Черно-белая Футболка с Длинным Рукавом",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 1300,
      },
      {
        id: 33,
        name: "Розовая Футболка",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 1050,
      },
      {
        id: 34,
        name: "Джинсовая Куртка С Длинным Рукавом",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 2100,
      },
      {
        id: 35,
        name: "Бордовая Футболка",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 900,
      },
    ],
  },
};

export default SHOP_DATA;
