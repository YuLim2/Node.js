var f = function(){    //f에 함수를 선언 가능
    console.log(1+1);
    console.log(1+2);
  }
  var a = [f];    //함수를 배열로 선언 가능
  a[0]();
   
  var o = {    //함수를 객체의 속성 값으로 주기 가능
    func:f
  }
  o.func();