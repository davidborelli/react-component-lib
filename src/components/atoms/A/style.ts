import styled from 'styled-components';

type AStyleProps = {
  lineType: 'dotted' | 'dashed' | 'solid';
};

export const Link = styled.a<AStyleProps>`
  transition: background-color 600ms ease, transform 200ms ease, box-shadow 400ms ease-out;
  word-break: break-word;
  transition: color 250ms ease-in-out;
  text-decoration: underline;
  color: red;
  font-size: 23px;

  &.is--underline {
    border-bottom-width: 1px;
  }

  &.has--animation:hover {
    box-shadow: -6px 6px 0px 0px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    transition: background-color 600ms ease, transform 200ms ease, box-shadow 400ms ease-out;
  }
`;
