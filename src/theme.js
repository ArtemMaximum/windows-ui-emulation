import { injectGlobal } from 'styled-components'
import { mediaMaxWidth } from './lib/sizes'


export const theme = {
  colors: {
    footer: '#999999',
    header: '#ffffff',
    primary: '#6565d6',
    primaryDark: '#2323ab',
  },
  backgrounds: {
    navigation: 'hsla(0,0%,100%,.8)',
    shape: '#f9f9f9',
  },
  pixels: {
    contentWidth: 1280,
  },
}

export const globalStyles = () => injectGlobal`
    body, html {
      margin: 0;
      padding: 0;
      font-size: 16px;
      line-height: 1.15;
      font-family: Raleway, Verdana;
    }
    
    * {
      box-sizing: border-box;
    }
    
    body {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    #website {
      display: flex;
      flex-direction: column;
      min-width: 320px;
    }

    ${mediaMaxWidth('tablet')} {
      body, html {
        font-size: 14px;
      }
    }
  `
