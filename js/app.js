console.log(
  "%cAditya  Rawat",
  "font-family: 'La Belle Aurore', cursive; font-size: 6em; color: #515152; text-transform: uppercase;"
);
console.log(
  "%cA Web Developer",
  "font-family: Times New Roman; font-size: 4em; color:#fff; "
);
// HEADER

var hambugerClick = document.querySelector(".navbar-toggler");
hambugerClick.onclick = function () {
  document.body.classList.toggle("SM-showMenu");
};

// var menuCloseClick = document.querySelector('.navbar-toggler');
// if (menuCloseClick != undefined && menuCloseClick != null)
//     menuCloseClick.onclick = function () {
//         document.body.classList.remove("SM-showMenu");
//     }

var icon = document.getElementById("birthHamburger"),
  buttonText = document.getElementById("button-text"),
  animationToCheck = document.getElementById("animation-to-check"),
  logo = document.getElementById("icon");
//	animationToGreen = document.getElementById("animation-to-green"),
animationToStar = document.getElementById("animation-to-star");
//	animationToYellow = document.getElementById("animation-to-yellow");

icon.addEventListener(
  "click",
  function () {
    if (icon.classList.contains("navbar-close")) {
      icon.classList.remove("navbar-close");
      // animationToStar.beginElement();
      //animationToYellow.beginElement();
      //buttonText.innerHTML = "Save";
    } else {
      icon.classList.add("navbar-close");
      logo.style.opacity = 1;
      $("body").addClass("fixed-position");
      // animationToCheck.beginElement();
      //animationToGreen.beginElement();
      //	buttonText.innerHTML = "Saved!";
    }

    // var s = Snap('#BM');
    // 	s.select('.st0').animate({transform:'t1,1 s1.2'}, 2000);
  },
  false
);

$(".navbar-nav li a").on("click", function () {
  $("#birthHamburger").click();
  // console.log('Clicked')
});

