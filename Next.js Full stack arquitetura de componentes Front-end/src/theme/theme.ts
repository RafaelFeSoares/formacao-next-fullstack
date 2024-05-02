import { typography } from "./default/typography";
import { colors } from "./default/colors";

const theme = {
  typography,
  colors,
};

export type Theme = typeof theme;
export type ThemeTypographyVariants = keyof typeof typography.variants;

export default theme;
