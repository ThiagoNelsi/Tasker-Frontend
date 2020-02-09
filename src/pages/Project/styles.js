import styled from 'styled-components';

export const Header = styled.div`
  background: ${props => props.theme.primary};
  height: 5vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 35px;
  font-family: 'Zhi Mang Xing', cursive;
  color: white;
  margin-left: 3vw;
  line-height: 5vh;
`;

export const ThemeSelector = styled.div`
  margin-right: 3vw;
  h1 {
    color: #fff;
    font-size: 20px;
    font-family: 'Roboto', cursive;
    line-height: 5vh;
    cursor: pointer;
  }
`;

export const ThemeBox = styled.div`
  display: ${props => props.display};
  flex-flow: row wrap;
  justify-content: space-around;
  width: 230px;
  height: fit-content;
  background: #fff;
  position: absolute;
  right: 0;
  top: 5vh;
  padding: 1vw 1vw;
`;

export const Container = styled.div`
  background: ${props => props.theme.background};
  width: 100vw;
  height: 100vh;
`;

export const Tasks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content:space-between;
  padding: 3vh;
`;

export const Content = styled.div`
  width: 32%;
  display: block;
  border-radius: 1vw;
`;

export const Box = styled.div`
  background: ${props => props.theme.boxColor};
  border-radius: 1vw;
  padding: 1vw;
`;

export const BoxTitle = styled.div`
  font-size: 25px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  text-align: center;
  padding-bottom: 1vh;
  border-bottom: 1px solid #ccc;
`;

export const NewCard = styled.div`
  padding: 20px 0 10px 2vh;
  cursor: pointer;
  span {
    color: #ccc;
    margin-left: 10px;
  }
`;
