import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    top: 10px; 
`;

export const HeaderWrap = styled.header`
    position: sticky;
    top: 10px;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 64px;
    margin-right: 24px;
    margin-left: 24px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
    border-radius: 50px;
    background-color: white;
`;

export const NavWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 280px;
`;

export const Link = styled(NavLink)`
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;

    &:hover {
    color: white;
    }

  &.active {
    color: white;
    background-color: #d2b8f4;
  }
`;

export const ContactBtn = styled.button`
    display: flex;
        padding: 8px 16px;
    width: 50px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 16px;
    background: #FA5255;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.10);
    color: white;

    &:hover {
    color: white;
    }

  &.active {
    color: white;
    background-color: #d2b8f4;
  }
`;
