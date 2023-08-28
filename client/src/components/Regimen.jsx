import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Regimen.scss'; // You can style this component using CSS
import Banner from '../assets/Supr-Skin-facebook-cover-double.jpg';
import Logo from '../assets/SuprSkin.png';
import axios from 'axios'
import CategoryIcon from './CategoryIcon';
import RegimenQuestionnaire from './RegimenQuestionnaire';

const allRegimens = [
  {
    title: 'Ashwaghanda Regimen',
    products: ['Ashwaghanda Serum', 'Ashwaghanda Scrub', 'Ashwaghanda Tea']
  },
  {
    title: 'Gotukola Regimen',
    products: ['Gotukola Serum', 'Gotukola Scrub', 'Gotukola Tea']
  }
];

function Regimen() {
  const [regimens, setRegimens] = useState();
  const [errorHandling, setErrorHandling] = useState(true);
  const [regimenQuestion, setRegimenQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({
    1: '',
    2: '',
    3: '',
    4: ''
  });
  const [answers, setAnswers] = useState({
    1: '',
    2: '',
    3: '',
    4: ''
  });

  useEffect(() => {
    axios
      .get('http://localhost:8001/regimens')
      .then((res) => {
        console.log(res.data)
        setRegimens(res.data)
      })
      .catch((error) => {
        console.error('Error fetching regimens:', error);
      });
  }, [])

  const handleQuestionClick = () => {
    if (regimenQuestion === 0) return setRegimenQuestion(prev => prev + 1)
    if (selectedOptions[regimenQuestion]) {
    regimenQuestion && (
    setAnswers(prevAnswers => ({...prevAnswers,
    [regimenQuestion]: selectedOptions
  }))
    )
    setErrorHandling(true)
    setRegimenQuestion(prev => prev + 1)
    return
}
    if (regimenQuestion > 4) {
      setRegimenQuestion(0);
      setSelectedOptions({
        1: '',
        2: '',
        3: '',
        4: ''
      })
      return;
    }
setErrorHandling(false)
}

  const handleSubmit = e => {
    e.preventDefault();
    // Process the answers
    console.log('Answers:', answers);
  };

  return (
    <div className="main-page">
      <div className='title-holder'>
        <h4>Regimen Finder</h4>
      </div>
      <div className="banner-holder-2">
        <img src={Banner} alt="SuprSkin banner" className='banner' />
        <div className="center-overlay">
          {regimenQuestion === 0 && (
          <p className='pointer' onClick={handleQuestionClick}>Find My Regimen</p>
        )}
        <RegimenQuestionnaire regimenQuestion={regimenQuestion} handleQuestionClick={handleQuestionClick} setSelectedOptions={setSelectedOptions} errorHandling={errorHandling}/>
        </div>
      </div>
      {regimens && (
        <div className='categories-holder'>
          {regimens.regimens.map(regimen => (
            <CategoryIcon key={regimen.id} title={regimen.regimen_title} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Regimen;


{/* <div className="main-page">
<div className='title-holder'>
  <h4>Regimen Finder</h4>
</div>
{regimens && (
  <div className='regimen-page-holder'>
    {regimens.regimens.map(regimen => (
      <div key={regimen.regimen_id} className='regimen'>
        <h2>{regimen.regimen_title}</h2>
        {regimen.product_info && regimen.product_info.map(product => {
          const [productId, productName] = product.split(':');
          return (
            <p key={productId}>
              <Link to={`/product/${productId}`}>{productName}</Link>
            </p>
          );
        })}
      </div>
    ))}
  </div>
)}
</div> */}