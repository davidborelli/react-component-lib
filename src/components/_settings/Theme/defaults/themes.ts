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
};

export type CommonTheme = {
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

type AllThemes = {
  [key in ThemeOptionInitial]: ThemeOption;
};

type Themes = {
  themes: AllThemes;
  commonTheme: CommonTheme;
};

const defaultImports: CommonTheme = {
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
  themes: {
    a4a: {
      name: 'Android 4 All',
      base: 'a4a',
      mainColor: 'lime',
      secondaryColor: 'grey-cold',
      isColorizedMode: false,
      direction: 'ltr',
    },
    buc: {
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
      name: 'Eres Deportista',
      base: 'ed',
      mainColor: 'green',
      secondaryColor: 'acqua',
      isColorizedMode: false,
      direction: 'ltr',
    },
    em: {
      name: 'Eres Mamá',
      base: 'em',
      mainColor: 'pink',
      secondaryColor: 'purple',
      isColorizedMode: false,
      direction: 'ltr',
    },
    lmem: {
      name: 'La Mente es Maravillosa',
      base: 'lmem',
      mainColor: 'indigo',
      secondaryColor: 'acqua',
      isColorizedMode: false,
      direction: 'ltr',
    },
    ma: {
      name: 'Mis Animales',
      base: 'ma',
      mainColor: 'red',
      secondaryColor: 'yellow',
      isColorizedMode: false,
      direction: 'ltr',
    },
    mcs: {
      name: 'Mejor con Salud',
      base: 'mcs',
      mainColor: 'blue',
      secondaryColor: 'pink',
      isColorizedMode: false,
      direction: 'ltr',
    },
    md: {
      name: 'Mi Decoración',
      base: 'md',
      mainColor: 'purple',
      secondaryColor: 'grey-warm',
      isColorizedMode: false,
      direction: 'ltr',
    },
    ms: {
      name: 'Muy Salud',
      base: 'ms',
      mainColor: 'blue',
      secondaryColor: 'indigo',
      isColorizedMode: false,
      direction: 'ltr',
    },
    mv: {
      name: 'Mi Viaje',
      base: 'mv',
      mainColor: 'red-candy',
      secondaryColor: 'yellow',
      isColorizedMode: false,
      direction: 'ltr',
    },
    uc: {
      name: 'Unycas',
      base: 'uc',
      mainColor: 'grey-warm',
      secondaryColor: 'grey-cold',
      isColorizedMode: false,
      direction: 'ltr',
    },
    vbb: {
      name: 'Vuelos Baratos Baratos',
      base: 'vbb',
      mainColor: 'blue-sky',
      secondaryColor: 'yellow',
      isColorizedMode: false,
      direction: 'ltr',
    },
    dol: {
      name: 'Dicas Online',
      base: 'dol',
      mainColor: 'red',
      secondaryColor: 'grey-cold',
      isColorizedMode: false,
      direction: 'ltr',
    },
    ec: {
      name: 'eConsejos',
      base: 'ec',
      mainColor: 'red',
      secondaryColor: 'grey-cold',
      isColorizedMode: false,
      direction: 'ltr',
    },
    epl: {
      name: 'El Placer de la Lectura',
      base: 'epl',
      mainColor: 'orange-brownish',
      secondaryColor: 'grey-warm',
      isColorizedMode: false,
      direction: 'ltr',
    },
    ent: {
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
      name: 'Deporte Saludable',
      base: 'ds',
      mainColor: 'blue-azure',
      secondaryColor: 'grey-cold',
      isColorizedMode: false,
      direction: 'ltr',
    },
    eco: {
      name: 'Ecocosas',
      base: 'eco',
      mainColor: 'green',
      secondaryColor: 'grey-cold',
      isColorizedMode: false,
      direction: 'ltr',
    },
    ces: {
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
      name: 'Tasier',
      base: 'tsr',
      mainColor: 'orange-dusty',
      secondaryColor: 'blue-sky',
      isColorizedMode: false,
      direction: 'ltr',
    },
  },
  commonTheme: defaultImports,
};

export type Theme = {
  current: ThemeOption;
  common: CommonTheme;
};
