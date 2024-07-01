import React, { useState } from "react";
import NavbarOfVS from "./NavbarVS";
import styled from "styled-components";
import ListServiceVS from "./ListServiceVS";
const ManagePageContainer = styled.div`
  display: flex;
`;

function VStaffPage() {
  return (
    <ManagePageContainer>
      <NavbarOfVS />
      <ListServiceVS />
    </ManagePageContainer>
  );
}

export default VStaffPage;
