

import React from 'react';




const Ex17 = () => {

    /*---상태관리 변수들(값이 변하면 화면 랜더링) ----------*/


    /*---일반 변수 --------------------------------------------*/


    /*---일반 메소드 --------------------------------------------*/


    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    const strArray = ['정우성', '이효리', '유재석'];

    //strArray.map();

    //  --------  includes  --------
    let result =  strArray.includes('이효리');
    console.log(result);

    let result2 =  strArray.includes('황일영');
    console.log(result2);

    
    
    //  --------  filter  --------
    let newArray = strArray.filter( (name) => {

        return name !== '정우성'; //true 새로운 배열에 추가
        //return name === '이효리';

    } );

    console.log(newArray);


    return (

        <>
            <p>안녕하세요요요요요요</p>

        </>
           

    );

}

export default Ex17;