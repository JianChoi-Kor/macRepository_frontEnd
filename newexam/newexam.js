
function login() {
    var id = document.querySelector('#id');
    var pw = document.querySelector('#pw');

    if(!id.value) {
        alert("아이디를 입력하세요");
    }
    else if(!pw.value) {
        alert("패스워드를 입력하세요");
    }
    else {
        location.href = 'main.html';
    }
}


function create_id() {
    var id2 = document.querySelector('#id2');
    var pw2 = document.querySelector('#pw2');
    var checkpw2 = document.querySelector('#checkpw2');

    if(!id2.value) {
        alert("아이디를 입력하세요");
    }
    else if(!pw2.value) {
        alert("패스워드를 입력하세요");
    }
    else if(!checkpw2.value) {
        alert("체크 패스워드를 입력하세요");
    }
    else {
        if(pw2.value != checkpw2.value) {
            alert("비밀번호가 다릅니다");
        }
        else {
            alert("계정이 생성되었습니다")
            location.href = 'login.html';
        }
    }


}