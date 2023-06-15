// import Button from '@mui/material/Button';
// import { useSelector, useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/authAsyncActions';
// import { getUser } from 'redux/auth/authUtils';
// import styled from 'styled-components';

// export const UserMenu = () => {
//   const { name } = useSelector(getUser);
//   const dispatch = useDispatch();

//   const onLogOut = () => dispatch(logOut());

//   return (
//     <UserNav>
//       <StyledName>Hello, {name} </StyledName>
//       <Button variant="contained" size="small" onClick={onLogOut} type="button">
//         Log Out
//       </Button>
//     </UserNav>
//   );
// };

// export const UserNav = styled.div`
//   display: flex;
//   align-items: center;
// `;

// export const StyledName = styled.span`
//   margin-right: 15px;
//   font-size: 22px;
//   color: #1976d2;
// `;
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authAsyncActions';
import { getUser } from 'redux/auth/authUtils';
import styled from 'styled-components';

export const UserMenu = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogOut = () => dispatch(logOut());

  return (
    <UserNav>
      <StyledName>Hello, {name}</StyledName>
      <StyledButton
        variant="contained"
        size="small"
        onClick={onLogOut}
        type="button"
      >
        Log Out
      </StyledButton>
    </UserNav>
  );
};

export const UserNav = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledName = styled.span`
  margin-right: 15px;
  font-size: 22px;
  color: #1976d2;
`;

export const StyledButton = styled(Button)`
  && {
    background-color: #1976d2;
    color: white;
  }
`;
