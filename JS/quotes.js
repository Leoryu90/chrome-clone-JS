const quotes = [
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘존슨",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다." ,
        author: "이소룡",
    },
    {
        quote: "단순하게 살라. 쓸데없는 절차와 일 때문에 얼마나 복잡한 삶을 살아가는가?" ,
        author: "이드리스 샤흐",
    },
    {
        quote: "작은 기회로 부터 종종 위대한 업적이 시작된다 " ,
        author: "데모스테네스",
    },
    {
        quote: "내 비장의 무기는 아직 손안에 있다 .그것은 희망이다." ,
        author: "나폴레옹",
    },
    {
        quote: "절대 어제를 후회하지 마라 . 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다." ,
        author: "L.론허바드",
    },
    {
        quote: "추위에 떤 사람일수록 태양의 따뜻함을 느낀다." ,
        author: "휘트먼 ",
    },
    {
        quote: "우리는 우리가 상상하는 이상으로 자신의 운명의 열쇠를 가지고 있는 것이다." ,
        author: "로렌스 굴드",
    },
    {
        quote: "오늘을 붙들어라. 되도록 이면 내일에 의지하지 말라. 그날 그날이 일 년 중에서 최선의 날이다. " ,
        author: "에머슨",
    },
    {
        quote: "오늘이라는 날은 두 번 다시 오지 않는다는 것을 잊지 말라." ,
        author: "단테",
    },
    {
        quote: "계획이란 미래에 대한 현재의 결정이다." ,
        author: "드래커 ",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;