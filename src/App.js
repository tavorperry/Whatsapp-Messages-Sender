import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

import {getAnalytics, logEvent} from 'firebase/analytics';
import {initializeApp} from 'firebase/app';
import Button from '@mui/material/Button';
import {useCookies} from 'react-cookie';

import {firebaseConfig} from './properties';
import LanguageButton from './LanguageButton';

import './index.css';

const texts = {
  HE: {
    h2: 'שליחת הודעות וואטסאפ בקלות',
    h3: 'ללא הוספה לאנשי הקשר',
    alert: 'הכנס מספר טלפו תקין',
    placeholder: 'הקלד/הדבק מספר טלפון',
    button: 'שליחת הודעה',
  },
  EN: {
    h2: 'Send Whatsapp messages easily',
    h3: 'Without adding contacts',
    alert: 'Enter A Valid Phone Number',
    placeholder: 'Enter Phone Number',
    button: 'Send Message',
  },
};

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
// End Initializing Firebase

// Helpers
const validatePhoneNumber = (number) => {
  return number && number !== '' &&
      (number.length === 9 && number.charAt(0) !== '0' || // e.g 547111111
          number.length === 10 && number.charAt(0) === '0' || // e.g 0547111111
        number.length >= 12 && number.charAt(0) === '+'); // e.g +972547111111
};


const App = () => {
  const [cookies, setCookie] = useCookies(['wpsender']);
  const [input, setInput] = useState('');
  const langFromCookie = cookies.Language;
  const [language, setLanguage] = useState(langFromCookie ?? 'HE');

  useEffect(() => {
    setCookie('Language', language, {path: '/'});
  }, [language]);

  const handleChangeLanguage = (value) => {
    if (value === language || !value) return; // Do Nothing
    setLanguage(value);
  };

  const handleEnterKey = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    let cleanNumString = input;
    if (input && input !== '') {
      cleanNumString = input.replaceAll(/-/g, '')
          .replaceAll(/\(/g, '')
          .replaceAll(/' '/g, '')
          .replaceAll(/\)/g, '');
    }
    if (!validatePhoneNumber(cleanNumString)) {
      logEvent(analytics, 'invalid_number');
      alert(texts[language].alert);
      return;
    }
    const number = cleanNumString.charAt(0) === '+' ? cleanNumString :
      `+${country}${+cleanNumString}`;
    const url = `${apiUrl}${number}`;
    logEvent(analytics, 'submit_button');
    window.open(url);
  };

  const handleChange = (num) => {
    setInput(num.target.value);
  };

  return (
    <Wrapper>
      <div>
        {/* eslint-disable-next-line max-len */}
        <LanguageButton language={language} changeLanguage={handleChangeLanguage}/>
        <Logo src='../whatsapp_logo.png' alt="Whatsapp Logo" />
        <h2>{texts[language].h2}</h2>
        <h3>{texts[language].h3}</h3>
      </div>
      <InputWrapper>
        <StyledInput
          type='tel'
          pattern="[0-9]*"
          inputmode="tel"
          placeholder={texts[language].placeholder}
          required
          autoFocus
          maxLength='15'
          onChange={handleChange}
          onKeyDown={handleEnterKey}
        />
      </InputWrapper>
      <ButtonWrapper>
        <Button variant='contained' color='success' onClick={handleSubmit}>
          <b>{texts[language].button}</b>
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default App;
