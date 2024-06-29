import React, { useState } from "react";
import NavbarOfManager from "./NavbarOfManager";
import styled from "styled-components";
import ListServiceOfManager from "./ListServiceOfManager";

const ManagePageContainer = styled.div`
  display: flex;
`;

function ManagePage() {
  return (
    <ManagePageContainer>
      <NavbarOfManager />
      <ListServiceOfManager />
    </ManagePageContainer>
  );
}

export default ManagePage;
