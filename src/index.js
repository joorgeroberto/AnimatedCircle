import React from 'react';
import { Text } from 'react-native';
import AnimatedCircle from './components/AnimatedCircle';
import AnimatedNumber from './components/AnimatedNumber';
import styled from 'styled-components/native';

const App = () => {
  return (
    <AppContainer>
      <AnimatedCircle color={'red'} showNumber numberColor={'red'} />

      <AnimatedCircle radious={75} percentage={75}>
        <StyledBackground />
      </AnimatedCircle>

      <AnimatedCircle
        radious={150}
        strokeWidth={30}
        percentage={95}
        showNumber
        numberColor={'#13547a'}
        color={'#13547a'}
        beginGradientColor={'#13547a'}
        endGradientColor={'#80d0c7'}
      />
    </AppContainer>
  );
};

const AppContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: space-around;
  align-items: center;
`;

const StyledBackground = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: #13547a;
  opacity: 0.1;
`;

export default App;
