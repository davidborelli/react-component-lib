import { configBase, fontFamilies, spacings, fontSizes, sizes, shadows, customColors, commomColors, medias } from '.';

export type Direction = 'ltr' | 'rtl';
export type ThemeOptionInitial =
  | 'a4a'
  | 'buc'
  | 'ed'
  | 'em'
  | 'lmem'
  | 'ma'
  | 'mcs'
  | 'md'
  | 'ms'
  | 'mv'
  | 'uc'
  | 'vbb'
  | 'dol'
  | 'ec'
  | 'epl'
  | 'ent'
  | 'ds'
  | 'eco'
  | 'ces'
  | 'tsr';
export type ThemeOption = {
  name: string;
  base: string;
  mainColor: string;
  secondaryColor: string;
  isColorizedMode: boolean;
  headerColor?: string;
  footerBaseColor?: string;
  direction: Direction;
  configBase: typeof configBase;
  fontFamilies: typeof fontFamilies;
  fontSizes: typeof fontSizes;
  spacings: typeof spacings;
  sizes: typeof sizes;
  shadows: typeof shadows;
  customColors: typeof customColors;
  commomColors: typeof commomColors;
  medias: typeof medias;
};
type Themes = {
  [key in ThemeOptionInitial]: ThemeOption;
};

const defaultImports = {
  configBase,
  fontFamilies,
  fontSizes,
  spacings,
  sizes,
  shadows,
  customColors,
  commomColors,
  medias,
};

export const themes: Themes = {
  a4a: {
    ...defaultImports,
    name: 'Android 4 All',
    base: 'a4a',
    mainColor: 'lime',
    secondaryColor: 'grey-cold',
    isColorizedMode: false,
    direction: 'ltr',
  },
  buc: {
    ...defaultImports,
    name: 'Busco un Coche',
    base: 'buc',
    mainColor: 'orange',
    secondaryColor: 'grey-cold',
    isColorizedMode: true,
    direction: 'ltr',
    headerColor: 'default',
    footerBaseColor: 'secondary',
  },
  ed: {
    ...defaultImports,
    name: 'Eres Deportista',
    base: 'ed',
    mainColor: 'green',
    secondaryColor: 'acqua',
    isColorizedMode: false,
    direction: 'ltr',
  },
  em: {
    ...defaultImports,
    name: 'Eres Mamá',
    base: 'em',
    mainColor: 'pink',
    secondaryColor: 'purple',
    isColorizedMode: false,
    direction: 'ltr',
  },
  lmem: {
    ...defaultImports,
    name: 'La Mente es Maravillosa',
    base: 'lmem',
    mainColor: 'indigo',
    secondaryColor: 'acqua',
    isColorizedMode: false,
    direction: 'ltr',
  },
  ma: {
    ...defaultImports,
    name: 'Mis Animales',
    base: 'ma',
    mainColor: 'red',
    secondaryColor: 'yellow',
    isColorizedMode: false,
    direction: 'ltr',
  },
  mcs: {
    ...defaultImports,
    name: 'Mejor con Salud',
    base: 'mcs',
    mainColor: 'blue',
    secondaryColor: 'pink',
    isColorizedMode: false,
    direction: 'ltr',
  },
  md: {
    ...defaultImports,
    name: 'Mi Decoración',
    base: 'md',
    mainColor: 'purple',
    secondaryColor: 'grey-warm',
    isColorizedMode: false,
    direction: 'ltr',
  },
  ms: {
    ...defaultImports,
    name: 'Muy Salud',
    base: 'ms',
    mainColor: 'blue',
    secondaryColor: 'indigo',
    isColorizedMode: false,
    direction: 'ltr',
  },
  mv: {
    ...defaultImports,
    name: 'Mi Viaje',
    base: 'mv',
    mainColor: 'red-candy',
    secondaryColor: 'yellow',
    isColorizedMode: false,
    direction: 'ltr',
  },
  uc: {
    ...defaultImports,
    name: 'Unycas',
    base: 'uc',
    mainColor: 'grey-warm',
    secondaryColor: 'grey-cold',
    isColorizedMode: false,
    direction: 'ltr',
  },
  vbb: {
    ...defaultImports,
    name: 'Vuelos Baratos Baratos',
    base: 'vbb',
    mainColor: 'blue-sky',
    secondaryColor: 'yellow',
    isColorizedMode: false,
    direction: 'ltr',
  },
  dol: {
    ...defaultImports,
    name: 'Dicas Online',
    base: 'dol',
    mainColor: 'red',
    secondaryColor: 'grey-cold',
    isColorizedMode: false,
    direction: 'ltr',
  },
  ec: {
    ...defaultImports,
    name: 'eConsejos',
    base: 'ec',
    mainColor: 'red',
    secondaryColor: 'grey-cold',
    isColorizedMode: false,
    direction: 'ltr',
  },
  epl: {
    ...defaultImports,
    name: 'El Placer de la Lectura',
    base: 'epl',
    mainColor: 'orange-brownish',
    secondaryColor: 'grey-warm',
    isColorizedMode: false,
    direction: 'ltr',
  },
  ent: {
    ...defaultImports,
    name: 'Entrenamiento.com',
    base: 'ent',
    mainColor: 'grey-warm',
    secondaryColor: 'orange',
    isColorizedMode: true,
    direction: 'ltr',
    headerColor: 'main.1000',
    footerBaseColor: 'main',
  },
  ds: {
    ...defaultImports,
    name: 'Deporte Saludable',
    base: 'ds',
    mainColor: 'blue-azure',
    secondaryColor: 'grey-cold',
    isColorizedMode: false,
    direction: 'ltr',
  },
  eco: {
    ...defaultImports,
    name: 'Ecocosas',
    base: 'eco',
    mainColor: 'green',
    secondaryColor: 'grey-cold',
    isColorizedMode: false,
    direction: 'ltr',
  },
  ces: {
    ...defaultImports,
    name: 'Cultura en Serie',
    base: 'ces',
    mainColor: 'pink-reddish',
    secondaryColor: 'pink-reddish',
    isColorizedMode: true,
    direction: 'ltr',
    headerColor: 'main.500',
    footerBaseColor: 'main',
  },
  tsr: {
    ...defaultImports,
    name: 'Tasier',
    base: 'tsr',
    mainColor: 'orange-dusty',
    secondaryColor: 'blue-sky',
    isColorizedMode: false,
    direction: 'ltr',
  },
};

export type Theme = typeof themes.mcs;
