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
    color: '#FFFFFF',
    bottomBarColor: '#212121',
  },
  light: {
    name: 'light',
    background: '#F0F0F0',
    color: '#000000',
    bottomBarColor: '#FFFFFF',
  },
}

export default themes
