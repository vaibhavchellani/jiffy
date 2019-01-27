import React, { Component } from 'react'

type thumbProps = {
  file: File
  fileLoad: (e: boolean) => void
}

export default class Thumb extends Component<thumbProps> {
  public state = {
    loading: false,
    thumb: undefined,
  }

  public componentWillReceiveProps(nextProps: { file: File | null }) {
    if (!nextProps.file) {
      return
    }

    this.setState({ loading: true }, () => {
      const reader = new FileReader()

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result })
      }
      if (nextProps.file) {
        this.props.fileLoad(true)
        reader.readAsDataURL(nextProps.file)
        console.log('hiii')
      }
    })
  }

  public render() {
    const { file } = this.props
    const { loading, thumb } = this.state

    if (!file) {
      return null
    }

    if (loading) {
      return <p>loading...</p>
    }

    return (
      <img
        src={thumb}
        alt={file.name}
        className="img-thumbnail mt-2"
        height={150}
        width={150}
      />
    )
  }
}
