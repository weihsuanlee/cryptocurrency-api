import { createGlobalStyle } from 'styled-components'
export const lightTheme = {
  body: '#F5F5F5',
  fontColor: '#000',
  inputColor: '#FFF',
}
export const darkTheme = {
  body: '#1F1B24',
  fontColor: '#fff',
  inputColor: 'whitesmoke',
}

export const GlobalStyles = createGlobalStyle`
    body{
        background-color: ${(props) => props.theme.body};
        color: ${(props) => props.theme.fontColor};
    }
    .app{
      color: ${(props) => props.theme.fontColor};
    }
    .coin-search-input{
      background-color: ${(props) => props.theme.inputColor};
    }
    .coin-table thead th{
      background-color: ${(props) => props.theme.body};
    }
`
