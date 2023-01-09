import React from "react";
import { Path, Svg } from "react-native-svg";
import styled from "styled-components/native";

const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 51px;
  background: #fff;
  padding: 14px 26px;
  margin-top: ${props => props.mt ? "4px" : "0"}
`;

const TitleBlock = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 500;
  line-height: 25px;
  color: #525252;
  margin-left: 8px
`;

const ProfileBtn = ({ img, title, mt=false }) => {
  return (
    <Wrapper mt={mt}>
      <TitleBlock>
        {img}
        <Title>{title}</Title>
      </TitleBlock>
      <Svg
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M0.304996 19.6979C-0.0669249 19.3295 -0.100261 18.7513 0.213578 18.3479L0.307785 18.2425L9.46534 9.27178C9.87525 8.86988 10.5375 8.87125 10.9447 9.27452C11.1468 9.47479 11.25 9.73815 11.25 10.0001C11.25 10.2207 11.1784 10.4404 11.0359 10.6234L10.9419 10.7285L1.78431 19.6993C1.3744 20.1012 0.712122 20.0998 0.304996 19.6979ZM0.307924 1.75884C-0.103385 1.35693 -0.100596 0.705388 0.305136 0.303487C0.678335 -0.0661799 1.26593 -0.098138 1.67701 0.207612L1.78445 0.299372L7.86625 6.25656C8.07121 6.45683 8.17438 6.72156 8.17438 6.98492C8.17438 7.24691 8.07121 7.51027 7.86904 7.71054C7.49584 8.0802 6.90824 8.11216 6.49716 7.80641L6.38972 7.71465L0.307924 1.75884Z"
          fill="#525252"
        />
      </Svg>
    </Wrapper>
  );
};

export default ProfileBtn;
