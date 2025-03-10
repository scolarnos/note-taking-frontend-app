import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ isPinned, onChange }) => {
  return (
    <StyledWrapper>
      <label className="container">
        <input type="checkbox" checked={isPinned} onChange={onChange} />
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 75 100" className="pin">
          <line strokeWidth={12} stroke="black" y2={100} x2={37} y1={64} x1={37} />
          <path strokeWidth={10} stroke="black" d="M16.5 36V4.5H58.5V36V53.75V54.9752L59.1862 55.9903L66.9674 67.5H8.03256L15.8138 55.9903L16.5 54.9752V53.75V36Z" />
        </svg>
      </label>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container input {
    display: none;
  }
  .pin {
    width: 15px;
    height: auto;
    transform: rotate(35deg);
  }
  .container {
    width: 30px;
    height: 30px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 10px;
  }
  .container input:checked ~ .pin {
    fill: rgb(179, 139, 255);
    stroke: white;
  }
  .container input:checked ~ .pin line {
    stroke: rgb(179, 139, 255);
  }
  .container input:checked ~ .pin path {
    stroke: rgb(179, 139, 255);
  }
  .container:hover {
    background-color: #979797;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.041);
  }
  .container:active {
    transform: scale(0.9);
  }
`;

export default Checkbox;