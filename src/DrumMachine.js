import React from 'react';
import DrumPad from './DrumPad'; 
import './DrumMachine.css';
import Heater1 from './audio/Heater-1.mp3';
import Heater2 from './audio/Heater-2.mp3';
import Heater3 from './audio/Heater-3.mp3';
import Heater4 from './audio/Heater-4_1.mp3';
import Heater6 from './audio/Heater-6.mp3';
import CevH2 from './audio/Cev_H2.mp3';
import DscOh from './audio/Dsc_Oh.mp3';
import KicknHat from './audio/Kick_n_Hat.mp3';
import RP4KICK1 from './audio/RP4_KICK_1.mp3';

const drumPads = [
  { id: 'Heater-1', letter: 'Q', src: Heater1 },
  { id: 'Heater-2', letter: 'W', src: Heater2 },
  { id: 'Heater-3', letter: 'E', src: Heater3 },
  { id: 'Heater-4', letter: 'A', src: Heater4 },
  { id: 'Heater-6', letter: 'S', src: Heater6 },
  { id: 'Cev', letter: 'D', src: CevH2 },
  { id: 'Disc', letter: 'Z', src: DscOh },
  { id: 'Kick & Hat', letter: 'X', src: KicknHat },
  { id: 'Kick', letter: 'C', src: RP4KICK1 },
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
