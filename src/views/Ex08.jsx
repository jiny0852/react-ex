
import React, { useState } from 'react';
//화면 바꾸는건 걍 싹다 useState 박아버리셈
//폼은 제출, 키보드 입력값은 유즈스테이트
//키보드 온체인지, 마우스 온클릭
//이벤트에 쓰는 함수 명들은 온핸들

//서버 전송은 axious 악시오스 뭐시기 로 쓸꺼임 땅땅
//데이터만 받을꺼야 엑시오스쓰는거임

//click과 submit은 다른놈 



const Ex08 = () => {



    ///////////////상태관리 변수들(값이 변하면 화면 랜더링)////////////////
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    /*
      무슨이름으로 받을래 email {자바스크립트변수}
      뭘로 갔다 쓸래 setEmail  화면에 나오는 값을 바꾸려면 얘를 써서 해야함

      eamil = "a"; x    
      setEmail = "a"; o 
      벗뜨, 이벤트로 밑에 (const handleEmailChange) 에서 진행시켜
    */



    ////////////////일반 메소드////////////////

    //이메일 입력할때
    const handleEmailChange = (e) => {

        console.log('키보드 입력');
        setEmail(e.target.value);

    };

    //패스워드 입력할때
    const handlePasswordChange = (e) => {

        console.log('pw 입력');
        setPassword(e.target.value);

    };

    //로그인 할때
    const handleSubmit = (e) => {

        //#####이벤트 잡는다
        e.preventDefault();
        console.log(e.target);

        // 여기서 API 호출 등을 통해 로그인 처리

        //#####데이터 수집

        //데이터수집 객체로 묶기
        console.log(email, password);

        const formValue = {
            email: email,          //여기 겟터로 잡히기 떄문에 이름 잘지어: 여긴 벨류,
            password: password
        };

        console.log("formValue : ", formValue); //,로 찍으면 object로 찍히지 않는다 +말고
        console.log(formValue);


        let data = { 
            "email": email,
            "password" : password
        }

        console.log(data);



        //####전송
        //axios
        






    };



    /////////////////생명주기 + 이벤트 관련 메소드////////////////

    return (

        <>

            <form action="/ex01" mrthod="get" onSubmit={handleSubmit}>
            {/* 데이터만 보낼꺼야 전송은 엑시오스 */}

                <div>

                    <label htmlFor="txt-email" >이메일:</label>
                    <input id="txt-email" type="text" name="email" value={email} onChange={handleEmailChange} />
                    {/*handleEmailChange 걸어만 놓는다 실행 되는게 아니다 실행은()*/}

                </div>

                <div>
                    
                    <label htmlFor="txt-password" >패스워드</label>
                    <input id="txt-password" type="password" name="passeword" value={password} onChange={handlePasswordChange} />

                </div>

                <button type="submit">로그인</button>

            </form>

        </>


    );

};

export default Ex08;

