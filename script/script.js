$(function(){

    setInterval (fnSlide, 1200);      // 1.2초에 한번 반복하도록

    function fnSlide(){

        $("#toolTipTxt, #arrowMark").animate(
            {"margin-top" : "8px"},
            300,                            // 0.3초
            function(){
                $(this).css({"margin-top" : "0px"});
            }
        );

    }
    
    // .animate( A, B, C );    
    //  매개변수 A, B, C > Parameter
    //  A (CSS) 
    //  B (애니메이션이 구현되는 시간, 1/1000, ms 밀리세컨즈)
    //  C 콜백함수(애니메이션이 종료된 직후 실행되는 기능을 저장한 함수, 
    //                 익명함수 형식으로 만듬)
});