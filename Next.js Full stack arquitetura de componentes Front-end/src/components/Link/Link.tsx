import NextLink from 'next/link'
import Text from '../Text/Text';
import React from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { ThemeTypographyVariants } from '@src/theme/theme';
import { useTheme } from '@src/theme/ThemeProvider';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  variant?: ThemeTypographyVariants
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative'
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(({ href, children, colorVariantEnabled, colorVariant, styleSheet, ...props }: LinkProps, ref) => {
  const theme = useTheme()
  const isExternalLink = href.startsWith('http');

  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600,
    }
  }

  const linkProps = {
    ref,
    children,
    tag: 'a',
    href,
    styleSheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color
      },
      ...styleSheet,
      color: currentColorSet.color,
      hover: {
        ...styleSheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color
        }
      },
      focus: {
        ...styleSheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color
        }
      },
    },
    ...props,
  }

  if (isExternalLink) return (
    <Text  {...{
      target: '_blank',
      ...linkProps
    }} />
  )

  return (
    <NextLink href={href} legacyBehavior passHref>
      <Text {...linkProps} />
    </NextLink>
  )
})

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true,
}

export default Link;
