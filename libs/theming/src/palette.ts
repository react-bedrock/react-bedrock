import deepmerge from '../utils/deep-merge';
import {
  Color,
  blue,
  green,
  grey,
  lightBlue,
  orange,
  purple,
  red,
} from './colors';

export type CommonColors = {
  black: string;
  white: string;
};

const common = {
  black: '#000',
  white: '#fff',
};

export type SimplePaletteColorOptions = {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
};

export type PaletteColor = SimplePaletteColorOptions | Partial<Color>;

export type PaletteMode = 'light' | 'dark';

export interface TypeAction {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledOpacity: number;
  disabledBackground: string;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
}

export interface TypeText {
  primary: string;
  secondary: string;
  disabled: string;
}

export interface TypeBackground {
  default: string;
  paper: string;
}

export type Palatte = {
  common: CommonColors;
  mode: PaletteMode;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  grey: Color;
  text: TypeText;
  action: TypeAction;
  background: TypeBackground;
};

export type PaletteOptions = {
  common?: Partial<CommonColors>;
  mode?: PaletteMode;
  primary?: PaletteColor;
  secondary?: PaletteColor;
  error?: PaletteColor;
  warning?: PaletteColor;
  info?: PaletteColor;
  success?: PaletteColor;
  grey?: Partial<Color>;
  text?: Partial<TypeText>;
  action?: Partial<TypeAction>;
  background?: Partial<TypeBackground>;
};

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common.white,
    default: common.white,
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

export const dark = {
  text: {
    primary: common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
  background: {
    paper: '#121212',
    default: '#121212',
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24,
  },
};

function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: blue[200],
      light: blue[50],
      dark: blue[400],
    };
  }
  return {
    main: blue[700],
    light: blue[400],
    dark: blue[800],
  };
}

function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: purple[200],
      light: purple[50],
      dark: purple[400],
    };
  }
  return {
    main: purple[500],
    light: purple[300],
    dark: purple[700],
  };
}

function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: red[500],
      light: red[300],
      dark: red[700],
    };
  }
  return {
    main: red[700],
    light: red[400],
    dark: red[800],
  };
}

function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: lightBlue[400],
      light: lightBlue[300],
      dark: lightBlue[700],
    };
  }
  return {
    main: lightBlue[700],
    light: lightBlue[500],
    dark: lightBlue[900],
  };
}

function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: green[400],
      light: green[300],
      dark: green[700],
    };
  }
  return {
    main: green[800],
    light: green[500],
    dark: green[900],
  };
}

function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: orange[400],
      light: orange[300],
      dark: orange[700],
    };
  }
  return {
    main: '#ed6c02', // closest to orange[800] that pass 3:1.
    light: orange[500],
    dark: orange[900],
  };
}

const modes = { dark, light };

export default function createPalatte(palette: PaletteOptions): Palatte {
  const {
    mode = 'light',
    primary = getDefaultPrimary(mode),
    secondary = getDefaultSecondary(mode),
    error = getDefaultError(mode),
    info = getDefaultInfo(mode),
    success = getDefaultSuccess(mode),
    warning = getDefaultWarning(mode),
    ...other
  } = palette;

  const palatteOutput: Palatte = deepmerge<Palatte>(
    {
      common: common,
      mode,
      primary,
      secondary,
      error,
      info,
      success,
      warning,
      grey,
      ...modes[mode],
    },
    other
  );

  return palatteOutput;
}
