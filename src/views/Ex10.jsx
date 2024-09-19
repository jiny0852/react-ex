
//import 라이브러리

import React, {useState} from 'react';




const Ex10 = () => {

     //t면 로긴, f면 로그아웃 을 가정 t야????
    //let isLogin = true;


    /*---상태관리 변수들(값이 변하면 화면 랜더링) ----------*/
    const [isLogin, setIsLogin] = useState(false);

    //버튼 클릭했을때
    const handleLoginChange = () => {

        console.log("버튼 클릭");
        /*
        if(setIsLogin===true) {
            setIsLogin(false);
        } else {//if (setIsLogin===false) {
            setIsLogin(true);
        }*/


        setIsLogin(!isLogin);
        //console.log(setIsLogin);

        //setIsLogin = ( ()=> { return !setIsLogin; } );
        //console.log(setIsLogin.value);

    }



    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/


    return (

        <>

            { isLogin===true? <p>*로그인된 화면</p> : <p>*로그인 안된 화면</p>  }
            
            <br /><br />

            <button type="button" onClick={handleLoginChange}>로그인상태변화</button>

            <br /><br />

            { 
                (isLogin===true) ? 
                (
                    <div>
                        <ul>
                            <li>로그인된 화면</li>
                            <li>로그아웃버튼</li>
                            <li>회원정보수정 화면이동</li>
                        </ul>
                        <br />
                    </div>

                ) : (
                    <div>
                        <ul>
                            <li>로그인 안된 화면</li>
                            <li>로그인버튼</li>
                            <li>회원가입 화면이동</li>
                        </ul>
                        <br />
                    </div>

                )
            }




        </>


    );

};

export default Ex10;

