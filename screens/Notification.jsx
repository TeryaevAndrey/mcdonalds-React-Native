import React from "react";
import styled from "styled-components/native";
import NotificationHeader from "../components/Notification/NotificationHeader";
import NotificationList from "../components/Notification/NotificationList";
import Sidebar from "../components/Sidebar/Sidebar";

const Wrapper = styled.View`
  height: 100%;
  display: flex;
  align-items: center;
  background: #fff;
`;

const Notification = ({ navigation }) => {
  return (
    <Wrapper>
      <NotificationHeader navigation={navigation} />
      <NotificationList />
      <Sidebar />
    </Wrapper>
  );
};

export default Notification;