var textWrapper = document.querySelector(".ml13");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
var textWrapper = document.querySelector(".ml14");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
var textWrapper = document.querySelector(".ml15");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
var textWrapper = document.querySelector(".ml16");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
// var btn = document.getElementById("btn");
$(document).ready(function () {
  $(".ml13").hover(function () {
    initOciliator(true);

    anime
      .timeline({ loop: false })

      .add({
        targets: " .ml13 .letter",
        translateY: [0, -20],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 350,
        delay: (el, i) => 300 + 30 * i,
      })
      .add({
        targets: " .ml13 .letter",
        translateY: [20, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 150,
        delay: (el, i) => 100 + 30 * i,
      });
  });
  $(".ml14").hover(function () {
    initOciliator(true);

    anime
      .timeline({ loop: false })

      .add({
        targets: " .ml14 .letter",
        translateY: [0, -20],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 350,
        delay: (el, i) => 300 + 30 * i,
      })
      .add({
        targets: " .ml14 .letter",
        translateY: [20, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 150,
        delay: (el, i) => 100 + 30 * i,
      });
  });
  $(".ml15").hover(function () {
    initOciliator(true);

    anime
      .timeline({ loop: false })

      .add({
        targets: " .ml15 .letter",
        translateY: [0, -20],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 350,
        delay: (el, i) => 300 + 30 * i,
      })
      .add({
        targets: " .ml15 .letter",
        translateY: [20, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 150,
        delay: (el, i) => 100 + 30 * i,
      });
  });
  $(".ml16").hover(function () {
    initOciliator(true);

    anime
      .timeline({ loop: false })

      .add({
        targets: " .ml16 .letter",
        translateY: [0, -20],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 350,
        delay: (el, i) => 300 + 30 * i,
      })
      .add({
        targets: " .ml16 .letter",
        translateY: [20, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 150,
        delay: (el, i) => 100 + 30 * i,
      });
  });
});

// setTimeout(function () {

//     sectionHome.find(".blast").removeClass('animated bounceIn');
//     sectionHome.find(".blast").css('opacity', 1);

//     sectionHome.find(".blast").mouseenter(function () {

//         var el = jQuery(this);

//         jQuery(this).addClass('animated rubberBand');
//         jQuery(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {

//             el.removeClass('animated rubberBand');

//         });

//     });

// }, 3000);

/*
	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
*/

// const elts = {
//   text1: document.getElementById("text1"),
//   text2: document.getElementById("text2"),
// };

// const texts = ["Student", "Web Devloper", "Pythoninst"];

// // Controls the speed of morphing.
// const morphTime = 2;
// const cooldownTime = 1.2;

// let textIndex = texts.length - 1;
// let time = new Date();
// let morph = 0;
// let cooldown = cooldownTime;

// elts.text1.textContent = texts[textIndex % texts.length];
// elts.text2.textContent = texts[(textIndex + 1) % texts.length];

// function doMorph() {
//   morph -= cooldown;
//   cooldown = 0;

//   let fraction = morph / morphTime;

//   if (fraction > 1) {
//     cooldown = cooldownTime;
//     fraction = 1;
//   }

//   setMorph(fraction);
// }

// function setMorph(fraction) {
//   elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//   elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

//   fraction = 1 - fraction;
//   elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
//   elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

//   elts.text1.textContent = texts[textIndex % texts.length];
//   elts.text2.textContent = texts[(textIndex + 1) % texts.length];
// }

// function doCooldown() {
//   morph = 0;

//   elts.text2.style.filter = "";
//   elts.text2.style.opacity = "100%";

//   elts.text1.style.filter = "";
//   elts.text1.style.opacity = "0%";
// }

// function animate() {
//   requestAnimationFrame(animate);

//   let newTime = new Date();
//   let shouldIncrementIndex = cooldown > 0;
//   let dt = (newTime - time) / 1000;
//   time = newTime;

//   cooldown -= dt;

//   if (cooldown <= 0) {
//     if (shouldIncrementIndex) {
//       textIndex++;
//     }

//     doMorph();
//   } else {
//     doCooldown();
//   }
// }

// Start the animation.
// animate();

// OSCILATOR

function initOciliator(remove) {
  ctx = document.getElementById("canvas").getContext("2d");

  if (!remove) {
    var ctx,
      hue,
      logo,
      form,
      buffer,
      target = {},
      tendrils = [],
      settings = {};

    settings.debug = false;
    settings.friction = 0.5;
    settings.trails = 30;
    settings.size = 50;
    settings.dampening = 0.25;
    settings.tension = 0.98;

    Math.TWO_PI = Math.PI * 2;

    // ========================================================================================
    // Oscillator
    // ----------------------------------------------------------------------------------------

    function Oscillator(options) {
      this.init(options || {});
      // console.log('Hello world2');
    }

    Oscillator.prototype = (function () {
      var value = 0;

      return {
        init: function (options) {
          this.phase = options.phase || 0;
          this.offset = options.offset || 0;
          this.frequency = options.frequency || 0.001;
          this.amplitude = options.amplitude || 1;
        },

        update: function () {
          this.phase += this.frequency;
          value = this.offset + Math.sin(this.phase) * this.amplitude;
          return value;
        },

        value: function () {
          return value;
        },
      };
    })();

    // ========================================================================================
    // Tendril
    // ----------------------------------------------------------------------------------------

    function Tendril(options) {
      this.init(options || {});
    }

    Tendril.prototype = (function () {
      function Node() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
      }

      return {
        init: function (options) {
          this.spring = options.spring + Math.random() * 0.1 - 0.05;
          this.friction = settings.friction + Math.random() * 0.01 - 0.005;
          this.nodes = [];

          for (var i = 0, node; i < settings.size; i++) {
            node = new Node();
            node.x = target.x;
            node.y = target.y;

            this.nodes.push(node);
          }
        },

        update: function () {
          var spring = this.spring,
            node = this.nodes[0];

          node.vx += (target.x - node.x) * spring;
          node.vy += (target.y - node.y) * spring;

          for (var prev, i = 0, n = this.nodes.length; i < n; i++) {
            node = this.nodes[i];

            if (i > 0) {
              prev = this.nodes[i - 1];

              node.vx += (prev.x - node.x) * spring;
              node.vy += (prev.y - node.y) * spring;
              node.vx += prev.vx * settings.dampening;
              node.vy += prev.vy * settings.dampening;
            }

            node.vx *= this.friction;
            node.vy *= this.friction;
            node.x += node.vx;
            node.y += node.vy;

            spring *= settings.tension;
          }
        },

        draw: function () {
          var x = this.nodes[0].x,
            y = this.nodes[0].y,
            a,
            b;

          ctx.beginPath();
          ctx.moveTo(x, y);

          for (var i = 1, n = this.nodes.length - 2; i < n; i++) {
            a = this.nodes[i];
            b = this.nodes[i + 1];
            x = (a.x + b.x) * 0.5;
            y = (a.y + b.y) * 0.5;

            ctx.quadraticCurveTo(a.x, a.y, x, y);
          }

          a = this.nodes[i];
          b = this.nodes[i + 1];

          ctx.quadraticCurveTo(a.x, a.y, b.x, b.y);
          ctx.stroke();
          ctx.closePath();
        },
      };
    })();

    // ----------------------------------------------------------------------------------------

    function init(event) {
      document.removeEventListener("mousemove", init);
      document.removeEventListener("touchstart", init);

      document.addEventListener("mousemove", mousemove);
      document.addEventListener("touchmove", mousemove);
      document.addEventListener("touchstart", touchstart);

      mousemove(event);
      reset();
      loop();
    }

    function reset() {
      tendrils = [];

      for (var i = 0; i < settings.trails; i++) {
        tendrils.push(
          new Tendril({
            spring: 0.45 + 0.025 * (i / settings.trails),
          })
        );
      }
    }

    function randomIntFromInterval(min, max) {
      // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    var color = randomIntFromInterval(1, 2);

    function loop() {
      if (!ctx.running) return;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = "#1D1D1D";
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = "hsla(113, 100%, 53%,0.25)";
      ctx.lineWidth = 1;

      if (color == 1) {
        ctx.strokeStyle = "hsla(113, 100%, 53%,0.25)";
      } else {
        ctx.strokeStyle = "hsla(34, 100%, 50%,0.25)";
      }

      for (var i = 0, tendril; i < settings.trails; i++) {
        tendril = tendrils[i];
        tendril.update();
        tendril.draw();
      }

      ctx.frame++;
      requestAnimFrame(loop);
    }

    function resize() {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
    }

    function start() {
      if (!ctx.running) {
        ctx.running = true;
        loop();
      }
    }

    function stop() {
      ctx.running = false;
    }

    function mousemove(event) {
      if (event.touches) {
        target.x = event.touches[0].pageX;
        target.y = event.touches[0].pageY;
      } else {
        target.x = event.clientX;
        target.y = event.clientY;
      }
      event.preventDefault();
    }

    function touchstart(event) {
      if (event.touches.length == 1) {
        target.x = event.touches[0].pageX;
        target.y = event.touches[0].pageY;
      }
    }

    function keyup(event) {
      switch (event.keyCode) {
        case 32:
          save();
          break;
        default:
        // console.log(event.keyCode);
      }
    }

    function letters(id) {
      var el = document.getElementById(id),
        letters = el.innerHTML.replace("&amp;", "&").split(""),
        heading = "";

      for (var i = 0, n = letters.length, letter; i < n; i++) {
        letter = letters[i].replace("&", "&amp");
        heading += letter.trim()
          ? '<span class="letter-' + i + '">' + letter + "</span>"
          : "&nbsp;";
      }

      el.innerHTML = heading;
      setTimeout(function () {
        el.className = "transition-in";
      }, Math.random() * 500 + 500);
    }

    function save() {
      if (!buffer) {
        buffer = document.createElement("canvas");
        buffer.width = screen.availWidth;
        buffer.height = screen.availHeight;
        buffer.ctx = buffer.getContext("2d");

        form = document.createElement("form");
        form.method = "post";
        form.input = document.createElement("input");
        form.input.type = "hidden";
        form.input.name = "data";
        form.appendChild(form.input);

        document.body.appendChild(form);
      }

      buffer.ctx.fillStyle = "rgba(8,5,16)";
      buffer.ctx.fillRect(0, 0, buffer.width, buffer.height);

      buffer.ctx.drawImage(
        canvas,
        Math.round(buffer.width / 2 - canvas.width / 2),
        Math.round(buffer.height / 2 - canvas.height / 2)
      );

      window.open(
        buffer.toDataURL(),
        "wallpaper",
        "top=0,left=0,width=" + buffer.width + ",height=" + buffer.height
      );

      // form.input.value = buffer.toDataURL().substr(22);
      // form.submit();
    }

    window.requestAnimFrame = (function () {
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (fn) {
          window.setTimeout(fn, 1000 / 60);
        }
      );
    })();

    ctx.running = true;
    ctx.frame = 1;

    hue = new Oscillator({
      phase: Math.random() * Math.TWO_PI,
      amplitude: 85,
      frequency: 0.0015,
      offset: 285,
    });

    document.addEventListener("mousemove", init);
    document.addEventListener("touchstart", init);
    document.body.addEventListener("orientationchange", resize);
    window.addEventListener("resize", resize);
    window.addEventListener("focus", start);
    window.addEventListener("blur", stop);

    resize();
  } else {
    // console.log('Hello world');

    document.body.removeEventListener("orientationchange", resize);
    window.removeEventListener("resize", resize);
    window.removeEventListener("focus", start);
    window.removeEventListener("blur", stop);

    document.removeEventListener("mousemove", mousemove);
    document.removeEventListener("touchmove", mousemove);
    document.removeEventListener("touchstart", touchstart);
  }
}

initOciliator(false);

var sectionHome = jQuery("#section-home");
var a = 0;
var b = 0;
sectionHome.find(".blast").each(function () {
  if (a == 300) {
    a = 400;
  }

  if (a == 1100) {
    a = 1200;
  }

  var el = $(this);
  if (a == 400) {
    setTimeout(function () {
      sectionHome.find("h1 img").addClass("animation-logo");
    }, 800);
  }

  setTimeout(function () {
    el.addClass("animated bounceIn");
  }, a);

  if (a < 1200) {
    a = a + 100;
  } else {
    a = a + 80;
  }
});
setTimeout(function () {
  sectionHome.find(".blast").removeClass("animated bounceIn");
  sectionHome.find(".blast").css("opacity", 1);

  sectionHome.find(".blast").mouseenter(function () {
    var el = jQuery(this);

    jQuery(this).addClass("animated rubberBand");
    jQuery(this).one(
      "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
      function () {
        el.removeClass("animated rubberBand");
      }
    );
  });
}, 3000);

var myScript = document.createElement("script");
myScript.setAttribute("src", "js/vendor/tagcanvas.js");
myScript.setAttribute("id", "tagcanvas");
document.body.appendChild(myScript);

myScript.addEventListener(
  "load",
  function (e) {
    if (
      !$("#myCanvas").tagcanvas({
        textColour: "#2bff0f",
        outlineThickness: 0.5,
        outlineColour: "#2bff0f",
        maxSpeed: 0.06,
        freezeActive: true,
        shuffleTags: true,
        shape: "sphere",
        zoom: 0.8,
        noSelect: true,
        textFont: null,
        pinchZoom: true,
        wheelZoom: false,
        freezeDecel: true,
        fadeIn: 3000,
        initial: [0.3, -0.1],
        depth: 1.1,
      })
    ) {
      // TagCanvas failed to load
    }
  },
  false
);
// Hero Section Scroll Effect
const homeSection = document.querySelector("#section-home");
window.addEventListener("scroll", function () {
  let currScrollPos = window.pageYOffset;
  // console.log(currScrollPos);
  homeSection.style.opacity = -currScrollPos / 700 + 1.7;
  homeSection.style.transform = `translate3d(0, ${
    -currScrollPos / 5
  }px, 0) skew(0deg, ${currScrollPos / 30}deg)`;
});
// Scrolling and show animations
function isVisible(element, distanceFromTopShow) {
  let elementBox = element.getBoundingClientRect();
  // let distanceFromTopShow = -310;
  let distanceFromTopHidden = 10;
  let mainDistance = elementBox.top - window.innerHeight;

  if (mainDistance < distanceFromTopShow) {
    return true;
  }
  if (mainDistance > distanceFromTopHidden) {
    return false;
  }
}

//About Section
const abtSection = document.querySelector("#about-section");
window.addEventListener("scroll", function () {
  let currScrollPos2 = window.pageYOffset;
  abtSection.style.opacity = -currScrollPos2 / 1000 + 1.7;
  // abtSection.style.transform = `translate3d(0, ${-currScrollPos2/ 5
  //     }px, 0) skew(0deg, ${currScrollPos2 / 210}deg)`;
});

function projectTitleAnimationa() {
  let sectionLista = document.querySelectorAll(".popo");
  let sectiona = document.querySelector("#about-section-title");
  sectionLista.forEach(function (sectionLa) {
    if (isVisible(sectiona, -0) === true) {
      sectionLa.classList.remove("hiddena");
    }
    if (isVisible(sectiona) === false) {
      sectionLa.classList.add("hiddena");
    }
  });
}
document.addEventListener("scroll", projectTitleAnimationa);

//About Image
$(".img_box").each(function () {
  var imgBox = $(this);
  var images = $(this).children("img");

  var myAnimation = new hoverEffect({
    parent: imgBox[0],
    intensity: 1,
    angle: Math.PI / 8,
    image1: images[0].getAttribute("src"),
    image2: images[1].getAttribute("src"),
    displacementImage: imgBox[0].getAttribute("displacementImage"),
  });
});

//Skills Section

const skillSection = document.querySelector("#skill-section");
window.addEventListener("scroll", function () {
  let currScrollPos3 = window.pageYOffset;
  skillSection.style.opacity = -currScrollPos3 / 1900 + 1.7;
  // proSection.style.transform = `translate3d(0, ${-currScrollPos1 / 5
  //     }px, 0) skew(0deg, ${currScrollPos1 / 60}deg)`;
});
function projectTitleAnimations() {
  let sectionLists = document.querySelectorAll(".popo");
  let sections = document.querySelector("#skill-section-title");
  sectionLists.forEach(function (sectionLs) {
    if (isVisible(sections, -0) === true) {
      sectionLs.classList.remove("hiddens");
    }
    if (isVisible(sections) === false) {
      sectionLs.classList.add("hiddens");
    }
  });
}
document.addEventListener("scroll", projectTitleAnimations);

//Project Section

const proSection = document.querySelector("#projects-section");
window.addEventListener("scroll", function () {
  let currScrollPos1 = window.pageYOffset;
  proSection.style.opacity = -currScrollPos1 / 2700 + 1.7;
  // proSection.style.transform = `translate3d(0, ${-currScrollPos1 / 5
  //     }px, 0) skew(0deg, ${currScrollPos1 / 60}deg)`;
});
function projectTitleAnimation() {
  let sectionList = document.querySelectorAll(".popo");
  let section = document.querySelector("#projects-section-title");
  sectionList.forEach(function (sectionL) {
    if (isVisible(section, -0) === true) {
      sectionL.classList.remove("hidden");
    }
    if (isVisible(section) === false) {
      sectionL.classList.add("hidden");
    }
  });
}
document.addEventListener("scroll", projectTitleAnimation);

//Contact Section
const conSection = document.querySelector("#contact-section");
window.addEventListener("scroll", function () {
  let currScrollPos4 = window.pageYOffset;
  conSection.style.opacity = -currScrollPos4 / 5000 + 1.7;
  // proSection.style.transform = `translate3d(0, ${-currScrollPos1 / 5
  //     }px, 0) skew(0deg, ${currScrollPos1 / 60}deg)`;
});
function projectTitleAnimationc() {
  let sectionList = document.querySelectorAll(".popo");
  let section = document.querySelector("#contact-section-title");
  sectionList.forEach(function (sectionL) {
    if (isVisible(section, -0) === true) {
      sectionL.classList.remove("hiddenc");
    }
    if (isVisible(section) === false) {
      sectionL.classList.add("hiddenc");
    }
  });
}
document.addEventListener("scroll", projectTitleAnimationc);

const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    const currentlyActiveAccordionItemHeader = document.querySelector(
      ".accordion-item-header.active"
    );
    if (
      currentlyActiveAccordionItemHeader &&
      currentlyActiveAccordionItemHeader !== accordionItemHeader
    ) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  // get the form elements defined in your form HTML above

  var form = document.getElementById("my-form");
  // var button = document.getElementById("my-form-button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.classList.add("success");
    status.innerHTML = "Thanks!";
  }

  function error() {
    status.classList.add("error");
    status.innerHTML = "Oops! There was a problem.";
  }

  // handle the form submission event

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.setRequestHeader("Accept", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
      success(xhr.response, xhr.responseType);
    } else {
      error(xhr.status, xhr.response, xhr.responseType);
    }
  };
  xhr.send(data);
}

