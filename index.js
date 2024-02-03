      //여기에 전시물 순서대로 들어갈거임
      const itemList=['0-0-1', '0-0-2', '0-0-3', '0-0-4', '0-0-5', '0-0-6', '0-0-7', '0-0-8', '0-0-9', '0-0-10', '0-0-11', '0-0-12', '0-0-13', '0-0-14', '0-0-15', '0-0-16', '0-0-17', '0-0-18', '0-0-19', '0-0-20', '0-0-21', '0-0-22', '0-0-23', '0-0-24', '0-0-25', '0-0-26', '0-0-27', '0-0-28', '0-0-29', '0-0-30', '1-3-2', '1-3-3', '1-3-3.1', '1-3-4', '1-3-5', '1-3-5.1', '1-3-5.2', '1-3-5.3', '1-3-6', '1-3-7', '1-3-8', '1-3-10', '1-3-10.1', '1-3-10.2', '1-3-11', '1-3-12', '1-3-13', '1-3-14', '1-3-15', '1-3-16', '1-3-17', '1-3-18', '1-3-20', '1-3-20.1', '1-3-22', '1-3-23', '1-3-24', '1-3-25', '1-3-26', '1-3-27', '1-3-28', '1-3-30', '1-4-31', '1-4-32', '1-4-34', '1-4-34.1', '1-4-36', '1-4-37', '1-4-38', '1-4-38.1', '1-4-39', '1-4-39.1', '1-4-40', '1-4-52', '1-4-53', '1-4-60', '1-4-61', '1-4-62', '1-4-63', '1-4-64', '1-4-66', '1-4-67', '1-4-68', '1-4-68.1', '1-4-69', '1-4-70', '1-4-73', '1-4-74', '1-4-75', '1-4-76', '1-4-76.1', '2-4-81', '2-4-82', '2-4-82.1', '2-4-82.2', '2-4-82.3', '2-4-82.4', '2-4-82.5', '2-4-82.6', '2-4-82.7', '2-4-82.8', '2-4-82.9', '2-4-82.91', '2-4-83', '2-4-85', '2-4-86', '2-4-87', '2-4-94', '2-4-94.1', '2-4-94.2', '2-4-96', '2-3-96', '2-3-96.1', '2-3-96.2', '2-3-96.3', '2-3-96.4', '2-3-96.5', '2-3-96.6', '2-3-96.7', '2-3-96.8', '2-3-96.9', '2-3-96.91', '2-3-96.92', '2-3-96.93', '2-3-96.94', '2-3-96.95', '2-3-96.96', '2-3-96.97', '2-3-96.98', '2-3-97', '2-3-103', '2-3-104', '2-3-105', '2-3-106', '2-3-107', '2-3-108', '2-3-110', '2-3-110.1', '2-3-111', '3-1-1', '3-1-2', '3-1-3', '3-1-4', '3-1-5', '3-1-7', '3-1-8', '3-1-9'] ;
      const itemLength=itemList.length;
      const nameList= ['혼천시계', '평면일구', '혼천의', '앙부일구', '인공위성지도', '대동여지전도', '동국여지지도', '천자총통', '황자총통', '장군총통', '철신포', '화전', '비격진천뢰', '완구', '총통화차', '신기전화차', '불랑기', '일총통', '삼총통', '이총통', '사전총통', '사전장총통', '신제총통', '세총통', '화통', '질려포통', '천문도', '황도중서합도', '천상열차분야지도', '신법천문도', '각운동량보존법칙', '스트로보스코프0', '스트로보스코프1', '가속도0', '운동법칙0', '운동법칙2', '운동의제1법칙', '운동의제3법칙', '관성', '베르누이의정리', '공은왜뜰까', '아르키메데스의원리', '배가뜨는원리0', '배가뜨는원리1', '자이로스코프', '강철구의운동', '아치쌓기', '회전판위의링', '떨어지는물체', '액체자석', '빗면', '도르래와지레', '물의대류열의운동', '물의대류', '브라운운동', '기체의스펙트럼1', '홀로그램', '전반사', '내진설계', '로봇의원리', '원심분리', '동전경주', '빛의성질', '렌즈놀이', '대형볼록렌즈', '편광', '하늘은왜푸른가', 'tv화상전송', '빛의성질빛의혼합1', '빛의성질빛의혼합2', '잡히지않는물체', '허공입체영상', '편광1', '평행거울', '자석이흐르는강', '소리반사경', '횡파', '막대의공진', '줄없는하프', '소리의정상파', '달의모양', '물결파', '센자석약한자석', '홍채', '자석로켓', '편광2', '전지', '나노기술', '방전구', '포물면', '포물선', '탑리의지층', '지질시대의화석', '지질시대의화석2', '지질시대의화석3', '지질시대의화석4', '지질시대의화석6', '지질시대의화석7', '지질시대의화석8', '지질시대의화석9', '지질시대의화석10', '지질시대의화석11', '지질시대의화석12', '코리올리효과', '물의소용돌이', '용오름현상', '투명인체', '화학전지 0', '화학전지 1', '화학전지2', '수소로켓', '로켓의발달', '로켓의의발달2', '로켓의발달3', '로켓의발달5', '로켓의발달6', '로켓의발달7', '로켓의발달8', '로켓의발달9', '로켓의발달10', '로켓의발달12', '로켓의발달13', '로켓의발달14', '로켓의발달16', '로켓의발달17', '로켓의발달18', '로켓의발달19', '로켓의발달20', '로켓의발달21', '아기의탄생', '신경반응', '유전자재조합', '세포융합', '핵치환', '조직배양', '단백질이만들어지는방법', 'DNA', 'DNA1', '유전공학', '태양열발전', '태양광발전', '풍력발전', '연료전지', '수력발전', '공기의압력', '소리의전달', '선풍기']

      function mod(number,modulo){
        return (number%modulo+modulo)%modulo;

      } 
      //웹사이트 링크 수정해야함
      const websiteLink="http://www.scsei.info/index.html";
      const textFileDirectory="/textfiles"
      const audioFileDirectory="/mp3files"
      
      // 브라우저의 URL 중 쿼리 파싱
      //window.location.search는 url에서 ?부터끝까지의값(즉 쿼리 파싱))
      //URLSearchParams는 쿼리 라이브러리같은거.

      const urlParams = new URLSearchParams(window.location.search);



      // (예시) 모든 쿼리 콘솔로 출력
      //urlParams.entries()는 쿼리에 있는 key,value들을 iterator으로 리턴해줌
      /*
      for (const [key, value] of urlParams.entries()) {
        console.log(`키 $${key} 값은 ${value} 입니다.`);
      }
      */

      // 전시물 (item) 번호를 찾아오기
      //urlParams.get("key")Returns the first value associated with the given search parameter.
      const itemNo = urlParams.get("item");
      const lang = urlParams.get("lang");



      //이상한점 itemText 따로 정의 안해도 사용 가능함 
      //텍스트로드
      
      itemText.src=textFileDirectory+"/"+itemNo+lang+".txt";

      var index=itemList.indexOf(itemNo);


      //
      const title = document.getElementById("title");

      title.innerText = nameList[index];
      

      //오디오로드
      const audioPlayer = document.getElementById("audio")
      audioPlayer.src= audioFileDirectory+"/"+itemNo+lang+".mp3"

      // 다음 페이지와 이전 페이지

      const nextLink = document.getElementById("next");
      nextLink.href=websiteLink+"?item="+itemList[mod(index+1,itemLength)]+'&lang='+lang;

      const previousLink = document.getElementById("previous");
      previousLink.href=websiteLink+"?item="+itemList[mod(index-1,itemLength)]+'&lang='+lang;
      
      //언어 변경
  
      const englishLink = document.getElementById("english");
      englishLink.href=websiteLink+"?item="+itemList[index]+'&lang=eng';

      const koreanLink = document.getElementById("korean");
      koreanLink.href=websiteLink+"?item="+itemList[index]+'&lang=kor';

      // iframe 디자인

      var txtText = '';
      var frame = document.getElementById('itemText');
      frame.onload = function () {
        var body = frame.contentWindow.document.querySelector('body');
        txtText = body.innerHTML;

        /*
        body.style.fontSize = '20px';
        body.style.color = 'white';
        body.style.lineHeight = '30px';
        body.style.backgroundColor = 'rgba(52,53,83,255)';
        body.style.margin = '0';
        */



        var mainText=document.getElementsByClassName('mainText');
        mainText[0].innerHTML = txtText;

      };

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDown() {
  document.getElementById("drops").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.button')) {
    var dropdowns = document.getElementsByClassName("dropContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
