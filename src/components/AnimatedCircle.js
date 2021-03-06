import React, { useRef, useEffect, useMemo } from 'react';
import { Animated, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import Svg, { G, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';

import AnimatedNumber from './AnimatedNumber';

const AnimatedLine = Animated.createAnimatedComponent(Circle);

export const AnimatedCircle = ({
  percentage,
  radious,
  strokeWidth,
  duration,
  color,
  beginGradientColor,
  endGradientColor,
  delay,
  numberColor,
  max,
  children,
  showNumber
}) => {
  const circleRef = useRef();
  const inputRef = useRef();
  const calculatedStrokeWidth = strokeWidth === 0 ? radious / 4 : strokeWidth;
  const halfCircle = radious + calculatedStrokeWidth;
  const contentSize = (radious - calculatedStrokeWidth) * 2;
  const animatedValue = useRef(new Animated.Value(0)).current;
  const circleCircunference = 2 * Math.PI * radious;
  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    animation(percentage);

    animatedValue.addListener(({ value }) => {
      const maxPercentage = (100 * value) / max;
      const strokeDashoffset =
        circleCircunference - (circleCircunference * maxPercentage) / 100;
      if (circleRef?.current)
        circleRef.current.setNativeProps({
          strokeDashoffset
        });

      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(value)}`
        });
      }

      return () => animatedValue.removeAllListeners();
    });
  }, [max, percentage]);

  const hasGradient = useMemo(
    () => beginGradientColor !== '' && endGradientColor !== '',
    [beginGradientColor, endGradientColor]
  );

  return (
    <StyledContainer>
      <Svg
        width={radious * 2}
        height={radious * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        {hasGradient && (
          <Defs key={'gradient'}>
            <LinearGradient
              id={'gradient'}
              x1={'0%'}
              y={'0%'}
              x2={'0%'}
              y2={'100%'}
            >
              <Stop offset={'0%'} stopColor={beginGradientColor} />
              <Stop offset={'100%'} stopColor={endGradientColor} />
            </LinearGradient>
          </Defs>
        )}
        <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx='50%'
            cy='50%'
            stroke={color}
            strokeWidth={calculatedStrokeWidth}
            r={radious}
            fill='transparent'
            strokeOpacity={0.2}
          />
          <AnimatedLine
            ref={circleRef}
            cx='50%'
            cy='50%'
            stroke={hasGradient ? 'url(#gradient)' : color}
            strokeWidth={calculatedStrokeWidth}
            r={radious}
            fill='transparent'
            strokeDasharray={circleCircunference}
            strokeDashoffset={circleCircunference}
            strokeLinecap='round'
          />
        </G>
      </Svg>
      <StyledContentContainer
        contentSize={contentSize}
        strokeWidth={calculatedStrokeWidth}
      >
        {children}
        {showNumber && (
          <AnimatedNumber
            number={percentage}
            fontSize={radious / 2}
            numberColor={numberColor}
          />
        )}
      </StyledContentContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const StyledContentContainer = styled.View.attrs(() => ({
  ...StyleSheet.absoluteFillObject,
  justifyContent: 'center',
  alignItems: 'center'
}))`
  position: absolute;
  top: ${({ strokeWidth }) => strokeWidth}px;
  left: ${({ strokeWidth }) => strokeWidth}px;
  width: ${({ contentSize }) => contentSize}px;
  height: ${({ contentSize }) => contentSize}px;
`;

AnimatedCircle.propTypes = {
  percentage: PropTypes.number,
  radious: PropTypes.number,
  strokeWidth: PropTypes.number,
  duration: PropTypes.number,
  color: PropTypes.string,
  beginGradientColor: PropTypes.string,
  endGradientColor: PropTypes.string,
  delay: PropTypes.number,
  numberColor: PropTypes.string,
  max: PropTypes.number,
  showNumber: PropTypes.bool
};

AnimatedCircle.defaultProps = {
  percentage: 65,
  radious: 40,
  strokeWidth: 0,
  duration: 500,
  color: '#13547a',
  beginGradientColor: '',
  endGradientColor: '',
  delay: 0,
  numberColor: '#13547a',
  max: 100,
  showNumber: false
};

export default AnimatedCircle;
