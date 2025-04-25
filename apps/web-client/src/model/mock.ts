export interface Content {
  year: number;
  aticle: string;
}

export interface Page {
  name: string;
  content: Content[];
}

export const PAGES: Page[] = [
  {
    name: 'Наука',
    content: [
      {
        year: 2015,
        aticle:
          '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2017,
        aticle:
          'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2018,
        aticle:
          'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2019,
        aticle: 'Текст',
      },
      {
        year: 2020,
        aticle: 'Текст',
      },
      {
        year: 2021,
        aticle: 'Текст',
      },
      {
        year: 2022,
        aticle: 'Текст',
      },
    ],
  },
  {
    name: 'Lorem',
    content: [
      {
        year: 1991,
        aticle: 'Lorem',
      },
      {
        year: 2017,
        aticle: 'Lorem',
      },
      {
        year: 2018,
        aticle: 'Lorem',
      },
      {
        year: 2025,
        aticle: 'Lorem',
      },
    ],
  },
  {
    name: 'Кино',
    content: [
      {
        year: 1991,
        aticle: 'Зубастики 3',
      },
      {
        year: 2000,
        aticle: 'Пляж',
      },
      {
        year: 2009,
        aticle: 'Остров проклятых',
      },
      {
        year: 2023,
        aticle: 'Убийцы цветочной луны',
      },
    ],
  },
  {
    name: 'Исскуство',
    content: [
      {
        year: 2005,
        aticle:
          '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2006,
        aticle: 'Бессоница роман Стивина Кинга',
      },
      {
        year: 2007,
        aticle: 'Нобилевская премния по литературе',
      },
      {
        year: 2018,
        aticle: 'Какой-то другой текст',
      },
    ],
  },
  {
    name: 'Комиксы',
    content: [
      {
        year: 2013,
        aticle: 'Marvel',
      },
      {
        year: 2017,
        aticle: 'DC',
      },
    ],
  },
  {
    name: 'Еда',
    content: [
      {
        year: 1939,
        aticle: 'Пюрешка',
      },
      {
        year: 1955,
        aticle: 'Котлетка',
      },
      {
        year: 1966,
        aticle: 'Супчик',
      },
      {
        year: 2001,
        aticle: 'Салатик',
      },
    ],
  },
];
