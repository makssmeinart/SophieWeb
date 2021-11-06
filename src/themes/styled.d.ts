import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            footer: string,
            background: string,
            lText: string,
            sText: string,
        },
        fSize: {
            xxl: string,
            xl: string,
            l: string,
            m: string,
            s: string,
        }

    }
}