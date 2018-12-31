type transitionType = {
  property?: string
  length?: number
  ease?: string
}

export default ({
  property = 'all',
  length = 300,
  ease = 'ease',
}: transitionType) => `
    transition: ${property} ${length}ms ${ease};
`
