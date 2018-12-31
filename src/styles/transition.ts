type transitionType = {
  property: string
  length: number
  ease: string
}

export default ({
  property = 'all',
  length = 0.3,
  ease = 'ease',
}: transitionType) => `
    transition: ${property} ${length}s ${ease};
`
