import React from 'react';

import { OverlayContainer, Container } from './styles';

function NewTaskOverlay(props) {
  console.log(props)
  return (
    <OverlayContainer display={props.overlayDisplay}>
      <Container></Container>
    </OverlayContainer>
  );
}

export default NewTaskOverlay;
