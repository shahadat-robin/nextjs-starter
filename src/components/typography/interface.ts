import type { ClassValue } from 'clsx';
import type { ElementType, PropsWithChildren } from 'react';

type TypographyVariant =
  | 'display'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'subheading'
  | 'body-lg'
  | 'body'
  | 'body-sm'
  | 'button'
  | 'caption'
  | 'overline'
  | 'p'
  | 'span';

type TypographyStyle = 'default' | 'accent' | 'muted' | 'strikethrough';

interface ITypography extends PropsWithChildren {
  as?: ElementType;
  variant?: TypographyVariant;
  className?: ClassValue;
  style?: TypographyStyle;
}

export default ITypography;
