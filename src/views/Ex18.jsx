//import 라이브러리

import React, { useState } from 'react';

const Ex18 = () => {

    /*---라우터 관련-------------------------------*/

    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState();
    const [pw, setPw] = useState();
    const [blood, setBlood] = useState();
    const [telecom, setTelecom] = useState();
    const [desc, setDesc] = useState();
    const [hobbys, setHobbys ] = useState([]); //배열s이니까 초기값이 빈배열




    /*---일반 변수--------------------------------*/

    /*---일반 메소드 -----------------------------*/

    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    //아이디
    const handleId = (e) => {
        setId(e.target.value);
    };
    //비번
    const handlePw = (e) => {
        setPw(e.target.value);
    };
    //혈액형
    const handleBlood = (e) => {
        console.log(e.target.value);
        setBlood(e.target.value);
    };
    //통신사
    const handleTelecom = (e) => {
        console.log(e.target.value);
        setTelecom(e.target.value);
    };
    //자기소개
    const handleDesc = (e) => {
        console.log(e.target.value);
        setDesc(e.target.value);
    }
    //취미
    const handleHobbys = (e) => {

        //console.log('취미들 : ', hobbys);

        const thisValue = e.target.value;
        console.log('이번에 선택 : ', thisValue);

        //let result = hobbys.includes(thisValue);
        //console.log('result = '+result);

        if (hobbys.includes(thisValue)) {   //배열에 있으면 삭제
            console.log('배열에서 제거');
            const newHobbys = hobbys.filter( (hobbys)=>{ 
                return hobbys !== thisValue 
            } );
            setHobbys(newHobbys);

        } else {  //배열에 없으면 추가
            console.log('배열에서 추가');
            //방금 선택된 값이 제거된 배열
            const newHobbys = [...hobbys, thisValue];
            setHobbys(newHobbys);

        }

        console.log(hobbys);

        
        
        
    }



    //전송
    const handleJoin = (e)=>{

        e.preventDefault();
        console.log("전송");

        const userVo = {
            id: id,
            pw: pw,
            blood: blood,
            telecom: telecom,
            hobbys: hobbys,
            desc: desc
    
        }
        console.log(userVo);

        

    };





    return (

        <>

            <form action="" method="" onSubmit={handleJoin} >

                <div>
                    <label htmlFor="txt-id">아이디:</label>
                    <input id="txt-id" type="text" name="" value={id} 
                           onChange={handleId}/>
                </div>


                <div>
                    <label htmlFor="txt-pw">패스워드:</label>
                    <input id="txt-pw" type="password" name="" value={pw} 
                           onChange={handlePw}/>
                </div>


                <div>
                    <span>혈액형:</span>

                    <label htmlFor="rdo-a">A형</label>
                    <input id="rdo-a" type="radio" name="blood" value="a" 
                            onChange={handleBlood}/>

                    <label htmlFor="rdo-b">B형</label>
                    <input id="rdo-b" type="radio" name="blood" value="b" 
                            onChange={handleBlood}/>

                    <label htmlFor="rdo-ab">AB형</label>
                    <input id="rdo-ab" type="radio" name="blood" value="ab" 
                            onChange={handleBlood}/>

                    <label htmlFor="rdo-o">O형</label>
                    <input id="rdo-o" type="radio" name="blood" value="o" 
                            onChange={handleBlood}/>

                </div>

                <div>
                    <span>취미:</span>

                    <label htmlFor="chk-book">독서</label>
                    <input id="chk-book" type="checkbox" name="hobby" 
                            value="book" onChange={handleHobbys} />

                    <label htmlFor="chk-trip">여행</label>
                    <input id="chk-trip" type="checkbox" name="hobby" 
                            value="trip" onChange={handleHobbys} />

                    <label htmlFor="chk-movie">영화</label>
                    <input id="chk-movie" type="checkbox" name="hobby" 
                            value="movie" onChange={handleHobbys} />

                </div>

                <div>
                    <label htmlFor="sel-telecom">이동통신사</label>
                    <select id="sel-telecom" name="telecom" onChange={handleTelecom}>
                        <option value="">선택하세요</option>
                        <option value="kt">KT</option>
                        <option value="sk">SK</option>
                        <option value="lgu+">LGU+</option>
                        <option value="etc">알뜰통신사</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="txt-desc">자기소개</label><br />
                    <textarea id="txt-desc" name="" value={desc} 
                                onChange={handleDesc}></textarea>
                </div>

                <button button="submit">제출</button>


            </form>






        </>

    );

}

export default Ex18;