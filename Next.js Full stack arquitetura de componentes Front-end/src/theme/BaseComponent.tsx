import React from "react";
import styled from "styled-components";
import { StyleSheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
  ref: any;
  styleSheet?: StyleSheet;
}
const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ styleSheet }) => parseStyleSheet(styleSheet)}
`;

interface BaseComponentProps {
  styleSheet: StyleSheet
  [key: string]: any;
}

export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>((props, ref) => {
  return (
    <StyledBaseComponent ref={ref} {...props} />
  )
}
)

BaseComponent.defaultProps = {
  styleSheet: {},
}
