import React from "react";

function formatDate(date) {
  return date.toLocaleDateString();
}

// 추출 -
// 유의미한 값을 가지고 재 사용성을 높이기 위해 뽑아내는 것
function Avatar(props) {
  return (
    <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
  );
}
function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props.user} />
            {/* props는 user입장에서 author인 것이다. */}
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    )
}

function UserText(props) {
    return (
        <div className="Comment-text">{props.user.text}</div>
    )
}
// 합성 -
// 여러개를 하나의 컴포넌트에 넣는것을 말한다.
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <UserText user={props.text} />
      <div className="Comment-date">{formatDate(props.date)}</div>
    </div>
  );
}

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React!",
  author: {
    name: "Hello Kitty",
    avatarUrl: "http://placekitten.com/g/64/64",
  },
};

export default function Extraction() {
  return (
    <>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </>
  );
}
