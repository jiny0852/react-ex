//import 라이브러리
import React from 'react';

//import css
import '../css/reset.css';




const Ex04 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    let no = 0;

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    /*
    //기명함수
    function hendleNamePrint(){
        console.log("정우성");
    }
    //.익명함수 --> 변수에 담아서 사용
   const hendleNamePrint = function () {
    console.log("정우성");
   }
    */

    let num = 0;
   const hendleNamePrint = () => {
        //num++;
        console.log(num++);
        console.log("정우성");
   }

   const handlePlus = () => {
        no = no+1;
        console.log(no);
   }
   const handleMinus = () => {
    //no = no-1;
    console.log(--no);
}
const handleReset0 = () => {
    no = 0;
    console.log(no);
}


    return (

        <>
        
            <h1>안녕하게요</h1> <br />

            <button type="button" onClick={hendleNamePrint}>이름출력</button>
            <br />
            <br />
            <button type="button" onClick={handlePlus}>숫자증가</button>
            <br />
            <br />
            <button type="button" onClick={handleMinus}>숫자감가?</button>
            <br />
            <br />
            <button type="button" onClick={handleReset0}>초기화</button>





            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>

        
    );


}


export default Ex04;