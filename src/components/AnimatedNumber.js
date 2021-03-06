import React, { useRef, useEffect } from 'react';
import { Animated, TextInput } from 'react-native';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const AnimatedInput = Animated.createAnimatedComponent(TextInput);

export const AnimatedNumber = ({
  fontSize,
  duration,
  delay,
  numberColor,
  number
}) => {
  const inputRef = useRef();
  const animatedValue = useRef(new Animated.Value(0)).current;
  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true
    }).start();
  };

  useEffect(() => {
    animation(number);

    animatedValue.addListener(({ value }) => {
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: `${Math.round(value)}`
        });
      }

      return () => animatedValue.removeAllListeners();
    });
  }, [number]);

  return (
    <StyledTextInput
      ref={inputRef}
      fontSize={fontSize}
      color={numberColor}
      underlineColorAndroid='transparent'
      editable={false}
      defaultValue='0'
    />
  );
};

const StyledTextInput = styled(AnimatedInput)`
  font-size: ${({ fontSize }) => fontSize}px;
  font-weight: bold;
  text-align: center;
  color: ${({ color }) => color};
`;

AnimatedNumber.propTypes = {
  number: PropTypes.number,
  fontSize: PropTypes.number,
  duration: PropTypes.number,
  delay: PropTypes.number,
  numberColor: PropTypes.string
};

AnimatedNumber.defaultProps = {
  number: 65,
  fontSize: 40,
  duration: 500,
  delay: 0,
  numberColor: '#13547a'
};

export default AnimatedNumber;
