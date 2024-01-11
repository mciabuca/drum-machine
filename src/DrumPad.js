import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          active: false,
        };
      }
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    if (e.key.toUpperCase() === this.props.letter) {
      this.playSound();
    }
  };

  playSound = () => {
    const sound = document.getElementById(this.props.letter);
    sound.currentTime = 0;
    sound.play();
    this.props.handleDisplay(this.props.id);
    this.setState({ active: true });
    setTimeout(() => this.setState({ active: false }), 200);
  };

  render() {
    return (
      <div
        className={`drum-pad ${this.state.active ? 'active' : ''}`}
        id={this.props.id}
        onClick={this.playSound}
      >
        {this.props.letter}
        <audio className='clip' id={this.props.letter} src={this.props.src}></audio>
      </div>
    );
  }
}
export default DrumPad;
