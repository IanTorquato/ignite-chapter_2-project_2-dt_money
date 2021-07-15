import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    background-color: #e7e9ee;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 400;
    height: 4rem;
    padding: 0 1.5rem;
    width: 100%;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    background-color: var(--green);
    border: 0;
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    height: 4rem;
    margin-top: 1.5rem;
    padding: 0 1.5rem;
    transition: filter 0.2s;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionModalContainer = styled.div`
  display: grid;
  margin: 1rem 0;
  gap: 0.5rem;
  grid-template-columns: 1fr 1fr;
`

type RadioBoxProps = { 
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
  align-items: center;
  background-color: ${props => props.isActive 
    ? transparentize(0.8, colors[props.activeColor])
    : 'transparent'
  };
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  display: flex;
  height: 4rem;
  justify-content: center;
  transition: border-color 0.2s;

  img {
    height: 20px;
    width: 20px;
  }

  span {
    color: var(--text-title);
    display: inline-block;
    font-size: 1rem;
    margin-left: 1rem;
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`
