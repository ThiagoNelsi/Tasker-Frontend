import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.cardColor};
  margin-top: 1vh;
  padding: 2vh;
  border-radius: 9px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  cursor: grab;
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
  flex-flow: row wrap;
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
