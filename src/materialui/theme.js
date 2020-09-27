import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({  // #1
    palette: {
        primary: {
            light: '#be9c91',
            main: '#8c6d62',
            dark: '#5f4339',
            contrastText: '#ffffff',
        },
        secondary: {
            light: '#fffffb',
            main: '#d7ccc8',
            dark: '#a69b97',
            contrastText: '#000000',
        },
    },
    typography: {
        button: {
            textTransform: "none"
        },
        fontFamily: [
            'Courier New'
        ].join(','),
    }
})