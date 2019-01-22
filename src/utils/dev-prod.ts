export const isProd: boolean = process.env.NODE_ENV === 'production'
export const devAndProd = (dev: any, prod: any) => (isProd ? prod : dev)
export const isDev: boolean = !isProd
