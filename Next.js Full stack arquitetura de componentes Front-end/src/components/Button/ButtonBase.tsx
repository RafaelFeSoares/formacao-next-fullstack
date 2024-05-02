import { ThemeTypographyVariants } from "@src/theme/theme";
import styled from 'styled-components'
import Text from "../Text/Text";
import { useRipple } from "react-use-ripple";
import { useRef } from "react";
import { StyleSheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/router";

const StyledButton = styled(Text) <any>`
`

export interface ButtonBaseProps {
  href?: string;
  children: React.ReactNode
  textVariant?: ThemeTypographyVariants;
  styleSheet?: StyleSheet
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ButtonBase({
  textVariant,
  children,
  styleSheet,
  href,
  ...props
}: ButtonBaseProps) {
  const ref = useRef()
  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255,255,255,0.7)'
  })
  const router = useRouter()

  const isLink = Boolean(href)
  const Tag = isLink ? 'a' : 'button'


  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      href={href}
      styleSheet={{
        backgroundColor: 'transparent',
        color: 'inherit',
        border: '0',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        ...styleSheet
      }}
      onClick={(event) => {
        isLink && event.preventDefault()
        isLink && router.push(href)
        !isLink && props.onClick && props.onClick(event)
      }}
      {...props}>
      {children}
    </StyledButton>
  );
}

