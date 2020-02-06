import styled from 'styled-components';

export const Container = styled.div`
  padding: 2vw;
`;

export const FieldName = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 25px;
  margin: 20px 0;
  color: #999;
  display: flex;
  flex-flow: row no-wrap;
  align-items: flex-end;
  h1 {
    margin-left: 20px;
  }
`;

export const TagArea = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  h1 {
    display: block;
  }
  span {
    font-size: 30px;
    line-height: 20px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const Tag = styled.div`
  min-width: 60px;
  height: 20px;
  background: ${props => props.color};
  margin: 0 10px 10px 0;
  padding: 1vw;
  border-radius: 10px;
  cursor: pointer;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeadlineArea = styled.div`
  text-align: center;
  width: 30%;
  height: 10px;
  line-height: 10px;
  color: white;
  font-size: 20px;
  background: red;
  padding: 10px;
  border-radius: 20px;
  cursor: pointer;
`;


export const DescriptionArea = styled.div`
  p {
    font-size: 15px;
    font-family: 'Roboto', sans-serif;
    margin-left: 45px;
    text-align: justify;
  }
  textarea {
    width: calc(100% - 30px);
    height: 70px;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    padding: 15px;
  }
`;

export const ActivityArea = styled.div`
  textarea {
      width: calc(100% - 30px);
      height: 20px;
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      padding: 15px;
  }
`;
