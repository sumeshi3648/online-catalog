import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: '2х комнатная квартира ЖК GreenLine',
    image: 'https://res.cloudinary.com/dugqffkal/image/upload/v1753943887/greenLine_yzavz0.jpg',
    price: 129900,
    description: 'Квартира с ремонтом в центре Астаны',

    details: 'MORE DETAILS ABOUT PRODUCT',
    features: ['65 кв.м', '2 комнаты', '4 этаж', 'Центральное отопление'],
    inStock: true,
    maxQty: 2,
    rating: 4.0,
    reviews: [
      { user: 'USER1', comment: 'Comment1' },
      { user: 'USER2', comment: 'Comment2' },
    ],
  },
  {
    id: 2,
    name: 'Паркинг ЖК Grand Turan',
    image: 'https://res.cloudinary.com/dugqffkal/image/upload/v1753943888/grandTuran_qhlkj9.jpg',
    price: 99900,
    description: 'Парковочное место в ЖК Grand Turan Business',

    details: 'MORE DETAILS ABOUT PARKING',
    features: ['18 кв.м', 'Подземный паркинг', 'Видеонаблюдение 24.7'],
    inStock: true,
    maxQty: 2,
    rating: 4.5,
    reviews: [
      { user: 'USER1', comment: 'Comment1' },
      { user: 'USER2', comment: 'Comment2' },
    ],

  },
  {
    id: 3,
    name: 'Smart-Remont черновой квартиры',
    image: 'https://res.cloudinary.com/dugqffkal/image/upload/v1753943902/remont_yvizsj.jpg',
    price: 199900,
    description: 'Смарт ремонт с выбором дизайна через приожение',

    details: 'MORE DETAILS ABOUT PRODUCT',
    features: ['Срок ремонта: 30 дней', 'Выбор из 5 дизайнов', 'Гарантия 2 года'],
    inStock: false,
    maxQty: 5,
    rating: 4.7,
    reviews: [
      { user: 'USER1', comment: 'Comment1' },
      { user: 'USER2', comment: 'Comment2' },
    ],
  },
];
