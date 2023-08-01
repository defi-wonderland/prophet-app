export type ThemeName = 'light' | 'dark';

export interface Theme {
  textPrimary: string;
  textSecondary: string;
  backgroundPrimary: string;
  backgroundSecondary: string;
  titleColor: string;
  titleFontFamily: string;
  textFontFamily: string;
  borderRadius: string;
  secondaryBorderRadius: string;
  pillBackground: string;
  detailsBackground: string;
  cardBackground: string;
  headerBackground: string;
  iconBackground: string;
  tableHeaderBackground: string;
  border: string;
  green: string;
  red: string;
  yellow: string;
  type: 'dark' | 'light';
}

export interface PropTheme {
  theme: Theme;
}
