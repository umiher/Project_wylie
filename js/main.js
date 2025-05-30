window.addEventListener("load", function(){
    let start=document.querySelector("#start");
    let header=document.querySelector("#header");
    let menu=header.firstElementChild;
    let gnb=menu.querySelector("#gnb");
    let gnbList=gnb.querySelectorAll("#gnb li");

    let mobile=menu.querySelector(".mobile");
    let mobileGnb=mobile.querySelector("#mobile_gnb");
    let mobileGnbList=mobile.querySelectorAll("#mobile_gnb li");

    let tab=menu.querySelector(".tab");
    let dim=menu.querySelector(".dim");

    let section=this.document.querySelectorAll("section");

    let pageList=[header, ...section];

    function controlMenu(n){
        console.log(n);

        gnbList.forEach(function(item, i){
            if(i == n){
                gnbList[i].classList.add("active");
            }
            else{
                gnbList[i].classList.remove("active");
            }
        });

        if(n != 0){
            menu.classList.add("fixed");
        }
        else{
            menu.classList.remove("fixed");
        }
    }

    pageList.forEach(function(item, i){
        gsap.timeline({
            scrollTrigger: {
                trigger: item,
                start: "top center",
                end: "bottom center",
                // markers: true,
                onEnter: function(){
                    controlMenu(i);
                },
                onEnterBack: function(){
                    controlMenu(i);
                }
            }
        });
    });

    tab.addEventListener("click", function(e){
		e.preventDefault();

		tab.classList.toggle("active");
		mobile.classList.toggle("active");
		dim.classList.toggle("active");
	});

    let topPos=0;

	window.addEventListener("resize", function(){
		if(window.innerWidth > 720 && tab.classList.contains("active")){
			tab.classList.remove("active");
			mobile.classList.remove("active");
			dim.classList.remove("active");
		}
	});

    // gnb page duration
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
    
    // start animation
	const startTl=gsap.timeline();

	startTl.from(".main_slider .desc p", { y: 30, opacity: 0, duration: 0.5 });

	startTl.from(".main_slider .desc h2", { y: 30, opacity: 0, duration: 0.5 });

	startTl.from(".main_slider .desc .btn", { y: 30, opacity: 0, duration: 0.5 });

    // business animation
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

    // portfolio animation
    let portfolioList=document.querySelectorAll("#portfolio li");

    gsap.from(portfolioList, { y: 100, opacity: 0, duration: 0.5, stagger: 0.2,
        scrollTrigger: {
            trigger: "#portfolio",
            start: "top center",
            end: "bottom center"
        }
    });

    // culture animation
    let cultureList=document.querySelectorAll("#culture li");
    let cultureListLine=document.querySelectorAll("#culture li .line");

    const cultureTl=gsap.timeline({
        scrollTrigger: {
            trigger: "#culture",
            start: "top center",
            end: "bottom center",
            // markers: true
        }
    });

    let device;
    let decoLineHeight;
    let cultureAnimationFlag=false;

    function decoLineFunction(){
        if(window.innerWidth > 940){
            if(device == "pc") return;

            device="pc";
            decoLineHeight=90;
        }
        else{
            if(device == "mobile") return;

            device="mobile";
            decoLineHeight=90;
        }

        if(cultureAnimationFlag == true){
            cultureListLine.forEach(function(item){
                gsap.to(item, { height: decoLineHeight, duration: 0.5 });
            });
        }
    }

    decoLineFunction();

    cultureList.forEach(function(item, i){
        if(i%2 == 1){
            cultureTl.from(item, { x: 50, opacity: 0, duration: 0.6 });

            cultureTl.fromTo(item.querySelector(".line"), { height: 0 }, { height: decoLineHeight, duration: 0.4, onComplete: function(){
                if(i == cultureList){
                    cultureAnimationFlag=true;
                }
            }});
        }
        else{
            cultureTl.from(item, { x: -50, opacity: 0, duration: 0.6 });

            cultureTl.fromTo(item.querySelector(".line"), { height: 0 }, { height: decoLineHeight, duration: 0.4 });
        }
    });

    // Awards animation
    let awardList=this.document.querySelectorAll("#award li");

    const awardTl=gsap.timeline({
        scrollTrigger: {
            trigger: "#award",
            start: "top center",
            end: "bottom center",
            // markers: true
        }
    });

    awardList.forEach(function(item, i){
        if(i%2 == 1){
            awardTl.from(item, { y: 100, opacity: 0, duration: 0.7 });
        }
        else{
            awardTl.from(item, { y: -100, opacity: 0, duration: 0.7 });
        }
    });

    // contact animation
    const contactTl=gsap.timeline({
        scrollTrigger: {
            trigger: "#contact",
            start: "top center",
            end: "bottom center",
            // markers: true
        }
    });

    contactTl.from("#contact input[id=name]", { y: 20, opacity: 0, duration: 0.4, delay: 0.6 });
    contactTl.from("#contact input[id=email]", { y: 20, opacity: 0, duration: 0.4 });
    contactTl.from("#contact input[id=subject]", { y: 20, opacity: 0, duration: 0.4 });
    contactTl.from("#contact textarea", { y: 20, opacity: 0, duration: 0.4 });
    contactTl.from("#contact input[type=submit]", { y: 20, opacity: 0, duration: 0.4 });
});