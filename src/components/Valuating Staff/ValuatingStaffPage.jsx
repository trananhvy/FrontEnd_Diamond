import React, { useState } from "react";
import NavbarOfManager from "./NavbarVS";
import styled from "styled-components";
import ListServiceVS from "./ListServiceVS";
const ManagePageContainer = styled.div`
  display: flex;
`;

function ValuatingStaffPage() {
  return (
    <ManagePageContainer>
      <NavbarOfManager />
      <ListServiceVS />
    </ManagePageContainer>
  );
}

export default ValuatingStaffPage;
