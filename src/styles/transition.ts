type transitionType = {
  property: string
  length?: number
  ease?: string
}

export default (props: transitionType[]) => `
    transition: ${props
      .map(
        (prop: transitionType) =>
          `${prop.property} ${prop.length || 300}ms ${prop.ease || 'ease-in'}`,
      )
      .join(', ')};
`
