function count() {
    var set_count = 1; //실행된 개수
    var count_a = 0; //한번씩 반복하게 하는 기초변수

    var th_count_1 = 0;
    var th_count_2 = 0;
    var th_count_3 = 0;
    var th_count_4 = 0;
    var th_count_5 = 0;
    var th_count_rest_3 = 0;

    var result_count = 0;
    var bonus_count = 0;

    //var empty = new Array(); var th = new Array();
    var stat_view = new Array();
    for (var space = 1; space <= 7; space++) {
        stat_view[space] = 0;
    }

    while (count_a < 1) {
        var count_list = setInterval(function () {

            document
                .getElementById('caculation')
                .disabled = true; //연산 누르면 연산버튼 비활성화시킴
            /* var number = document
        .getElementById("num")
        .value;*/
            var empty = new Array();

            //랜덤 값 넣어주기 및 중복제거 for (var lotto_row = 1; lotto_row <= 1; lotto_row++) {
            for (var lotto_a = 0; lotto_a < 6; lotto_a++) { //empty.length = number + 1 임 empty[0] = null 로 들어가 있어서 같이 카운트 해줘야함.
                var result = Math.floor(Math.random() * (45)) + 1;

                empty[lotto_a] = result; //empty = [a,b,c,..100]
                for (var lotto_b = lotto_a; lotto_b >= 1; lotto_b--) {
                    if (empty[lotto_a] == empty[lotto_b - 1]) {
                        lotto_a--;
                    }
                }
            }

            var number1 = document
                .getElementById("number1")
                .value;

            var number2 = document
                .getElementById("number2")
                .value;

            var number3 = document
                .getElementById("number3")
                .value;

            var number4 = document
                .getElementById("number4")
                .value;

            var number5 = document
                .getElementById("number5")
                .value;

            var number6 = document
                .getElementById("number6")
                .value;

            var number_bonus = document
                .getElementById("number_bonus")
                .value;
            //로또번호체크
            var lotto = [
                number1, //2,
                number2, //10,
                number3, //13,
                number4, //22,
                number5, //29,
                number6 //40
            ];

            var bonus = number_bonus; //26;

            for (var zero_check = 0; zero_check < 6; zero_check++) {
                if (45 < lotto[zero_check] || lotto[zero_check] < 1) {

                    clearInterval(count_list);
                    document
                        .getElementById('caculation')
                        .disabled = false;

                    alert("로또 번호를 잘못 입력하였습니다.");
                    break;
                }
            }
            /*if ((45 < number1 || number1 < 1) || (45 < number2 || number2 < 1) || (45 < number3 || number3 < 1) || (45 < number4 || number4 < 1) || (45 < number5 || number5 < 1) || (45 < number6 || number6 < 1) || (45 < number_bonus || number_bonus < 1)) {
                alert("로또 번호를 잘못 입력하였습니다.");
                clearInterval(count_list);
                document
                    .getElementById('caculation')
                    .disabled = false;
            }*/

            for (var LottoNumberCheck_a = 0; LottoNumberCheck_a <= 6; LottoNumberCheck_a++) {
                if (lotto[LottoNumberCheck_a] == bonus) {
                    // alert("로또 번호 중복입니다.");
                    clearInterval(count_list);
                    document
                        .getElementById('caculation')
                        .disabled = false;
                    alert("로또 번호 중복입니다.");
                    break;
                }
                for (
                    var LottoNumberCheck_b = LottoNumberCheck_a + 1;
                    LottoNumberCheck_b <= 6;
                    LottoNumberCheck_b++
                ) {
                    if (lotto[LottoNumberCheck_a] == lotto[LottoNumberCheck_b]) {
                        // alert("로또 번호 중복입니다.");
                        clearInterval(count_list);
                        document
                            .getElementById('caculation')
                            .disabled = false;
                        alert("로또 번호 중복입니다.");
                        break;
                    }
                }
            }

 
            var check_same = 0;
            var bonus_same = 0;



                for (var lotto_check_b = 0; lotto_check_b < 6; lotto_check_b++) {
                    for (var lotto_check_c = 0; lotto_check_c < 6; lotto_check_c++) { //일반숫자

                        if (empty[lotto_check_b] == lotto[lotto_check_c]) {

                           
                            check_same = ++result_count; //check_same 변수에 바로 들어가야되니까 선 ++
                            //++result_count 해줘야 먼저 result_count숫자 올려주고 check_same변수에 값을 넣어줌
                            //result_count++해주면 if문 만족해도 result_count값이 0이어서 check_same이 0으로 들어감 선++이 맞음
                        }

                    }
                    if (empty[lotto_check_b] == bonus) { //보너스 숫자
                        bonus_same = ++bonus_count;
                    }
                }

                result_count = 0;
                bonus_count = 0;

            var th = new Array();

            //당첨된 개수
    

                if (check_same == 6) {
                    check_same = 7; //var th_1 = 1;
                    th[check_same] = "1등";
                    stat_view[check_same] = ++th_count_1;//1등 몇번인지 파악
                } else if (check_same == 5) {
                    if (check_same == 5 && bonus_same == 1) {
                        check_same = 6; //var th_2 = 2;
                        th[check_same] = "2등";
                        stat_view[check_same] = ++th_count_2;
                    } else {
                        check_same = 5; //var th_3 = 3;
                        th[check_same] = "3등";
                        stat_view[check_same] = ++th_count_3;
                    }
                } else if (check_same == 4) {

                    check_same = 4; //var th_4 = 4;
                    th[check_same] = "4등";
                    stat_view[check_same] = ++th_count_4;

                } else if (check_same == 3) {
                    check_same = 3; //var th_5 = 5;
                    th[check_same] = "5등";
                    stat_view[check_same] = ++th_count_5;

                } else {
                    check_same = 1;
                    th[check_same] = "꽝";
                    stat_view[check_same] = ++th_count_rest_3;

                }
  
            var count_6 = 0;

            var str4 = "<table border=1 style = 'border-collapse: collapse; margin : auto';>";
            for (var count_z = 0; count_z < 1; count_z++) {
                str4 += "<tr>";
                str4 += "<td colspan=6 id=insight_th>";
                str4 += th[check_same];
                str4 += "</td>";
                str4 += "</tr>";
                str4 += "<tr>";
                for (var count_y = 0; count_y < 6; count_y++) {
                    str4 += "<td id=insight>";
                    /*str4 += "<img src = 'C:/Users/권오준/Desktop/visual studio code javascript/웹프로그래밍/프로젝트/로또/" +
                            "number/number_" + empty[count_6] + ".png'>"*/
                            str4 += "<img src = './number/number_" + empty[count_6] + ".png'>"

                    str4 += "</td>";
                    count_6++;
                }
                str4 += "</tr>";
                str4 += "<tr>";
                str4 += "<td colspan=6 id=insight_under>";
                str4 += set_count++; //1000  str4 = 1000 set_count = 1001
                str4 += "</td>";
                str4 += "</tr>";

            }
            str4 += "</table>";

            //6개의 숫자 출력
            /*document
                .getElementById("lotto_random")
                .appendChild(node);*/

            document
                .getElementById("lotto_random")
                .innerHTML = str4;

            //1등 반복횟수
            document
                .getElementById("th1")
                .innerHTML = "1등<br>" + stat_view[7];

            //2등 반복횟수
            document
                .getElementById("th2")
                .innerHTML = "2등<br>" + stat_view[6];

            //3등 반복횟수
            document
                .getElementById("th3")
                .innerHTML = "3등<br>" + stat_view[5];

            //4등 반복횟수
            document
                .getElementById("th4")
                .innerHTML = "4등<br>" + stat_view[4];

            //5등 반복횟수
            document
                .getElementById("th5")
                .innerHTML = "5등<br>" + stat_view[3];

            //꽝 반복횟수
            document
                .getElementById("rest")
                .innerHTML = "꽝<br>" + stat_view[1];

            var node = document.createElement("div");
            node.innerHTML = str4;

            if (check_same == 5) {
                //document.getElementById('th1_show').innerHTML +=str4;
                document
                    .getElementById("th3_show")
                    .appendChild(node);
            }
            if (check_same == 6) {
                //document.getElementById('th2_show').innerHTML +=str4;
                document
                    .getElementById("th2_show")
                    .appendChild(node);
            }
            if (check_same == 7) {
                //document.getElementById('th3_show').innerHTML +=str4;
                document
                    .getElementById("th1_show")
                    .appendChild(node);
            }

            var rank = document
                .getElementById("rate")
                .value;

            var want_count = document
                .getElementById("goal")
                .value;

            var profit = 0; //이득
            var prize_money = stat_view[7] * 2000000000 + stat_view[6] * 50000000 + stat_view[5] * 1500000 + stat_view[4] * 50000 + stat_view[3] * 5000; //당첨금
            var use_money = (set_count - 1) * 1000; //사용금액 set_count 1000
            //var use_money_th = (set_count-1) * 1000;
            profit = prize_money - use_money; //이득 = 당첨금 - 사용금액

            //당첨번호랑 같아야하는 개수,사용자가 원하는 만큼
            if (check_same == rank || (set_count - 1) == want_count) { //want_count가 1000이면 set_count가 1000일때 밑에 내용 출력 못하니까
                clearInterval(count_list);
                document
                    .getElementById('caculation')
                    .disabled = false;

                //profit = prize_money - use_money; 이득 = 당첨금 - 사용금액
                function Buy_want(name, price, div_id, senstense) {
                    this.want_name = name;
                    this.want_price = price;
                    this.want_id = div_id;
                    this.count_buy = 0;
                    this.senstense = senstense;

                }

                Buy_want.prototype.getinfo = function () {
                    // profit = prize_money - use_money;

                    if (profit > 0) {
                        this.count_buy = Math.floor(profit / this.want_price);
                        if (this.count_buy == 0) {
                            document
                                .getElementById(this.want_id)
                                .innerHTML = this.want_name + "<br>" + this.senstense + "없다.";
                        } else {
                            document
                                .getElementById(this.want_id)
                                .innerHTML = this.want_name + "<br>" + this.count_buy + this.senstense +
                                        "있다.";
                        }
                    } else {
                        this.count_buy = Math.floor(-profit / this.want_price);
                        if (this.count_buy == 0) {
                            document
                                .getElementById(this.want_id)
                                .innerHTML = this.want_name + "<br>" + this.senstense + "없다.";
                        } else {
                            document
                                .getElementById(this.want_id)
                                .innerHTML = this.want_name + "<br>" + this.count_buy + this.senstense +
                                        "있었다.";
                        }
                    }

                }

                var BuyWant_empty = new Array(); //밑에 랜덤으로 넣어줄려고

                for (var BuyWant_a = 0; BuyWant_a < 6; BuyWant_a++) { //empty.length = number + 1 임 empty[0] = null 로 들어가 있어서 같이 카운트 해줘야함.
                    var BuyWant_result = Math.floor(Math.random() * (6) + 1);

                    BuyWant_empty[BuyWant_a] = BuyWant_result; //empty = [a,b,c,..100]
                    for (var BuyWant_b = BuyWant_a; BuyWant_b >= 1; BuyWant_b--) {
                        if (BuyWant_empty[BuyWant_a] == BuyWant_empty[BuyWant_b - 1]) {
                            BuyWant_a--;
                        }
                    }

                }
                var chicken = new Buy_want(
                    "치킨",
                    20000,
                    "compare_" + BuyWant_empty[0],
                    "마리 먹을 수 "
                );
                var PS5 = new Buy_want("PS5", 628000, "compare_" + BuyWant_empty[1], "대 살 수 ");
                var europe = new Buy_want(
                    "유럽여행",
                    5000000,
                    "compare_" + BuyWant_empty[2],
                    "번 갈 수 "
                );
                var lamborghini = new Buy_want(
                    "람보르기니",
                    200000000,
                    "compare_" + BuyWant_empty[3],
                    "대 살 수 "
                );
                var iphone12_pro_max = new Buy_want(
                    "아이폰12 프로 맥스",
                    1490000,
                    "compare_" + BuyWant_empty[4],
                    "대 살 수 "
                );
                var moive = new Buy_want("영화", 10000, "compare_" + BuyWant_empty[5], "번 볼 수 ");

                chicken.getinfo();
                PS5.getinfo();
                europe.getinfo();
                lamborghini.getinfo();
                iphone12_pro_max.getinfo();
                moive.getinfo();
                /*if (check_same == rank || (set_count - 1) == want_count) { 
                    clearInterval(count_list);
                    document
                        .getElementById('caculation')
                        .disabled = false;
                }*/
            }
            if (rank == 0 && want_count == 0) {
                document
                    .getElementById('caculation')
                    .disabled = false;
                clearInterval(count_list);
                alert("등수, 반복횟수를 선택하십시오");

            }

            document
                .getElementById("prize_money")
                .innerHTML = "당첨금<br>" + prize_money + "원";

            document
                .getElementById("use_money")
                .innerHTML = "사용금액<br>" + use_money + "원";

            document
                .getElementById("profit")
                .innerHTML = "이익<br>" + profit + "원";

        }, 1);
        count_a++;

    } //while
} //function
function restart() {
    window
        .location
        .reload();
}