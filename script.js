/* ===( Build By : CODE AASHU )=== */
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there'sw1 a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });





  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
loco()

gsap.from("#main,#nav", {
  opacity: 0,
  filter: "blur(10px)",
  duration: 1.5

})
gsap.to("#cent", {
  top: "0%",
  scrollTrigger: {
    trigger: "#page1",
    scroller: "#main",
    start: "top top",
    // markers:true,
    scrub: 5
  }
})
function pg1() {

  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top top",
      // markers:true,
      scrub: 3,
      pin: true
    }
  })
  tl
    .to("#e1", {
      x: "-35vw"
    }, "a")
    .to("#e2", {
      x: "35vw"
    }, "a")
    .to("#cent", {
      width: "100%"
    }, "a")
    .to("#page2 > h1", {
      top: "50%",
      opacity: 0,
      filter: "blur(10px)",
    }, "a")

}
pg1()


function canva() {
  const canvas = document.querySelector("#page3>canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  })

  function files(index) {
    var data = `
    ./van00001.png
    ./van00002.png
    ./van00003.png
    ./van00004.png
    ./van00005.png
    ./van00006.png
    ./van00007.png
    ./van00008.png
    ./van00009.png
    ./van00010.png
    ./van00011.png
    ./van00012.png
    ./van00013.png
    ./van00014.png
    ./van00015.png
    ./van00016.png
    ./van00017.png
    ./van00018.png
    ./van00019.png
    ./van00020.png
    ./van00021.png
    ./van00022.png
    ./van00023.png
    ./van00024.png
    ./van00025.png
    ./van00026.png
    ./van00027.png
    ./van00028.png
    ./van00029.png
    ./van00030.png
    ./van00031.png
    ./van00032.png
    ./van00033.png
    ./van00034.png
    ./van00035.png
    ./van00036.png
    ./van00037.png
    ./van00038.png
    ./van00039.png
    ./van00040.png
    ./van00041.png
    ./van00042.png
    ./van00043.png
    ./van00044.png
    ./van00045.png
    ./van00046.png
    ./van00047.png
    ./van00048.png
    ./van00049.png
    ./van00050.png
    ./van00051.png
    ./van00052.png
    ./van00053.png
    ./van00054.png
    ./van00055.png
    ./van00056.png
    ./van00057.png
    ./van00058.png
    ./van00059.png
    ./van00060.png
    ./van00061.png
    ./van00062.png
    ./van00063.png
    ./van00064.png
    ./van00065.png
    ./van00066.png
    ./van00067.png
    ./van00068.png
    ./van00069.png
    ./van00070.png
    ./van00071.png
    ./van00072.png
    ./van00073.png
    ./van00074.png
    ./van00075.png
    ./van00076.png
    ./van00077.png
    ./van00078.png
    ./van00079.png
    ./van00080.png
    ./van00081.png
    ./van00082.png
    ./van00083.png
    ./van00084.png
    ./van00085.png
    ./van00086.png
    ./van00087.png
    ./van00088.png
    ./van00089.png
    ./van00090.png
    ./van00091.png
    ./van00092.png
    ./van00093.png
    ./van00094.png
    ./van00095.png
    ./van00096.png
    ./van00097.png
    ./van00098.png
    ./van00099.png
    ./van00100.png
    ./van00101.png
    ./van00102.png
    ./van00103.png
    ./van00104.png
    ./van00105.png
    ./van00106.png
    ./van00107.png
    ./van00108.png
    ./van00109.png
    ./van00110.png
    ./van00111.png
    ./van00112.png
    ./van00113.png
    ./van00114.png
    ./van00115.png
    ./van00116.png
    ./van00117.png
    ./van00118.png
    ./van00119.png
    ./van00120.png
    ./van00121.png
    ./van00122.png
    ./van00123.png
    ./van00124.png
    ./van00125.png
    ./van00126.png
    ./van00127.png
    ./van00128.png
    ./van00129.png
    ./van00130.png
    ./van00131.png
    ./van00132.png
    ./van00133.png
    ./van00134.png
    ./van00135.png
    ./van00136.png
    ./van00137.png
    ./van00138.png
    ./van00139.png
    ./van00140.png
    ./van00141.png
    ./van00142.png
    ./van00143.png
    ./van00144.png
    ./van00145.png
    ./van00146.png
    ./van00147.png
    ./van00148.png
    ./van00149.png
    ./van00150.png
    ./van00151.png
    ./van00152.png
    ./van00153.png
    ./van00154.png
    ./van00155.png
    ./van00156.png
    ./van00157.png
    ./van00158.png
    ./van00159.png
    ./van00160.png
    ./van00161.png
    ./van00162.png
    ./van00163.png
    ./van00164.png
    ./van00165.png
    ./van00166.png
    ./van00167.png
    ./van00168.png
    ./van00169.png
    ./van00170.png
    ./van00171.png
    ./van00172.png
    ./van00173.png
    ./van00174.png
    ./van00175.png
    ./van00176.png
    ./van00177.png
    ./van00178.png
    ./van00179.png
    ./van00180.png
    ./van00181.png`;
    return data.split("\n")[index];
  }

  const frameCount = 181;

  const images = [];
  const imageSeq = {
    frame: 0
  };

  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3",
      start: "top top",
      pin: true,
      scroller: "#main",
      // markers:true,
      scrub: 3,
      end: "300% 0%"
    }
  })
  tl
    .to("#page3>img", {
      height: "100%",
      width: "100%",
      duration: 4
    })
    .to("#page3 canvas", {
      clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0 0%)",
      duration: 10,
    })
    .to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      duration: 30,
      onUpdate: render
    })


  images[0].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context)
  }

  function scaleImage(img, ctx) {
    // var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);

  }



}
canva()
function pg3() {
  gsap.to("#l1", {
    opacity: 1,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3 canvas",
      scroller: "#main",
      start: "100% top",
      scrub: 2,
      // markers:true
    }
  })
  var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3 canvas",
      scroller: "#main",
      start: "180% top",
      scrub: 2,
      // markers:true
    }
  })
  tl2
    .to("#l1", {
      opacity: 0,
      duration: 1,

    })
    .to("#l2", {
      opacity: 1,
      duration: 1,

    })

  var tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page3 canvas",
      scroller: "#main",
      start: "250% top",
      scrub: 2,
      // markers:true
    }
  })
  tl3
    .to("#l2", {
      opacity: 0,
      duration: 1,

    })
    .to("#l3", {
      opacity: 1,
      duration: 1,

    })
}
pg3()

