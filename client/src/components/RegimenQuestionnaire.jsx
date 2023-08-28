import React, { Fragment, useEffect, useState } from 'react';
import './RegimenQuestionnaire.scss'; // You can style this component using CSS
import Banner from '../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../assets/SuprSkin.png';
import axios from 'axios'


function RegimenQuestionnaire({regimenQuestion, handleQuestionClick, setSelectedOptions, errorHandling}) {
console.log(regimenQuestion)
console.log(errorHandling)

  return (
    <Fragment>
    {regimenQuestion === 1 && ( <div className='regimen-finder'>
    <div className='question'>
      <p>Question 1: When do you do most of your skin care routine?</p>
      <label>
        <input type='radio' name='question1' value='red' onChange={e => {setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [regimenQuestion]: e.target.value}))}}/>
        Morning
      </label>
      <label>
      <input type='radio' name='question1' value='blue' onChange={e => {setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [regimenQuestion]: e.target.value}))}}/>
        Night
      </label>
      <p className='pointer' onClick={() => handleQuestionClick(1)}>Next</p>
      {!errorHandling && <p className='error'>Please select an option</p>}
    </div>
  </div>
)}
{regimenQuestion === 2 && (
  <div className='question'>
  <p>Question 2: Do you have sensitive skin?</p>
  <label>
    <input type='radio' name='question1' value='red' onChange={e => {setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [regimenQuestion]: e.target.value}))}}/>
    Yes
  </label>
  <label>
    <input type='radio' name='question1' value='blue' onChange={e => {setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [regimenQuestion]: e.target.value}))}}/>
    No
  </label>
  <p className='pointer' onClick={() => handleQuestionClick(2)}>Next</p>
  {!errorHandling && <p className='error'>Please select an option</p>}
</div>
)}
   {regimenQuestion === 3 && (
  <div className='question'>
  <p>Question 3: What is your main goal?</p>
  <label>
    <input type='radio' name='question1' value='red' onChange={e => {setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [regimenQuestion]: e.target.value}))}}/>
    Results
  </label>
  <label>
    <input type='radio' name='question1' value='blue' onChange={e => {setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [regimenQuestion]: e.target.value}))}}/>
    Simplicity
  </label>
  <p className='pointer' onClick={() => handleQuestionClick(3)}>Next</p>
  {!errorHandling && <p className='error'>Please select an option</p>}
</div>
)}
   {regimenQuestion === 4 && (
  <div className='question'>
  <p>Question 4: How many skin care products do you currently use?</p>
  <label>
    <input type='radio' name='question1' value='red' onChange={e => {setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [regimenQuestion]: e.target.value}))}}/>
    4 or less
  </label>
  <label>
    <input type='radio' name='question1' value='blue' onChange={e => {setSelectedOptions(prevSelectedOptions => ({...prevSelectedOptions, [regimenQuestion]: e.target.value}))}}/>
    5 or more
  </label>
  <p className='pointer' onClick={() => handleQuestionClick(4)}>Next</p>
  {!errorHandling && <p className='error'>Please select an option</p>}
</div>
)}
{regimenQuestion > 4 && (
  <div className='question'>
  <p className='pointer' onClick={() => handleQuestionClick()}>Click To Restart</p>
</div>
)}
</Fragment>
  );
}

export default RegimenQuestionnaire;
