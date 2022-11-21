import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;


const LanguageButton = ({language, setLanguage}) => {
  const handleChange = (_event, newVal) => {
    setLanguage(newVal);
  };

  return (
    <Wrapper>
      <ToggleButtonGroup
        color="primary"
        value={language}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        size='small'
      >
        <ToggleButton value="HE">HE</ToggleButton>
        <ToggleButton value="EN">EN</ToggleButton>
      </ToggleButtonGroup>
    </Wrapper>

  );
};

LanguageButton.propTypes = {
  language: PropTypes.string,
  setLanguage: PropTypes.func,
};

export default LanguageButton;
