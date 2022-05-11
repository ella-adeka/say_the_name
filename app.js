import '/javascript/color_mode.js';
import '/javascript/cursor.js';



// function pageTransition() {
//     var tl = gsap.timeline();
//     tl.to("div.loading-screen", {duration: 1.2, width: "100%", bottom: "0%",ease: "Expo.easeInOut",});

//     tl.to("div.loading-screen", {duration: 1, width: "100%", bottom: "100%",ease: "Expo.easeInOut",delay: 0.3,});
//     tl.set("div.loading-screen", { bottom: "-100%" });
// }

// function contentAnimation() {
//     var tl = gsap.timeline();
//     tl.from(".animate-this", { duration: 1, y: 30, opacity: 0, stagger: 0.4, delay: 0.2 });
// }

// function delay(n) {
//     n = n || 2000;
//     return new Promise((done) => {
//         setTimeout(() => {
//             done();
//         }, n);
//     });
// }


//     barba.init({
//         sync: true,

//         transitions: [
//             {
//                 leave(data){
//                     return gsap.to(data.current.container, {
//                         opacity: 0
//                     });
//                 },
//                 enter(data){
//                     return gsap.from(data.next.container, {
//                         opacity: 0
//                     });
//                 }
//             },
//         ],
//     });
