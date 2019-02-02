import React, { PureComponent } from 'react'
import { Icon } from 'sharedComponent'

type thumbProps = {
  file: File
  remove: () => void
}

class Thumb extends PureComponent<thumbProps> {
  public static getDerivedStateFromProps(nextProps: thumbProps) {
    if (!nextProps.file) {
      return null
    }
    return nextProps
  }

  public state = {
    loading: false,
    thumb: undefined,
  }

  public async componentDidMount() {
    if (!this.props.file) {
      return
    }

    await this.setState({ loading: true }, async () => {
      const reader = new FileReader()

      reader.onloadend = async () => {
        await this.setState({ loading: false, thumb: reader.result })
      }
      if (this.props.file) {
        await reader.readAsDataURL(this.props.file)
      }
    })
  }

  public async componentDidUpdate(prevProps: thumbProps) {
    if (!prevProps.file) {
      return
    }

    if (prevProps.file !== this.props.file) {
      await this.setState({ loading: true }, async () => {
        const reader = new FileReader()

        reader.onloadend = async () => {
          await this.setState({ loading: false, thumb: reader.result })
        }
        if (this.props.file) {
          await reader.readAsDataURL(this.props.file)
        }
      })
    }
  }

  public removeImage = () => {
    this.setState({
      loading: false,
      thumb: undefined,
    })
    this.props.remove()
  }

  public render() {
    const { file } = this.props
    const { thumb } = this.state
    if (!file) {
      return null
    }

    return (
      <>
        <div
          style={{
            position: 'absolute',
            right: '9px',
            top: '9px',
          }}
          onClick={() => this.removeImage()}
        >
          <Icon name="close" size={20} color="#e04f5f" />
        </div>
        <img
          src={thumb}
          alt={file.name}
          className="img-thumbnail mt-2"
          height={150}
          width={150}
        />
      </>
    )
  }
}

export default Thumb
