import styled from 'styled-components';

export const OverlayContainer = styled.div`
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: ${ props => props.display};
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: ${props => props.theme.detailBoxBackground};
  width: 65vw;
  height: 40vh;
  transform: translateY(-50%);
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  s
`;
