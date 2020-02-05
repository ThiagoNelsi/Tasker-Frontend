import styled from 'styled-components';


export const Header = styled.div`
  background: ${props => props.theme.primary};
  height: 5vh;
`;

export const Logo = styled.div`
  font-size: 35px;
  font-family: 'Zhi Mang Xing', cursive;
  color: white;
  margin-left: 3vw;
  line-height: 5vh;
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

export const Card = styled.div`
  background: ${props => props.theme.cardColor};
  margin-top: 1vh;
  padding: 2vh;
  border-radius: 9px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
`;

export const Tags = styled.div`
  width: 100%;
  height: 1vh;
  display: flex;
  flex-flow: row;
  justify-content: left;
`;

export const Tag = styled.div`
  background: ${props => props.color};
  width: 20%;
  margin: 0 0.5vw 0 0;
  border-radius: 1vh;
  cursor: pointer;

`;

export const CardTitle = styled.div`
  color: ${props => props.theme.secondary};
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  padding: 1vw 0vw;
  cursor: pointer;
`;

export const Info = styled.div`
  height: 30px;
  background: '#000';
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
`;

export const InfoItem = styled.div`
  margin-right: 15px;
  cursor: pointer;
`;

export const Deadline = styled.div`

  background: ${props => props.priority};
  padding: 3px 10px;
  border-radius: 10px;
  align-content: center;

  span {
    margin-left: 5px;
    color: #f5f5f5;
  }

`;

export const Comments = styled.div`
  span {
    margin-left: 3px;
    color: #999;
  }
`;

export const CheckBox = styled.div`
  span{
    margin-left: 3px;
    color: #999;
  }
`;

export const NewCard = styled.div`
  padding: 20px 0 10px 2vh;
  cursor: pointer;
  span {
    color: #ccc;
    margin-left: 10px;
  }
`;

export const TaskDetailContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${ props => props.display};
  justify-content: center;
  align-items: center;
`;

export const TaskDetailBox = styled.div`
  width: 65vw;
  height: 89vh;
  background: ${props => props.theme.detailBoxBackground};
  padding: 2vw;
  display: grid;
  grid-template-columns: 6fr 2fr;
  grid-template-rows: 20px calc(100% - 20px);
  grid-template-areas:  "header header"
                        "main aside";
`;

export const TaskDetailHeader = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-family: 'Roboto', cursive;

  span {
    font-size: 50px;
    font-weight: 100;
    color: #ccc;
    transform: rotate(45deg);
    cursor: pointer;
  }
`;

export const TaskTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  h1 {
    font-size: 25px;
    font-weight: bold;
    color: ${props => props.theme.secondary};
    margin-left: 1vw;
  }
`;

export const MainContent = styled.div`
  grid-area: main;
  border: 1px solid #000;
`;

export const AsideContent = styled.div`
  grid-area: aside;
  border: 1px solid #000;
`;

export const TagAndDeadline = styled.div`
  display: flex;
  flex-flow: row wrap;
`;
