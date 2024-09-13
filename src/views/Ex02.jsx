//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';

//import css
import '../css/reset.css';
import '../css/ex02.css';



const Ex02 = () => {



    const lastMovie = "2023년 영화 [서울의 봄]";
    const imgProfile = "./images/Jung.jpg";


    return (

        <>
            <h1>정우성 프로필</h1>
            <br/>


            <h2>최근 작품</h2>
            {lastMovie}
            


            <h2>프로필사진</h2>
            <img src={imgProfile} alt="정우성프로필사진" />
            <br/>
            <a href="https://ko.wikipedia.org/wiki/정우성">위키백과 정우성(a요소 사용하지 말것)</a> <br/>
            <Link to="https://ko.wikipedia.org/wiki/정우성" rel="noreferrer noopener">위키백과 정우성2</Link>

            <h2>정보</h2>

            
            <table border="1">
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>소속사</th>
                        <th>생년월일</th>
                        <th>데뷔작</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>정우성</td>
                        <td>아티스트컴포니</td>
                        <td>1973/03/20</td>
                        <td>1994년 영화 구미호</td>
                    </tr>
                    <tr>
                        <td colspan='4'>

                            <ol>
                                <li>2023년 영화 [서울의 봄]</li>
                                <li>2023년 영화 [보호자]</li>
                                <li>2022년 영화 [헌트]</li>
                                <li>2020년 영화 [강철비 2: 정상회담]</li>
                                <li>2020년 영화 [지푸라기라고 잡고 싶은 짐승들]</li>
                            </ol>

                        </td>
                    </tr>

                </tbody>


            </table>



            

            



            <br/><br/><br/><br/><br/><br/>
        </>

    );

}

export default Ex02;