//import 라이브러리
import React, {useState} from 'react';

//import css




const Ex06 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링) ----------*/

    


    //const [name, setName] = useState('');
    let [no, setNo] = useState(0);

    let [name, setName] = useState('이름'); 
    //[변수이름선언, 출력이름?사용이름?] = useState(초기값)


    //일반 메소드


    const handlePlus = () => {
        //no = no+1;
        //console.log(no);
        //setNo(++no);
        
        setNo( (preNo) => {
            return preNo+1;
        });
        console.log(no);
   }

   const handleName = () => {
        console.log('였습니다 정우성');
        setName('정우성이였습니다');
   }





    return (

        <>

            <h1>안녕하게요</h1> <br />

            <br /><br /><br /><br />


            {no}<br />
            <button type="button" onClick={handlePlus}>숫자증가</button>
            <br /><br /><br /><br />
            {name}
            <button type="button" onClick={handleName}>이름출력</button>



            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>

        
    );


}


export default Ex06;