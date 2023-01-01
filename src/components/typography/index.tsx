import { cn } from '@/utils/class-merge';
import type ITypography from './interface';

const variantElementMap = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subheading: 'p',
  'body-lg': 'p',
  body: 'p',
  'body-sm': 'p',
  button: 'span',
  caption: 'span',
  overline: 'span',
  p: 'p',
  span: 'span',
} as const;

const variantClasses = {
  display: 'font-heading text-[3.75rem] font-normal leading-[0.92] md:text-[5rem]',
  h1: 'font-heading text-[2.75rem] font-normal leading-[0.96] md:text-[4rem]',
  h2: 'font-heading text-[2.125rem] font-normal leading-[1.04] md:text-[3rem]',
  h3: 'font-heading text-[1.75rem] font-normal leading-[1.12] md:text-[2.25rem]',
  h4: 'font-heading text-[1.5rem] font-medium leading-[1.2] md:text-[1.875rem]',
  h5: 'font-heading text-[1.25rem] font-medium leading-[1.3] md:text-[1.5rem]',
  h6: 'font-heading text-[1.125rem] font-medium leading-[1.35] md:text-[1.25rem]',
  subheading: 'font-body text-[1.125rem] leading-[1.7] md:text-[1.25rem]',
  'body-lg': 'font-body text-[1.125rem] leading-[1.75]',
  body: 'font-body text-base leading-[1.7]',
  'body-sm': 'font-body text-sm leading-[1.65]',
  button: 'font-body text-sm font-medium uppercase tracking-[0.28em] leading-none',
  caption: 'font-body text-xs leading-[1.5]',
  overline: 'font-body text-[11px] uppercase tracking-[0.32em] leading-none',
  p: 'font-body text-base leading-[1.7]',
  span: 'font-body text-inherit leading-[inherit]',
} as const;

const styleClasses = {
  default: '',
  accent: 'font-heading font-normal italic',
  muted: 'text-muted-text',
  strikethrough: 'line-through',
} as const;

export default function Typography({
  children,
  as,
  variant = 'body',
  className,
  style = 'default',
}: ITypography) {
  const Wrapper = as ?? variantElementMap[variant];

  return (
    <Wrapper className={cn(variantClasses[variant], styleClasses[style], className)}>
      {children}
    </Wrapper>
  );
}

Typography.displayName = 'Typography';
