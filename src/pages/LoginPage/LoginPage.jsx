import { useDispatch } from 'react-redux';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { logIn } from 'redux/auth/authAsyncActions';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => {
    dispatch(logIn(data));
  };

  return (
    <>
      <LoginForm onData={onLogin} />
    </>
  );
};

export default LoginPage;