function navigation() {
  var menu = document.querySelector("#menu")
var clicked = true
menu.addEventListener("click", function () {
  if (clicked === true) {
    var mn1 = gsap.timeline()
    mn1
      .to("#m1", {
        rotate: "30deg",
        transformOrigin: "left"

      }, "m")
      .to("#m2", {
        width: "0"
      }, "m")
      .to("#m3", {
        rotate: "-30deg",
        transformOrigin: "left"

      }, "m")
      .to("#menu", {
        gap: "3px"
      }, "m")
      .to("#navigation", {
        top: "0%",
        duration: 3,
        ease: "power4.out",

        // ease: "expoScale(0.5,7,none)"
      })
    clicked = false
  }
  else {
    var mn1 = gsap.timeline()
    mn1
      .to("#m1", {
        rotate: "0deg",
        transformOrigin: "left"

      }, "m")
      .to("#m2", {
        width: "50%"
      }, "m")
      .to("#m3", {
        rotate: "0deg",
        transformOrigin: "left"

      }, "m")
      .to("#menu", {
        gap: "2px"
      }, "m")
      .to("#navigation", {
        top: "-120%",
        duration: 3,
        ease: "power4.out",

      })
    clicked = true
  }

})
}
navigation()

function pg5() {
  var fl =gsap.timeline({
    scrollTrigger:{
      // markers:true,
      trigger:"#page5",
      scroller:"#main",
      start:"top top",
      end:"300% top",
      pin:true,
      scrub:2
    }
  })
  fl
  .to("#page5 #one",{
    bottom:"110%",
    transform:" translate(-50%,0) scale(1) rotate(4deg)",
  
  },"o")
  .to("#page5 #two",{
    opacity:1,
  },"o")
  .to("#page5 #two",{
    bottom:"110%",
    transform:" translate(-50%,0) scale(1) rotate(4deg)"
  },"o2")
  .to("#page5 #three",{
    opacity:1,
  
  },"o2")
  .to("#page5 #three",{
    transform:" translate(-50%,0) scale(1) rotate(4deg)"
  })
  
}
pg5()
 

function footer() {
  var clutter = ""
document.querySelector("#footh1").textContent.split("").forEach(function (letter) {
  clutter += `<span>${letter}</span>`
})

document.querySelector("#footh1").innerHTML = clutter

var tl6 = gsap.timeline({
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"50% 70%",
    scrub:2
  }
})
tl6
.to("#page6 #st",{
  width:"100%",
},"p6")
.to("#page6 h1 span",{
  y:0,
},"p6")

}
footer()












//------------------ 168 images ----------------------


// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00000.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00001.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00002.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00003.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00004.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00005.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00006.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00007.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00008.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00009.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00010.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00011.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00012.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00013.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00014.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00015.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00016.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00017.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00018.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00019.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00020.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00021.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00022.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00023.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00024.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00025.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00026.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00027.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00028.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00029.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00030.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00031.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00032.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00033.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00034.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00035.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00036.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00037.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00038.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00039.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00040.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00041.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00042.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00043.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00044.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00045.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00046.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00047.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00048.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00049.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00050.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00051.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00052.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00053.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00054.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00055.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00056.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00057.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00058.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00059.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00060.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00061.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00062.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00063.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00064.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00065.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00066.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00067.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00068.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00069.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00070.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00071.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00072.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00073.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00074.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00075.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00076.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00077.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00078.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00079.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00080.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00081.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00082.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00083.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00084.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00085.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00086.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00087.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00088.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00089.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00090.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00091.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00092.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00093.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00094.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00095.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00096.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00097.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00098.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00099.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00100.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00101.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00102.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00103.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00104.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00105.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00106.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00107.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00108.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00109.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00110.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00111.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00112.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00113.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00114.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00115.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00116.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00117.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00118.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00119.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00120.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00121.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00122.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00123.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00124.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00125.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00126.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00127.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00128.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00129.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00130.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00131.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00132.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00133.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00134.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00135.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00136.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00137.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00138.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00139.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00140.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00141.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00142.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00143.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00144.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00145.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00146.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00147.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00148.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00149.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00150.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00151.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00152.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00153.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00154.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00155.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00156.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00157.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00158.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00159.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00160.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00161.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00162.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00163.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00164.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00165.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00166.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00167.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/control-panel/00168.jpg&w=1200&q=90



//------------------ 81 images ----------------------

// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00000.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00001.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00002.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00003.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00004.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00005.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00006.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00007.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00008.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00009.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00010.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00011.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00012.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00013.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00014.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00015.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00016.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00017.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00018.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00019.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00020.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00021.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00022.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00023.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00024.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00025.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00026.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00027.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00028.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00029.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00030.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00031.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00032.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00033.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00034.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00035.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00036.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00037.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00038.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00039.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00040.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00041.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00042.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00043.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00044.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00045.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00046.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00047.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00048.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00049.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00050.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00051.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00052.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00053.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00054.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00055.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00056.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00057.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00058.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00059.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00060.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00061.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00062.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00063.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00064.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00065.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00066.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00067.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00068.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00069.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00070.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00071.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00072.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00073.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00074.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00075.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00076.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00077.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00078.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00079.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00080.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/lens-animation/00081.jpg&w=1200&q=90


//------------------ 35 images ----------------------


// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00000.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00001.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00002.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00003.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00004.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00005.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00006.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00007.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00008.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00009.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00010.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00011.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00012.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00013.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00014.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00015.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00016.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00017.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00018.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00019.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00020.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00021.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00022.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00023.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00024.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00025.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00026.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00027.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00028.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00029.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00030.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00031.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00032.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00033.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00034.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/viewfinder-animation/00035.jpg&w=1200&q=90


//------------------ 274 images ----------------------


// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00000.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00001.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00002.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00003.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00004.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00005.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00006.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00007.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00008.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00009.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00010.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00011.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00012.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00013.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00014.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00015.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00016.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00017.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00018.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00019.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00020.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00021.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00022.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00023.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00024.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00025.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00026.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00027.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00028.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00029.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00030.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00031.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00032.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00033.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00034.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00035.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00036.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00037.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00038.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00039.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00040.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00041.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00042.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00043.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00044.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00045.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00046.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00047.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00048.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00049.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00050.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00051.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00052.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00053.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00054.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00055.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00056.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00057.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00058.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00059.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00060.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00061.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00062.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00063.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00064.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00065.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00066.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00067.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00068.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00069.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00070.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00071.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00072.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00073.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00074.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00075.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00076.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00077.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00078.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00079.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00080.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00081.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00082.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00083.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00084.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00085.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00086.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00087.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00088.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00089.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00090.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00091.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00092.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00093.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00094.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00095.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00096.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00097.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00098.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00099.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00100.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00101.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00102.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00103.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00104.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00105.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00106.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00107.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00108.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00109.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00110.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00111.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00112.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00113.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00114.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00115.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00116.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00117.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00118.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00119.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00120.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00121.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00122.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00123.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00124.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00125.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00126.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00127.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00128.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00129.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00130.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00131.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00132.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00133.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00134.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00135.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00136.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00137.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00138.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00139.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00140.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00141.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00142.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00143.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00144.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00145.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00146.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00147.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00148.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00149.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00150.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00151.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00152.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00153.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00154.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00155.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00156.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00157.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00158.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00159.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00160.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00161.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00162.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00163.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00164.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00165.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00166.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00167.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00168.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00169.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00170.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00171.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00172.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00173.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00174.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00175.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00176.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00177.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00178.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00179.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00180.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00181.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00182.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00183.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00184.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00185.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00186.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00187.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00188.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00189.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00190.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00191.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00192.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00193.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00194.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00195.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00196.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00197.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00198.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00199.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00200.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00201.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00202.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00203.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00204.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00205.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00206.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00207.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00208.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00209.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00210.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00211.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00212.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00213.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00214.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00215.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00216.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00217.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00218.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00219.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00220.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00221.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00222.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00223.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00224.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00225.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00226.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00227.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00228.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00229.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00230.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00231.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00232.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00233.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00234.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00235.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00236.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00237.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00238.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00239.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00240.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00241.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00242.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00243.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00244.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00245.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00246.jpg&w=1200&q=90
// https://i2-camera.polaroid.com/_next/image?url=/images/discover/exploded-animation/00247.jpg&w=1200&q=90