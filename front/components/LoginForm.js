import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useinput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const FormWrapper = styled(Form)`
  padding: 10px;
`;

const LoginForm = ({ setIsLoggedIn }) => {
  // Custom Hooks
  const [id, onChangeId] = useInput("");
  const [pw, onChangePw] = useInput("");

  //   component의 props로 넘겨주는 callback은 useCallback을 사용 => 최적화
  //   해당 컴포넌트가 랜더링되더라고 그 함수가 의존하는 값들이 바뀌지 않는 한 기존함수를 계속해서 반환
  // const [id, setId] = useState("");
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);

  // const [pw, setPw] = useState("");
  // const onChangePw = useCallback((e) => {
  //   setPw(e.target.value);
  // }, []);

  const onSubmitForm = useCallback(() => {
    //   onFinish는 e.preventDefault가 적용되어 있음
    console.log(id, pw);
    setIsLoggedIn(true);
  }, [id, pw]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">id</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-pw">pw</label>
        <br />
        <Input
          name="user-pw"
          type="password"
          value={pw}
          onChange={onChangePw}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          Login
        </Button>
        <Link href="/signup">
          <a>
            <Button>Sign Up</Button>
          </a>
        </Link>
      </ButtonWrapper>
      <div></div>
    </FormWrapper>
  );
};

LoginForm.propTypes = {
  setIsLoggedIn: PropTypes.func.isRequired,
};

export default LoginForm;
