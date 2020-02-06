import styled from 'styled-components';

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
