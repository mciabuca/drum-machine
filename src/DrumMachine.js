import React from 'react';
import DrumPad from './DrumPad'; 
import './DrumMachine.css';

const drumPads = [
  { id: 'Heater-1', letter: 'Q', src: '/audio/Heater-1.mp3' },
  { id: 'Heater-2', letter: 'W', src: '/audio/Heater-2.mp3' },
  { id: 'Heater-3', letter: 'E', src: '/audio/Heater-3.mp3' },
  { id: 'Heater-4', letter: 'A', src: '/audio/Heater-4_1.mp3' },
  { id: 'Heater-6', letter: 'S', src: '/audio/Heater-6.mp3' },
  { id: 'Cev', letter: 'D', src: '/audio/Cev_H2.mp3' },
  { id: 'Disc', letter: 'Z', src: '/audio/Dsc_Oh.mp3' },
  { id: 'Kick & Hat', letter: 'X', src: '/audio/Kick_n_Hat.mp3' },
  { id: 'Kick', letter: 'C', src: '/audio/RP4_KICK_1.mp3' },
];

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 'Press a Key'
    };
  }

  handleDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div id="drum-machine">
        <h1 id="title">Drum Machine</h1>
        <div id="display">
          <strong>Current Sound:</strong> {this.state.display}
        </div>
        <div id="drum-pad-container">
          {drumPads.map(d => (
            <DrumPad
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay={this.handleDisplay}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default DrumMachine;
