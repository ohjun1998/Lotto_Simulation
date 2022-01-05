$(document).ready(function(){
  $("#lotto_random").show();
  $("#th1_show").hide();
  $("#th2_show").hide();
  $("#th3_show").hide();
$('.side_button').on('click',function(){
    //버튼 색 제거,추가
    $('.side_button').removeClass('on');
    $(this).addClass('on')
    
    //컨텐츠 제거 후 인덱스에 맞는 컨텐츠 노출
    var arr = $('.side_button').index(this);
    
    $('.content_space > div').hide();
    $('.content_space > div').eq(arr).show();
  });
});