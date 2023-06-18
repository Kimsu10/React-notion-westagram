import "./MainSujeong.scss";
import React, { useState } from "react";

const MainSujeong = () => {
  const [comments, setComments] = useState([
    { content: "멍멍이귀여워불쌍해", date: "2023년 오후 1:10:10에 달린 댓글" },
  ]);

  const handleKeyUp = (e) => {
    const commentInput = document.querySelector(".comment-input");

    if (e.key === "Enter") {
      e.preventDefault();
      const commentText = commentInput.value;

      if (commentText !== "") {
        const newComment = {
          content: commentText,
          date: getCurrentTime(),
        };

        setComments((prevComments) => [...prevComments, newComment]);
        e.target.value = "";
      }
    }
  };

  const handleClick = (e) => {
    const commentInput = document.querySelector(".comment-input");
    const commentText = commentInput.value;

    if (commentText !== "") {
      const newComment = {
        content: commentText,
        date: getCurrentTime(),
      };

      setComments((prevComments) => [...prevComments, newComment]);
      commentInput.value = "";
    } else {
      alert("글을 작성해주세요");
    }
  };

  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleString("ko-KR", {
      hour12: true,
    });

    return `${currentTime}에 달린댓글`;
  };
  return (
    <div className="MainSujeong">
      <div className="profile-detail"></div>
      <main>
        <div className="feeds">
          <article>
            <div className="posting-box">
              <img
                className="post-owner"
                src="images/dog.png"
                alt="글 작성자 프로필 이미지"
              />
              <h4 className="owner-name">개짤만 올리는 사람</h4>
            </div>
            <img
              className="posting"
              src="images/sadDog.jpeg"
              alt="포스팅 이미지"
            />
            <div className="posting-icons">
              <img
                className="posting-icon like-icon"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt="하트 아이콘"
              />
              <img
                className="posting-icon comment-icon"
                src="images/comment.png"
                alt="댓글 아이콘"
              />
              <img
                className="posting-icon share-icon"
                src="images//share.png"
                alt="공유 아이콘"
              />
              <img
                className="posting-icon bookmark-icon"
                src="images/bookmark.png"
                alt="북마크 아이콘"
              />
            </div>
            <div className="posting-text">
              <p>
                운동하는데 묶여있는 멍멍이 봄. 주인은 맞은편에있는데 너무
                불쌍했다.. 무려 30분이나 묶여있었어..ㅠ
              </p>
            </div>
            <div>
              <p className="small-font likes">ㅇㅇ님 외 n명이 좋아합니다.</p>
            </div>
            <ul className="comment-list">
              {comments.map((comment, i) => (
                <li className="comment-content" key={i}>
                  <p>{comment.content}</p>
                  <div className="date">{comment.date}</div>
                </li>
              ))}
            </ul>
            <div className="write-commments">
              <input
                className="comment-input"
                type="text"
                placeholder=" 댓글 달기..."
                onKeyUp={handleKeyUp}
              />
              <button className="write-btn" onClick={handleClick}>
                게시
              </button>
            </div>
          </article>
        </div>
        <div className="main-right">
          <div className="login-user">
            <img
              className="login-user-image"
              src="images/profile.png"
              alt="로그인 사용자 프로필 이미지"
            />
            <p className="login-user-name">피카츄피카피카</p>
          </div>
          <div className="story">
            <div className="small-title">
              <span>스토리</span>
              <span> 모두보기</span>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/dog1.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <div className="user-name">
                닥스훈트
                <div className="after-date">16분 전</div>
              </div>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/dog2.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <span className="user-name">
                웰시코기<div className="after-date">0분 전</div>
              </span>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/dog3.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <span className="user-name">
                시바이누<div className="after-date">1년 전</div>
              </span>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/dog4.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <span className="user-name">
                허숰희<div className="after-date">57분 전</div>
              </span>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/dog5.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <span className="user-name">
                사모예드<div className="after-date">10시간 전</div>
              </span>
            </div>
          </div>
          <div className="recommend">
            <div className="small-title">
              <span>회원님을 위한 추천</span>
              <span> 모두보기</span>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/pig.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <span className="user-name">
                돼지
                <div className="recommend-like">
                  시바이누님이 돼지를 좋아합니다.
                </div>
              </span>
              <button className="follow-btn">팔로우</button>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/buger.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <span className="user-name">
                햄버거킹
                <div className="recommend-like">
                  허숙희님이 햄버거를 좋아합니다.
                </div>
              </span>
              <button className="follow-btn">팔로우</button>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/sudal.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <span className="user-name">
                수달
                <div className="recommend-like">수달님이 말봐.</div>
              </span>
              <button className="follow-btn">팔로우</button>
            </div>
            <div className="users">
              <span>
                <img
                  className="user-avatars"
                  src="images/hores.png"
                  alt="유저 프로필 이미지"
                />
              </span>
              <span className="user-name">
                말봐
                <div className="recommend-like">뭘봐 수달.</div>
              </span>
              <button className="follow-btn">팔로우</button>
            </div>
          </div>
          <p className="foot">
            westagram 정보 • 지원 • 홍보 센터 • API • <br />
            채용정보 • 개인정보처리방침 • 약관 • <br />
            디렉터리 • 프로필 • 해시태그 • 언어
            <br />
            <br />@ 2023 westagram
          </p>
        </div>
      </main>
    </div>
  );
};

export default MainSujeong;
