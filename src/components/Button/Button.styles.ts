import styled from "styled-components";

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0.5rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;

  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    top: 5rem;
    font-size: 1.7rem;
  }
`;
