import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment name={"멋쟁이"} comment={"내가 리액트 유저?"} />
      <Comment name={"아기사자"} comment={"즐거운 프론트 세션!!!!!!"} />
      <Comment name={"박슬기!"} comment={"리액트 첫 실습 입니다."} />
    </div>
  );
}

export default CommentList;
