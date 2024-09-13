//import 라이브러리

import React from 'react';
import '../css/ex01.css';
/*import { Link } from 'react-router-dom';*/



let cssex = {
    width: '20px'
}

let name = '황일영';

let h1font = {
    fontSize: '40px',
    fontWeight: 'bold'
}




const Ex01 = () => {


    return (

        <>

            {/*주석*/}
            <h1 className="title">정우성 홈페이지</h1>
            <h1 style={h1font}>{name} 홈페이지</h1>

            <img src="./images/JungWooSung.jpg" alt="정우성 사진" />
            <br />
            <a href="https://ko.wikipedia.org/wiki/%EC%A0%95%EC%9A%B0%EC%84%B1">정우성 위키백과 바로가기</a>
            <link to="http://localhost:3000/ex00" target="_blank" rel="noreferrer noopener">정우성의 위키백과 바로가기2</link>
            <table border="1">

                <colgroup> 
                    <col style={{width: '100px'}} />{/*파란색은 자바스크립트 영역입니다 노란색은 객체*/}
                    <col style={{width: '100px'}} />
                    <col style={{width: '100px'}} />
                    <col style={{width: '100px'}} />
                    <col style={cssex} />
                </colgroup>


                <tbody>

                    <tr>
                        <td>1.1</td>
                        <td>1.2</td>
                        <td>1.3</td>
                        <td>1.4</td>
                        <td>1.5</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">2.1</td>
                        <td colSpan="2">2.2</td>
                        <td>2.4</td>
                        <td>2.5</td>
                    </tr>
                    <tr>
                        
                        <td>3.2</td>
                        <td>3.3</td>
                        <td>3.4</td>
                        <td>3.5</td>
                    </tr>
                    

                </tbody>

            </table>

            <br />
            <br />


            <div>
                <label htmlFor="txt-name">이름</label>
                <input id="txt-name" type="text" name="" value="" />
            </div>
            <div>
                <label htmlFor="txt-name">강아지</label>
                <input id="rdo-dog" type="radio" name="pet" value="" />
                <br /> 
                <label htmlFor="txt-name">고양이</label>
                <input id="rdo-cat" type="radio" name="pet" value="" />
            </div>
            


            <br />  
            <br />
            <br />
            <br />
        </>

    );

}

export default Ex01;