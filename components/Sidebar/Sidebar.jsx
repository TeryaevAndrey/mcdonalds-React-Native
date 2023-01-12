import React from 'react';
import styled from "styled-components/native";
import SidebarItem from './SidebarItem';
import IconOcticons from "react-native-vector-icons/Octicons";
import IconFontAwesome5 from "react-native-vector-icons/FontAwesome5";
import IconFontisto from "react-native-vector-icons/Fontisto";
import IconIonicons from "react-native-vector-icons/Ionicons";
import Profile from './Profile';
import { useDispatch, useSelector } from 'react-redux';
import {setActivePage} from "../../store/sidebarSlice";

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

const Sidebar = ({navigation}) => {
  const dispatch = useDispatch();
  const activePage = useSelector(state => state.sidebar.activePage);

  return (
    <Wrapper>
      <SidebarItem onPress={() => {
        dispatch(setActivePage(0))
        navigation.navigate("Home")
      }} img={<IconOcticons name="home" size="30" color={activePage === 0 ? "#D52B1E" : "#8A8A8A"} />} />
      <SidebarItem onPress={() => {
        dispatch(setActivePage(1))
      }} img={<IconFontAwesome5 name="clipboard-list" size="30" color={activePage === 1 ? "#D52B1E" : "#8A8A8A"} />} />
      <SidebarItem onPress={() => {
        dispatch(setActivePage(2))
        navigation.navigate("Favourite")
      }} img={<IconFontisto name="heart-alt" size="25" color={activePage === 2 ? "#D52B1E" : "#8A8A8A"} />} />
      <SidebarItem onPress={() => {
        dispatch(setActivePage(3))
        navigation.navigate("Notification")
      }} img={<IconIonicons name="notifications-outline" size="30" color={activePage === 3 ? "#D52B1E" : "#8A8A8A"} />} />
      <Profile onPress={() => {
        dispatch(setActivePage(4))
        navigation.navigate("Profile")
      }} />
    </Wrapper>
  );
};

export default Sidebar;