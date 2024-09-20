import React from 'react';



const list = () => {

	
    /*---일반 변수 --------------------------------------------*/

    /*---상태관리 변수들(값이 변하면 화면 랜더링) ----------*/

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/







	return (

        <>
			<h1>전화번호부</h1>

			<h2>전화번호-리스트</h2>

			<p>등록된 전화번호 리스트 입니다.</p>


			<c:forEach items="${requestScope.personList}" var="personVo">

				<table border="1">
					<tbody>
						<tr>
							<th>이름(name)</th>
							<td>${personVo.name}</td>
						</tr>
						<tr>
							<th>핸드폰(hp)</th>
							<td>${personVo.hp}</td>
						</tr>
						<tr>
							<th>회사(company)</th>
							<td>${personVo.company}</td>
						</tr>
						<tr>
							<td><a href="/phonebook3/editform2?no=${personVo.personId}">[수정폼으로 이동]</a></td>
							<td><a href="/phonebook3/delete?no=${personVo.personId}">[삭제]</a></td>
						</tr>

					</tbody>
				</table>
				<br />

			</c:forEach>


			<br />
			<a href="/phonebook3/writeform">등록폼으로 이동</a>


		</>


	);

}

			export default list;
