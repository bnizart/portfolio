import type { ImageMetadata } from 'astro';
import coverMisery   from '@/assets/books/misery.jpg';
import coverTroupe52 from '@/assets/books/troupe-52.jpg';
import coverRien     from '@/assets/books/rien.png';
import coverLCIBoucleOr from '@/assets/books/lci-boucle-dor.jpg';
import coverLCIHanselEtGretel from '@/assets/books/lci-hansel-et-gretel.jpg';
import LCILePetitPoucet from '@/assets/books/lci-le-petit-poucet.jpg';


export type Book = {
  title: string;
  author: string;
  year: number;
  readYear: number;
  readOrder: number;
  cover: ImageMetadata;
};

export const books: Book[] = [
  {
    title: 'Misery',
    author: 'Stephen King',
    year: 1987,
    readYear: 2025,
    readOrder: 1,
    cover: coverMisery,
  },
  {
    title: 'Troupe 52',
    author: 'Nick Cutter',
    year: 2018,
    readYear: 2025,
    readOrder: 3,
    cover: coverTroupe52,
  },
  {
    title: 'Rien',
    author: 'Janne Teller',
    year: 2012,
    readYear: 2026,
    readOrder: 2,
    cover: coverRien,
  },
  {
    title: 'Les contes interdits : Boucle d\'Or',
    author: 'Yvan Godbout',
    year: 2020,
    readYear: 2025,
    readOrder: 4,
    cover: coverLCIBoucleOr,
  },
  {
    title: 'Les contes interdits : Hansel et Gretel',
    author: 'Yvan Godbout',
    year: 2020,
    readYear: 2025,
    readOrder: 2,
    cover: coverLCIHanselEtGretel,
  },
  {
    title: 'Les contes interdits : Le Petit Poucet',
    author: 'Yvan Godbout',
    year: 2020,
    readYear: 2026,
    readOrder: 1,
    cover: LCILePetitPoucet,
  }
];
