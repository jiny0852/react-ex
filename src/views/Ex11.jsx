

import React from 'react';
import { useSearchParams } from 'react-router-dom';




const Ex11 = () => {


    /*---상태관리 변수들(값이 변하면 화면 랜더링) ----------*/
    const [searchParams] = useSearchParams();



    /*---일반 변수 --------------------------------------------*/
    const strNo = searchParams.get('no'); //String
    //const no = Number(intNo);          //String => number
    const intNo = Number(strNo);



    /*---일반 메소드 --------------------------------------------*/
    const getImgTag = (no) => {

        if (no === 1) {
            console.log('1번그림');
            return <img src="./images/01.png" alt="1번이미지" />;
    
        } else if (no === 2) {
            console.log('2번그림');
            return <img src="./images/02.png" alt="2번이미지" />;
    
        } else if (no === 3) {
            console.log('3번그림');
            return <img src="./images/03.png" alt="3번이미지" />;
    
        } else if (no === 4) {
            console.log('4번그림');
            return <img src="./images/04.png" alt="4번이미지" />;
    
        } else {
            console.log('그림없음');
            return <img src="" alt="이미지 없음" />;
        };

    };


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/

    return (

        <>
            
            {getImgTag(intNo)}


        </>
           

    );

}

export default Ex11;