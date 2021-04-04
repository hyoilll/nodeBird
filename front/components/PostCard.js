import { Button, Card, Popover, List, Comment } from "antd";
import {
  RetweetOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "../components/PostImages";
import { useCallback, useState } from "react";
import CommentForm from "./CommentForm";

const PostCard = ({ post }) => {
  const { me } = useSelector((state) => state.user);
  const id = me && me.id; // == me?.id <optional chaining>

  const [liked, setLiked] = useState(false);
  const [commentFormOpend, setCommentFormOpend] = useState(false);

  // toggle code
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);
  const onToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, []);

  return (
    <>
      <div style={{ marginBottom: "20px" }}>
        <Card
          cover={post.Images[0] && <PostImages images={post.Images} />}
          actions={[
            // jsx에서 배열을 작성할 때는 key를 항상 작성
            <RetweetOutlined key="retweet"></RetweetOutlined>,
            liked ? (
              <HeartTwoTone
                twoToneColor="#eb2f96"
                key="heart"
                onClick={onToggleLike}
              />
            ) : (
              <HeartOutlined key="heart" onClick={onToggleLike}></HeartOutlined>
            ),
            <MessageOutlined
              key="comment"
              onClick={onToggleComment}
            ></MessageOutlined>,
            <Popover // 마우스를 갖다 대면 항목이 보여지게 하는 컴포넌트
              key="more"
              content={
                <Button.Group>
                  {id && post.User.id === id ? (
                    <>
                      <Button>Update</Button>
                      <Button type="danger">Delete</Button>
                    </>
                  ) : (
                    <Button>신고</Button>
                  )}
                </Button.Group>
              }
            >
              <EllipsisOutlined></EllipsisOutlined>
            </Popover>,
          ]}
        >
          <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={post.content}
          ></Card.Meta>
        </Card>
        {commentFormOpend && (
          <div>
            <CommentForm post={post} />
            <List
              header={`${post.Comments.length}개의 댓글`}
              itemLayout="horizontal"
              dataSource={post.Comments}
              renderItem={(item) => {
                //item = post.comments
                return (
                  <li>
                    <Comment
                      author={item.User.nickname}
                      avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                      content={item.content}
                    ></Comment>
                  </li>
                );
              }}
            />
          </div>
        )}
      </div>
    </>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;
