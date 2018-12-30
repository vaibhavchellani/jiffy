type themeType = {
  dark: {
    [key: string]: string
  }
  light: {
    [key: string]: string
  }
}

const themes: themeType = {
  dark: {
    name: 'dark',
    background: '#131313',
  },
  light: {
    name: 'light',
    background: '#F0F0F0',
  },
}

export default themes
