import React from 'react';
import './tempFormatToggle.scss';
import { useSelector } from 'react-redux';
import { updateFormat } from '../redux/action/weather';
import { useDispatch } from 'react-redux';

const TempFormatToggle = () => {
  const isCelsius = useSelector((state) => state.degreesFormatReducer);
  const dispatch = useDispatch();

  const onChangeToggle = () => {
    console.log(isCelsius);
    dispatch(updateFormat(!isCelsius));
  };

  return (
    <form className='tabber'>
      <label htmlFor='t1' className='t1'>
        °C
      </label>
      <input
        id='t1'
        name='degrees-format'
        type='radio'
        defaultChecked
        onChange={() => onChangeToggle()}
      />
      <label htmlFor='t2' className='t2'>
        °F
      </label>
      <input
        id='t2'
        name='degrees-format'
        type='radio'
        onChange={() => onChangeToggle()}
      />
      <div className='blob'></div>
    </form>
  );
};

export default TempFormatToggle;
