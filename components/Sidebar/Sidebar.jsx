import React from 'react';
import styled from "styled-components/native";
import SidebarItem from './SidebarItem';
import IconOcticons from "react-native-vector-icons/Octicons";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconIonicons from "react-native-vector-icons/Ionicons";

const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 50px;
  background: #F6F6F6;
  position: absolute;
  bottom: 40px;
  max-width: 375px;
  width: 100%;
  min-height: 60px;
  padding: 14px 32px;
`;

const Sidebar = () => {
  return (
    <Wrapper>
      <SidebarItem img={<IconOcticons name="home" size="30" color="#D52B1E" />} />
      <SidebarItem img={<IconFontAwesome5 name="clipboard-list" size="30" color="#8A8A8A" />} />
      <SidebarItem img={<IconFontisto name="heart-alt" size="25" color="#8A8A8A" />} />
      <SidebarItem img={<IconIonicons name="notifications-outline" size="30" color="#8A8A8A" />} />
    </Wrapper>
  );
};

export default Sidebar;