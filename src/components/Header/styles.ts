import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  location: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      a {
        color: #fff;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;
        padding-bottom: 10px;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }

        &.dash {
          ${({ location }) =>
            location === '/' &&
            css`
              border-bottom: 3px solid #ff872c;
              cursor: default;
              &:hover {
                opacity: 1;
              }
            `};
        }
        &.import {
          ${({ location }) =>
            location === '/import' &&
            css`
              border-bottom: 3px solid #ff872c;
              cursor: default;
              &:hover {
                opacity: 1;
              }
            `};
        }
      }
    }
  }
`;
