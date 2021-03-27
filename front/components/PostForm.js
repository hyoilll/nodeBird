import { Form, Input, Button } from "antd";
import React, { useCallback, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../reducers/post";

const PostFrom = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const imageInput = useRef();

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]); // imageInput.current를 통해서 inputImage에 접근가능
  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);
  const onSubmit = useCallback(() => {
    setText("");
    dispatch(addPost);
  }, []);

  return (
    <>
      <Form
        style={{ margin: "10px 0 20px 0" }}
        encType="multipart/form-data"
        onFinish={onSubmit}
      >
        <Input.TextArea
          value={text}
          onChange={onChangeText}
          maxLength={140}
          placeholder="please text"
        ></Input.TextArea>
        <div>
          <input type="file" multiple hidden ref={imageInput} />
          <Button onClick={onClickImageUpload}>upload image</Button>
          <Button type="primary" style={{ float: "right" }} htmlType="submit">
            upload
          </Button>
        </div>
        <div>
          {imagePaths.map((v) => {
            return (
              <div key={v} style={{ display: "inline-block" }}>
                <img src={v} style={{ width: "200px" }} alt={v}></img>
                <div>
                  <Button>delete</Button>
                </div>
              </div>
            );
          })}
        </div>
      </Form>
    </>
  );
};

export default PostFrom;
