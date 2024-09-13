//import 라이브러리
import React, {useState} from 'react';

//import css




const Ex07 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    


    //const [name, setName] = useState('');
    let [no, setNo] = useState(0);
    //변수 관리할것 명, 변화줄 메소드명, 초기값

  
    //[변수이름선언, 출력이름?사용이름?] = useState(초기값)


    //일반 메소드


    const handlePlus = () => {
        
        setNo( (plusNo) => {
            return plusNo + 1;
        });

    }

    const handleMinus = () => {

        setNo((minusNo) => {
            return minusNo - 1;
        });

    }

    const handleReset = () => {

        setNo(0);

    }

 





    return (

        <>

            <h1>안녕하게요</h1> <br />

            <br /><br /><br /><br />


            {no}<br />
            <button type="button" onClick={handlePlus}>숫자증가</button>
            <br />
            
            <button type="button" onClick={handleMinus}>숫자감소</button>
            <br />

            <button type="button" onClick={handleReset}>초기화</button>


          


            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>

        
    );


}


export default Ex07;