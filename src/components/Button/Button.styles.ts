import styled from "styled-components";

export const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 40px;
  transition: transform 0.3s ease-in-out;
  position: absolute;
  right: 1rem;
  top: 2rem;
  animation: aTwsK 3s ease-in-out infinite;
  filter: drop-shadow(1px 1px 2px ${(props) => props.theme.primaryColor});

  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 32px;
    top: 4rem;
  }
`;
