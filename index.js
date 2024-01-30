      //여기에 전시물 순서대로 들어갈거임
      const itemList=['0-0-1', '0-0-2', '0-0-3', '0-0-4', '0-0-5', '0-0-6', '0-0-7', '0-0-8', '0-0-9', '0-0-10', '0-0-11', '0-0-12', '0-0-13', '0-0-14', '0-0-15', '0-0-16', '0-0-17', '0-0-18', '0-0-19', '0-0-20', '0-0-21', '0-0-22', '0-0-23', '0-0-24', '0-0-25', '0-0-26', '0-0-27', '0-0-28', '0-0-29', '0-0-30', '1-3-2', '1-3-3', '1-3-3.1', '1-3-4', '1-3-5', '1-3-5.1', '1-3-5.2', '1-3-5.3', '1-3-6', '1-3-7', '1-3-8', '1-3-10', '1-3-10.1', '1-3-10.2', '1-3-11', '1-3-12', '1-3-13', '1-3-14', '1-3-15', '1-3-16', '1-3-17', '1-3-18', '1-3-20', '1-3-20.1', '1-3-22', '1-3-23', '1-3-24', '1-3-25', '1-3-26', '1-3-27', '1-3-28', '1-3-30', '1-4-31', '1-4-32', '1-4-34', '1-4-34.1', '1-4-36', '1-4-37', '1-4-38', '1-4-38.1', '1-4-39', '1-4-39.1', '1-4-40', '1-4-52', '1-4-53', '1-4-60', '1-4-61', '1-4-62', '1-4-63', '1-4-64', '1-4-66', '1-4-67', '1-4-68', '1-4-68.1', '1-4-69', '1-4-70', '1-4-73', '1-4-74', '1-4-75', '1-4-76', '1-4-76.1', '2-4-81', '2-4-82', '2-4-82.1', '2-4-82.2', '2-4-82.3', '2-4-82.4', '2-4-82.5', '2-4-82.6', '2-4-82.7', '2-4-82.8', '2-4-82.9', '2-4-82.91', '2-4-83', '2-4-85', '2-4-86', '2-4-87', '2-4-94', '2-4-94.1', '2-4-94.2', '2-4-96', '2-3-96', '2-3-96.1', '2-3-96.2', '2-3-96.3', '2-3-96.4', '2-3-96.5', '2-3-96.6', '2-3-96.7', '2-3-96.8', '2-3-96.9', '2-3-96.91', '2-3-96.92', '2-3-96.93', '2-3-96.94', '2-3-96.95', '2-3-96.96', '2-3-96.97', '2-3-96.98', '2-3-97', '2-3-103', '2-3-104', '2-3-105', '2-3-106', '2-3-107', '2-3-108', '2-3-110', '2-3-110.1', '2-3-111', '3-1-1', '3-1-2', '3-1-3', '3-1-4', '3-1-5', '3-1-7', '3-1-8', '3-1-9'] ;
      const itemLength=itemList.length

      function mod(number,modulo){
        return (number%modulo+modulo)%modulo;

      }
      //웹사이트 링크 수정해야함
      const websiteLink="https://seoulsciencepark.github.io/index.html";
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

      // HTML 부분의 h1 tag 찾기
      // h1 tag 의 내용 바꾸기

      /*

      const title = document.getElementById("title");

      title.innerText = itemNo;
      */

      //이상한점 itemText 따로 정의 안해도 사용 가능함 
      //텍스트로드
      itemText.data=textFileDirectory+"/"+itemNo+lang+".txt";

      var index=itemList.indexOf(itemNo);

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
      



      
