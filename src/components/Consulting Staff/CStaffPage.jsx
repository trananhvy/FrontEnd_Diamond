import React, { useState } from "react";
import NavbarOfCS from "./NavbarCS";
import styled from "styled-components";
import ListServiceCS from "./ListServiceCS";
const ManagePageContainer = styled.div`
  display: flex;
`;

function CStaffPage() {
  return (
    <ManagePageContainer>
      <NavbarOfCS />
      <ListServiceCS />
    </ManagePageContainer>
  );
}

export default CStaffPage;
