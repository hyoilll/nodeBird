import React, { useState } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import { Form, Input, Checkbox, Button } from "antd";
import { useCallback } from "react";
import useInput from "../hooks/useinput";
import styled from "styled-components";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  // custom hooks
  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [pw, onChangePw] = useInput("");

  // password와 check password가 일치하는지 아닌지 확인
  const [pwCheck, setPwCheck] = useState("");
  const [pwError, setPwError] = useState(false);
  const onChangePwCheck = useCallback(
    (e) => {
      setPwCheck(e.target.value);
      setPwError(e.target.value !== pw); // true : 다름 / false : 같음
    },
    [pw]
  );

  // check agree
  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  // const [id, setId] = useState("");
  // const onChangeId = useCallback((e) => {
  //   setId(e.target.value);
  // }, []);

  // const [nickname, setNickname] = useState("");
  // const onChangeNickname = useCallback((e) => {
  //   setNickname(e.target.value);
  // }, []);

  // const [pw, setPw] = useState("");
  // const onChangeId = useCallback((e) => {
  //   setPw(e.target.value);
  // }, []);

  const onSubmit = useCallback(() => {
    if (pw !== pwCheck) {
      return setPwError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, pw);
  }, [pw, pwCheck, term]);

  return (
    <AppLayout>
      <Head>
        <title>NodeBird | SignUp</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">id</label>
          <Input
            name="user-id"
            value={id}
            required
            onChange={onChangeId}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-nickname">nickname</label>
          <Input
            name="user-nickname"
            value={nickname}
            required
            onChange={onChangeNickname}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-pw">pw</label>
          <Input
            name="user-pw"
            value={pw}
            required
            onChange={onChangePw}
          ></Input>
        </div>
        <div>
          <label htmlFor="user-pw-check">Check Password</label>
          <Input
            name="user-pw-check"
            type="pawssword"
            value={pwCheck}
            required
            onChange={onChangePwCheck}
          ></Input>
          {pwError && <ErrorMessage>The password is not correct.</ErrorMessage>}
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
            agree
          </Checkbox>
          {termError && <ErrorMessage>have to agree.</ErrorMessage>}
        </div>
        <div styled={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            register
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
