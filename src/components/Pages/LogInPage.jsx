// import React from "react";
// import { styled } from "styled-components";
// // import { StyledFormContainer } from "../AddEmployee/StyledComponents";

// const StyledLogin = styled.div`
//   width: 20%;
//   margin: 30px auto;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
// `;

// export default function LogInPage() {
//   return (
//     <StyledLogin>
//       <input type="text" placeholder="insert username" />
//       <input type="text" placeholder="insert PassWord" />
//       <input type="button" value=" Login" />
//     </StyledLogin>
//   );
// }
import React from "react";
import Container from "../Container/Container";
import LogIn from "../LogIn/LogIn";

export default function HomePage() {
  return (
    <Container>
      <LogIn />
    </Container>
  );
}
