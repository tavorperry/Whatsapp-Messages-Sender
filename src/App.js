import React, {useState} from 'react';
import styled from 'styled-components';
import {initializeApp} from 'firebase/app';
import {getAnalytics, logEvent} from 'firebase/analytics';
import Button from '@mui/material/Button';

import {firebaseConfig} from './properties';

import './index.css';

const Wrapper = styled.div`
    height: 1000px;
    width: 100%;
    text-align: center;
    margin: 25px auto;
`;

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 10px;
`;
const ButtonWrapper = styled.div`
    margin-top: 40px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
`;

const Logo = styled.img`
    height: 75px;
    width: 75px;
`;
const StyledInput = styled.input`
    display: block;
    padding: .5rem .8rem .5rem .8rem;
    margin: .9vw 0 ;
    border:0;
    border-radius: 5px;
    font-size: 20px;
    ::placeholder,
    ::-webkit-input-placeholder {
      text-align: center;
    }
    :-ms-input-placeholder {
       text-align: center;
    }
`;

const apiUrl = 'https://wa.me/';
const country = 972;

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'main_page_loaded');


const validatePhoneNumber = (number) => {
  return number &&
      number !== '' &&
      (number.length === 9 && number.charAt(0) !== '0' ||
          number.length === 10 && number.charAt(0) === '0');
};

const App = () => {
  const [input, setInput] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!validatePhoneNumber(input)) {
      logEvent(analytics, 'invalid_number');
      alert('הכנס מספר טלפו תקין');
      return;
    }
    const number = `+${country}${+input}`;
    const url = `${apiUrl}${number}`;
    logEvent(analytics, 'submit_button');
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (num) => {
    setInput(num.target.value);
  };

  return (
    <Wrapper>
      <div>
        <Logo src={'https://img.icons8.com/color/512/whatsapp.png'} alt="Logo" />
        <h2>שליחת הודעות וואטסאפ בקלות</h2>
        <h3>ללא הוספה לאנשי הקשר</h3>
      </div>
      <InputWrapper>
        <StyledInput
          type='text'
          placeholder='הכנס מספר טלפון'
          required
          autoFocus
          maxLength='10'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button variant='contained' color='success' onClick={handleSubmit}>
          <b>שליחת הודעה</b>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default App;
