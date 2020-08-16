import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

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