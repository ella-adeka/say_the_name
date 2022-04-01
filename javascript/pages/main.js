 // Select the necessary elements with querySelector
 const mainHome = document.querySelector('.mainHome');
 const paragraph = document.querySelector('.mainHome__paragraph');

 // mainHome.addEventListener("DOMContentLoaded", mainTitleAnimation());
 // mainHome.addEventListener("DOMContentLoaded", mainDescriptionAnimation());
 // mainHome.addEventListener("DOMContentLoaded", mainImageOne());
 // mainHome.addEventListener("DOMContentLoaded", mainImageTwo());
 // mainHome.addEventListener("DOMContentLoaded", mainSubtitle());

 

 // MUTATION OBSERVER
 // const config = {attributes: true, childList: true, subtree: true};
 // const callback = function(mutationList, observer){
 //     for (const mutation of mutationList) {
 //         if (mutation.type === 'childList') {
 //             showNews();
 //             // console.log("changed");
 //         } 
 //         // else if (mutation.type === 'attributes') {
 //         //     console.log('The ' + mutation.attributeName + ' attribute was modified.');
 //         // }
 //     }
 // };

 // const observer = new MutationObserver(callback);
 // observer.observe(mainHome, config);
 // observer.disconnect();

 // Initialize i and set its value to 0
 // let i = 0;
 let i = 0;

 // Initialize homePageShow
 let homePageShow;

 
 
 // homePageNews will be called onload, showNews() is called in it
 function homePageNews() {
     showNews();
     mainTitleAnimation();
     mainDescriptionAnimation();
     mainImageOne();
     mainImageTwo();
     mainSubtitle();

     changeImage();
 }
 

 // Function to display each homeData in intervals
 function showNews() {
     
     homePageShow =  setInterval(() => {
         i++;
         // const image1 = document.querySelector(".mainHome__paragraph__images__image1Div__image1");
         // const imageToChange = `${homeData[i].image3}`;
         // setInterval(() => {
         //     image1.setAttribute("src", imageToChange);
         // }, 5000);
         paragraph.innerHTML = `
             <h1 class="mainHome__paragraph__topic">${homeData[i].topic}</h1>
             <h1 class="mainHome__paragraph__title" >${homeData[i].title}</h1>
             <a class="mainHome__paragraph__subtitle" href="${homeData[i].link}">${homeData[i].subtitle}</a>  
             <p class="mainHome__paragraph__description">${homeData[i].description}</p>
             <div class="mainHome__paragraph__images">
                 <div class="mainHome__paragraph__images__image1Div">
                     <img class="mainHome__paragraph__images__image1Div__image1" src="${homeData[i].image1}" alt="">
                 </div>
                 <div class="mainHome__paragraph__images__image2Div">
                     <img class="mainHome__paragraph__images__image2Div__image2" src="${homeData[i].image2}" alt="">
                 </div>
             </div>
             <div class="mainHome__paragraph__imagesOutside">
                 <img class="mainHome__paragraph__imagesOutside__image3" src="${homeData[i].image3}" alt="">
                 <img class="mainHome__paragraph__imagesOutside__image4" src="${homeData[i].image4}" alt="">
                 <img class="mainHome__paragraph__imagesOutside__image5" src="${homeData[i].image5}" alt="">
             </div>
         `;
         // If i is greater than homeData.length, clear interval, set i to -1 and call showNews() to homedata in intervals again
         // Sort of like a loop.
          if (i!== homeData.length + 1) {
             changeImage(i)
         }
         if (i>= homeData.length -1) {
             clearInterval(homePageShow);
             i=-1;
             if (i = -1) {
                 showNews(); 
             }
         }
         mainTitleAnimation();
         mainDescriptionAnimation();
         mainImageOne();
         mainImageTwo();
         mainSubtitle();
        
     },10000); 
 }      
 // Append paragraph to mainHome
 mainHome.append(paragraph);  

 function changeImage() {
     const image1 = document.querySelector(".mainHome__paragraph__images__image1Div__image1");
     const image2 = document.querySelector(".mainHome__paragraph__images__image2Div__image2");
     let imageOneToChange = `${homeData[i].image3}`;
     let imageTwoToChange = `${homeData[i].image4}`;
     setInterval(() => {
         image1.setAttribute("src", imageOneToChange);
         image2.setAttribute("src", imageTwoToChange);
     }, 5000);
 }
 
 
 // HOME PAGE ANIMATIONS
 function mainTitleAnimation() {
     const title = document.querySelector('.mainHome__paragraph__title');
     const titleText = title.textContent;
     const splitTitle = titleText.split("");
     title.textContent = "";
     for (let j = 0; j < splitTitle.length; j++) {
         title.innerHTML += "<span class='mainHome__paragraph__title__span'>" + splitTitle[j] + "</span>";  
     }

     let char = 0;
     let timer = setInterval(onTick, 100);

     function onTick() {
         const span = title.querySelectorAll('span')[char];
         span.style.cssText = "opacity:1;transition: .2s ease-in;";
         span.classList.add("fade");
         char++;

         setInterval(() => {
             span.style.cssText = "opacity:0;color:pink;transition: .2s ease-in;";
         }, 8000);
         if (char == splitTitle.length) {
             complete();
             return;
         }
     }

     function complete() {
         clearInterval(timer);
         timer = null;
     }
 }
 
 function mainDescriptionAnimation() {
     const description = document.querySelector(".mainHome__paragraph__description");
     description.style.cssText = "opacity:0;display:inline-block;transform:translateY(50px)";
     
     let descriptionAnimationIn = setInterval(() => {
         description.style.cssText = "opacity:1;transition:all 0.2s ease-in; transform:translateY(0px);";
         clearInterval(descriptionAnimationIn);
     }, 1000);

     let descriptionAnimationOut = setInterval(() => {
         description.style.cssText = "opacity:0;transition:all 0.2s ease-in; transform:translateY(50px);";
         clearInterval(descriptionAnimationOut);
     }, 9500);

     
 }

 function mainImageOne() {
     const imageOne = document.querySelector(".mainHome__paragraph__images__image1Div__image1");
  
     // imageOne.style.width = "0";
     imageOne.style.cssText = "opacity:0;display:inline-block; transition: all 0.2s ease-in; transform:translateY(20px)";
     setInterval(() => {
         // imageOne.style.transition = "all 0.2s ease-in";
         imageOne.style.cssText = "opacity:1;  transform: translateY(0)";
         // imageOne.style.transform = "translateY(0)";
     // }, 500);
     }, 1500);
         
         setInterval(() => {
         imageOne.style.opacity = "0";
         // imageOne.style.width = "0";
     }, 4500);
 }

 function mainImageTwo() {
     const imageTwo = document.querySelector(".mainHome__paragraph__images__image2Div__image2");
     // imageTwo.style.opacity = "0";
     // imageTwo.style.width = "0";
     // imageTwo.style.transition = "all 0.1s ease-in";
     
     imageTwo.style.cssText = "opacity:0; display:inline-block;  transform:translateY(30px)";
     setInterval(() => {
         // imageTwo.style.opacity = "1";
         // imageTwo.style.width = "100%";
         // imageTwo.style.transform = "translateX(0))";
         imageTwo.style.cssText = "opacity:1; transition:all 0.2s ease-in; transform:translateY(0)";
     // }, 1000);
     }, 1800);

     let imageTwoOut = setInterval(() => {
         // imageTwo.style.opacity = "0";
         // imageTwo.style.width = "0";
         imageTwo.style.cssText = "opacity:0;transition:all 0.2s ease-in; transform:translateY(50px);";
         clearInterval(imageTwoOut);
     }, 9000);
 }

 function mainSubtitle() {
     const topic = document.querySelector(".mainHome__paragraph__topic");
     const subtitle = document.querySelector(".mainHome__paragraph__subtitle");
     subtitle.style.cssText = "opacity:0;";

     let mainSub = setInterval(() => {
         subtitle.style.cssText = "opacity:1; transition:all 0.2s ease-in";
         clearInterval(mainSub);
     }, 1000);

    
 }
 function clearAnimation() {
     const title = document.querySelector('.mainHome__paragraph__title');
     const titleText = title.textContent;
     const splitTitle = titleText.split("");
     // console.log(splitTitle);


     let timer;
     let char = 0;
     
     // setInterval(() => {
         timer = setInterval(onTick, 100);
     // }, 4000);

     // setInterval(() => {
     //         on();
     //     }, 4100);
     

     function onTick() {
         const span = title.querySelectorAll('span')[char]
         span.style.cssText = "opacity:0;color:red;transition: .2s ease-in;";
         span.classList.add("fade");
         char++;
         // complete();
         
         if (char == splitTitle.length) {
             // span.style.cssText = "opacity:0;color:transparent;transition: .2s ease-in;";
             complete();
             return;
         }
     }

     function complete() {
         clearInterval(timer);
         timer = null;
     }
 
 }