$(".dl-button").on("click", (e) => {
  e.preventDefault();
  e.target.setAttribute("target", "_blank");
  window.location.href = "../Aditya_Rawat_CV.pdf";

  let btn = $(e.currentTarget),
    label = btn.find(".label"),
    counter = label.find(".counter");

  if (!btn.hasClass("active") && !btn.hasClass("done")) {
    btn.addClass("active");

    setLabel(label, label.find(".default"), label.find(".state"));

    setTimeout(() => {
      counter.addClass("hide");
      counter.animate(
        {
          width: 0,
        },
        400,
        function () {
          label.width(label.find(".state > span").width());
          counter.removeAttr("style");
        }
      );
      btn.removeClass("active").addClass("done");
    }, getComputedStyle(btn[0]).getPropertyValue("--duration"));
  }

  return false;
});

$(".restart").on("click", (e) => {
  let btn = $(".dl-button"),
    label = btn.find(".label"),
    counter = label.find(".counter");

  setLabel(label, label.find(".state"), label.find(".default"), function () {
    counter.removeClass("hide");
    btn.removeClass("done");
  });

  return false;
});

function setLabel(div, oldD, newD, callback) {
  oldD.addClass("hide");
  div.animate(
    {
      width: newD.outerWidth(),
    },
    200,
    function () {
      oldD.removeClass("show hide");
      newD.addClass("show");
      div.removeAttr("style");
      if (typeof callback === "function") {
        callback();
      }
    }
  );
}

var html5_audiotypes = {
  mp3: "audio/mpeg",
  mp4: "audio/mp4",
  ogg: "audio/ogg",
  wav: "audio/wav",
};
function createsoundbite(d) {
  var b = document.createElement("audio");
  if (b.canPlayType) {
    for (var c = 0; c < arguments.length; c++) {
      var a = document.createElement("source");
      a.setAttribute("src", arguments[c]);
      if (arguments[c].match(/\.(\w+)$/i)) {
        a.setAttribute("type", html5_audiotypes[RegExp.$1]);
      }
      b.appendChild(a);
    }
    b.load();
    b.playclip = function () {
      b.pause();
      b.currentTime = 0;
      b.play();
    };
    return b;
  } else {
    return {
      playclip: function () {
        throw new Error(
          "Your browser doesn't support HTML5 audio unfortunately"
        );
      },
    };
  }
}

var fullname = createsoundbite("./audio/edit.mp3");
