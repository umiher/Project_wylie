<div align="center">
<h1>Project_Wylie 📖</h1>
이 프로젝트는 Wylie을 리뉴얼 한 반응형 웹 사이트입니다.
</div>

<br>

<image width="100%" src="main.png"></image>

<br>

<div align="center">
	
### ☁ [Visit Site](https://project-wylie.vercel.app/) ☁

</div>

<br>
<br>

## 💡 Stacks
<p>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?&style=for-the-badge&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/html5-E34F26?&style=for-the-badge&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?&style=for-the-badge&logo=CSS&logoColor=white"/>
</p>

> **GSAP을 활용해 스크롤 애니메이션과 동적 UI 인터랙션을 구현하였습니다.**
> <br>
> **직관적인 네비게이션, 모바일 메뉴, 위치 기반 시각적 효과로 모바일과 웹에서 최적화된 사용자 경험을 제공합니다.**

<br>
<br>

## 🔖 주요 특징
### 1. Main : 
```c
gnbList.forEach(function(item, i){
  gnbList[i].addEventListener("click", function(e){
    e.preventDefault();

    topPos=pageList[i].offsetTop;

    gsap.to(window, { scrollTo: topPos, duration: 0.4 });
  });

  mobileGnbList[i].addEventListener("click", function(e){
    e.preventDefault();

    topPos=pageList[i].offsetTop;

    gsap.to(window, { scrollTo: topPos, duration: 0.4, onComplete: function(){
      tab.classList.remove("active");
      mobile.classList.remove("active");
      dim.classList.remove("active");
    }});
  });
});
```

> **GSAP를 활용한 스크롤 애니메이션을 구현하였습니다.**

<br>

### 2. ScrollTrigger :
```c
let businessList=document.querySelectorAll("#business li");

const businessTl=gsap.timeline({
    scrollTrigger: {
        trigger: "#business",
        start: "top center",
        end: "bottom center"
    }
});

businessList.forEach(function(item, i){
    if(i%2 == 1){
        businessTl.from(item, { y: 100, opacity: 0, duration: 0.6 });
    }
    else{
        businessTl.from(item, { y: -100, opacity: 0, duration: 0.6 });
    }
});
```

> **특정 페이지 위치에 도달 시 트리거되는 애니메이션을 효과를 적용하였습니다.**




