import React from "react";
import { Path, Svg, SvgUri } from "react-native-svg";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
  position: relative;
`;

const Back = ({ onPress, color, style }) => {
  return (
    <Wrapper onPress={onPress} style={style}>
      <Svg
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M23 12.0002C23 12.6772 22.6009 13.2364 22.0856 13.3184L21.9545 13.3288L1.04545 13.3288C0.621697 13.3288 0.241152 13.0046 0.0794546 12.5068C0.0264849 12.3439 0 12.172 0 12.0002C0 11.7123 0.073569 11.427 0.21506 11.1932L0.308061 11.0596L8.74139 0.386776C9.14982 -0.130478 9.81194 -0.12871 10.219 0.390316C10.5921 0.867714 10.6232 1.61453 10.3101 2.1341L10.2162 2.26979L3.57685 10.6716L21.9545 10.6716C22.5316 10.6716 23 11.2668 23 12.0002ZM10.2163 21.7301C10.6261 22.2473 10.6261 23.0888 10.2191 23.6096C9.846 24.0853 9.25854 24.1265 8.84756 23.7316L8.74014 23.6131L4.08996 17.7267C3.88365 17.4663 3.7819 17.1262 3.7819 16.7843C3.7819 16.4459 3.88365 16.1076 4.08717 15.8472C4.46028 15.3698 5.04657 15.3285 5.45736 15.7247L5.56475 15.8437L10.2163 21.7301Z"
          fill={`${color || "white"}`}
        />
      </Svg>
    </Wrapper>
  );
};

export default Back;
