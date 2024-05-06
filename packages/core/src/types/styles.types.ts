/* eslint-disable no-unused-vars */
import { SxProps, Theme } from '@mui/material';
import { CSSProperties } from 'react';

// TODO => change prop
export type TInlineStyles<T = void> = (
  theme?: Theme,
  extra?: T
) => SxProps<Theme>;

interface ITheme {
  theme?: Theme;
}

export type TSxStyles<T = ITheme> = (props?: T & ITheme) => SxProps<Theme> & CSSProperties;
