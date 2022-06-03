jQuery(document).ready(function(){
    // .navi의 li태그에 mouseover이벤트 설정
    $(".language > li").mouseover(function(){
        $(this).find(".lang").stop().slideDown(500);
    }).mouseout(function(){
        $(this).find(".lang").stop().slideUp(500);
    });
    $(".imgageslide a:gt(0)").hide();
    setInterval(function(){
        $(".imgageslide a:first-child").fadeOut()
        .next('a').fadeIn()
        .end().appendTo(".imgageslide");
    }, 3000);
    // ("notice li:first").click : .notice요소의 후손요소
    // 중에서 첫 번째 요소를 클릭하면
    $(".notice li:first").click(function(){
        // #modal과 일치하는 요소에 'active'클래스 추가함
        $("#modal").addClass("active");
    });
    // .btn요소(닫기버튼)을 클릭하면
    $(".btn").click(function(){
        // #modal의 'active'클래스 삭제함
        $("#modal").removeClass("active");
    });
});