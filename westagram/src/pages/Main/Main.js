import "./Main.scss";

const Main = () => {
  const handleKeyUp = (e) => {
    const commentInput = document.querySelector(".comment-input");
    const commentList = document.querySelector(".comment-list");

    if (e.key === "Enter") {
      e.preventDefault();
      const commentText = commentInput.value;

      if (commentText !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        commentInput.value = "";
      }
    }
  };

  const handleClick = () => {
    const commentInput = document.querySelector(".comment-input");
    const commentList = document.querySelector(".comment-list");

    const commentText = commentInput.value;

    if (commentText !== "") {
      const newComment = document.createElement("li");
      newComment.textContent = commentText;
      commentList.appendChild(newComment);
      commentInput.value = "";
    } else {
      alert("Please insert text");
    }
  };
  return (
    <>
      <nav className="navigation">
        <img className="icon" src="images/instagram.png" alt="인스타 아이콘" />
        <h1 className="navLogo">|</h1>
        <h1 className="navLogo">westagram</h1>
        <div className="searchBar">
          <i className="fas fa-solid fa-magnifying-glass"></i>
          <input className="searchBox" type="search" placeholder="검색" />
        </div>
        <img
          className="icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
          alt="검색 아이콘"
        />
        <img
          className="icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
          alt="하트 아이콘"
        />
        <img
          className="userProfile"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
          alt="사용자 아이콘"
        />
      </nav>
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
                src="images/share.png"
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
              {" "}
              <p className="small-font likes">ㅇㅇ님 외 n명이 좋아합니다.</p>
            </div>
            <ul className="comment-list">
              <li className="comment-content">
                {" "}
                <p>멍멍이귀여워불쌍해</p>
                <div className="date">몇분전에 달린댓글</div>
              </li>
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
    </>
  );
};

export default Main;
