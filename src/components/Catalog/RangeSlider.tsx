/* eslint-disable class-methods-use-this, no-console */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
//import InputRange from 'react-input-range';

const useStyles = makeStyles({
  root: {
    width: 300,
    color: '#000',
        height: 2,
        padding: '15px 0',
  },
  rail: {
    height: 2,
    opacity: 0.5,
    backgroundColor: '#000',
  },
  thumb: {
    height: 28,
    width: 28,
    backgroundColor: '#000',
    color:'#000',
    marginTop: -14,
    marginLeft: -14,
    '&:focus, &:hover, &$active': {
      boxShadow: '0 3px 1px rgba(0,0,0,0.9),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)',
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
      },
    },
  },

});

function valuetext(value: number) {
  return `${value}$`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState<number[]>([0, 100]);

  const handleChange = (event: any, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
      <h5>50<span>GEL</span></h5>
      <h5>500<span>GEL</span></h5>
    </div>
  );
}


// export default class RangeSlider extends React.Component {
//     constructor(props:any) {    
//       super(props);
  
//       this.state = {
//         value: 5,
//         value2: 10,
//         value3: 10,
//         value4: {
//           min: 5,
//           max: 10,
//         },
//         value5: {
//           min: 3,
//           max: 7,
//         },
//         value6: {
//           min: 3,
//           max: 7,
//         },
//       };
//     }
  
//     render() {
//       return (
//         <form className="form">
//           <InputRange
//             maxValue={20}
//             minValue={0}
//             value={value}
//             onChange={value => this.setState({ value })}
//             onChangeComplete={value => console.log(value)} />
  
//           <InputRange
//             maxValue={20}
//             minValue={0}
//             disabled
//             value={this.state.value2}
//             onChange={value => this.setState({ value })}
//             onChangeComplete={value => console.log(value)} />
  
//           <InputRange
//             maxValue={20}
//             minValue={0}
//             formatLabel={value => value.toFixed(2)}
//             value={this.state.value3}
//             onChange={value => this.setState({ value3: value })}
//             onChangeStart={value => console.log('onChangeStart with value =', value)}
//             onChangeComplete={value => console.log(value)} />
  
//           <InputRange
//             maxValue={20}
//             minValue={0}
//             formatLabel={value => `${value}kg`}
//             value={this.state.value4}
//             onChange={value => this.setState({ value4: value })}
//             onChangeComplete={value => console.log(value)} />
  
//           <InputRange
//             draggableTrack
//             maxValue={20}
//             minValue={0}
//             onChange={value => this.setState({ value5: value })}
//             onChangeComplete={value => console.log(value)}
//             value={this.state.value5} />
  
//           <InputRange
//             allowSameValues
//             draggableTrack
//             maxValue={20}
//             minValue={0}
//             onChange={value => this.setState({ value6: value })}
//             onChangeComplete={value => console.log(value)}
//             value={this.state.value6} />
//         </form>
//       );
//     }
//   }