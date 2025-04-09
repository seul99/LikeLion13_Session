let el = document.getElementById('birthday'); // . 뒤에 들어갈 속성 생각해보기
let elResult = document.getElementById('result'); // . 뒤에 들어갈 속성 생각해보기
let elSubmit = document.getElementById('submit'); // . 뒤에 들어갈 속성 생각해보기
//각각의 값을 id를 이용하여 선택

const today = new Date(); 
//오늘 날짜를 today에 저장하기

function calculateAge(){
    
    let birthDate = new Date(el.value);
		//생일을 birthDate에 담기

    let age;

    if(today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate()
        )
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
    } else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
    }
    // `귀하의 만 나이는 (age 어떻게 담아야 할 지 생각해보기) 입니다.`
    elResult.innerText =  `귀하의 만 나이는 ${age}` ;
		//출력하기
		
    return age;
}

elSubmit.addEventListener('click', calculateAge); // '' 안에 들어가야 할 이벤트 생각해보기
//버튼을 눌렀을때 실행되도록 설정하기