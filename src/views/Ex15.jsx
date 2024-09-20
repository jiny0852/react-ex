

import React, {useState, useEffect} from 'react';




const Ex15 = () => {


    /*---상태관리 변수들(값이 변하면 화면 랜더링) ----------*/
    const [no, setNo] = useState(0);
    //let no = 0;


    /*---일반 변수 --------------------------------------------*/

    

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    
    //[]마운트될때
    useEffect(()=>{
        console.log('no가 변할때');
    }, [no]);


    //버튼 클릭 했을때
    const handlePlus = () => {
        //setNo(no+1);
        setNo((prevNo)=>{
            return prevNo+1;
        });

        console.log(no);
    };


    return (

        <>
            {no}
            <br />
            <button type="button" onClick={handlePlus}>안녕하게요</button>
        </>
           

    );

}

export default Ex15;