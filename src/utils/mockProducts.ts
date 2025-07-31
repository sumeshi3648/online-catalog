import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: '2х комнатная квартира ЖК GreenLine',
    image: 'https://res.cloudinary.com/dugqffkal/image/upload/v1753943887/greenLine_yzavz0.jpg',
    price: 129900,
    description: 'Квартира с ремонтом в центре Астаны',
  },
  {
    id: 2,
    name: 'Паркинг ЖК Grand Turan',
    image: 'https://res.cloudinary.com/dugqffkal/image/upload/v1753943888/grandTuran_qhlkj9.jpg',
    price: 99900,
    description: 'Парковочное место в ЖК Grand Turan Business',
  },
  {
    id: 3,
    name: 'Smart-Remont черновой квартиры',
    image: 'https://res.cloudinary.com/dugqffkal/image/upload/v1753943902/remont_yvizsj.jpg',
    price: 199900,
    description: 'Смарт ремонт с выбором дизайна через приожение',
  },
];
