// main.html
//main.js
import React from "react";
import './Main.css';


function Main(){
    return(
        <main>
       
        <header>
            <nav>

            <div className="logo">
                <div onClick="location.href='#'">
                    <a><i className="fab fa-instagram"></i></a>
                </div>
                <div className="wefont">
                <h3 className="we"><a>WESTAGRAM</a></h3> 
                </div>
            </div>

            <div className="searchbar">
                <input type="text" placeholder="검색"/>
            </div>

            <div className="nav">
                <div className="navo" onClick="location.href='#'"></div>
                <div className="navt" onClick="location.href='#'"></div>
                <div className="navh" oncCick="location.href='#'"></div>  
            </div>
            </nav>
        </header>

   <article>

    <section className="peedleft">

        <div className="top">
            <div className="toplogo">
                <div className="topimg">
                    <a><img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNQ7tN%2Fbtr94x1qRTc%2FbxkZo4kTePexa2hGkGtSW1%2Fimg.jpg" alt=""/></a>
                </div>
                <h4 className="memberid"><a>xmin.oh</a></h4>
            </div>
            <a><i className="fas fa-ellipsis-h"></i></a>

        </div>

        <div className="peedimg"></div>

        <div className="peedundericons">
            <div className="underleft">
                <a><i className="fas fa-heart"></i></a>
                <a><i className="far fa-comment"></i></a>
                <a><i className="fas fa-external-link-alt"></i></a>
            </div>
            <div className="underight">
                <a><i className="far fa-bookmark"></i></a>
            </div>
        </div>

        <div className="peedunderlikes">
            <div className="likesleft">
                <a><img src="https://i.namu.wiki/i/GMjulil8lpXjWZS0pkQuTcSq5thvKPemjlw81hDRi0_4PVZcYiSUTa9NUwJIwGMJcO1Z2Wb1ITOFj2JEswsjwtqpeUWB6Krv4yfWPj-COAgNJJJEqsMcJvBW4yrGNyTk3US6Seqe7UEvxQcSQ72Bbg.svg"alt=""/></a>
                <p><a href="#">aineworld</a>님 외<a href="#"> 10명이</a> &nbsp;좋아합니다</p>
            </div>
        </div>

            <div className="peedtext">
                <p className="canon"><a href="#">canon_mj</a> 위워크에서 진행한 베이킹 클래스...<a className="more"> 더 보기</a></p>
                <div className="id2flexbox">
                    <p className="id2"><a href="#">neceosecius</a> 거봐 좋았잖아~~~ 🌝 🌝</p>
                    <a><i className="far fa-heart"></i></a>
                </div>
                <span className="minit">
                    <p><a href="#">42분 전</a></p>
                </span>
               
            </div>

            <div className="comment">
                <input id="name" clss="names" type="text" placeholder="댓글 달기..."/>
                <button className="upload" id="submit" onclick="uploadReview()">게시</button>
            </div>
            
    </section>


    <section className="side-right">
        <div className="side-container"  onclick="location.href='#'">
            
            <div>
                
                <p>wecode_bootcamp</p>
                <p>WeCode<span>위코드</span></p>
            </div>
            
        </div>

        <div className="side-story">
            <div className="side-navigation">
                <p>스토리</p>
                <div onclick="location.href='#'" className="see-all">
                    모두 보기
                </div>
            </div>

            <div className="story" onclick="location.href='#'">
                <div className="story-img-one"></div>
                <div className="story-text">
                    <p className="bold">god_jaewon</p>
                    <p className="color">2시간 전</p>
                </div>
            </div>
            <div className="story" onclick="location.href='#'">
                <div className="story-img-two"></div>
                <div className="story-text">
                    <p className="bold">soyoon</p>
                    <p className="color">33분 전</p>

                </div>
            </div>

            <div className="story" onclick="location.href='#'">
                <div className="story-img-three"></div>
                <div className="story-text">
                    <p className="bold">ujinSin</p>
                    <p className="color">10시간 전</p>
                </div>
            </div>

            <div className="story" onclick="location.href='#'">
                <div className="story-img-four"></div>
                <div className="story-text">
                    <p className="bold">selina</p>
                    <p className="color">20분 전</p>
                </div>
            </div>
        </div>
        
          <div className="side-pick">
            <div className="side-navigation">
                <p>회원님을 위한 추천</p>
                <div onclick="location.href='#'" className="see-all">
                    모두 보기
                </div>
            </div>

            <div className="side-wrap">
                <div className="sidewraps">
                    <div className="side-img side-wrap-img1"></div>
                    <div cass="side-childs">
                        <p className="name">ockNim</p>
                        <p className="info">hoo님 외 7명이 팔...</p>
                    </div>
                </div>

                <button>팔로우</button>
            </div>

            <div className="side-wrap">
                <div className="sidewraps">
                    <div className="side-img side-wrap-img2"></div>
                    <div cass="side-childs">
                        <p className="name">dragonYong</p>
                        <p className="info">god_jaewon님 외...</p>
                    </div>
                </div>
                <button>팔로우</button>
            </div>

            <div className="side-wrap">
                <div className="sidewraps">
                    <div className="side-img side-wrap-img3"></div>
                    <div cass="side-childs">
                        <p className="name">yeju</p>
                        <p className="info">Hwayeon 외 4명이...</p>
                    </div>
                </div>

                <button>팔로우</button>
            </div>
        </div>

        <div className="footer-wrapper">
            <p>Instagram 정보 · 지원 · 홍보센터 · API · <br/>채용정보
            개인정보처리방침 · 약관 ·<br /> 디렉터리 · 프로필 · 해시태그 · 언어</p>
            <p>ⓒ 2023 INSTAGRAM</p>
        </div>
    </section>


    </article>
</main>
    );
}

export default Main