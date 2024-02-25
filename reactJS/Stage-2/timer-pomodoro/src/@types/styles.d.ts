// styles.d.ts -> quer dizer que só vou ter codigo de definição de typescript
// interface ButtonProps {
//     variante?: ButtonVariant
// }


import styled from "styled-components";
import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme


declare module 'styled-components' {
    export interface defaultTheme extends ThemeType{}
}