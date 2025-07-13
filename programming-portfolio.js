// المشروع 1: عدسة سوما
const project1Images = [
  "projects/lens/1.jpeg",
  "projects/lens/2.jpeg",
  "projects/lens/3.jpeg",
  "projects/lens/4.jpeg",
  "projects/lens/5.jpeg",
  "projects/lens/6.jpeg",
];
let project1Current = 0;
function changeProject1Image(dir) {
  project1Current += dir;
  if (project1Current < 0) project1Current = project1Images.length - 1;
  if (project1Current >= project1Images.length) project1Current = 0;
  var img = document.getElementById("project1Image");
  img.src = project1Images[project1Current];
  img.style.top = "0";
  document.getElementById("counter1").textContent =
    project1Current + 1 + "/" + project1Images.length + " صور";
}

// المشروع 2: BR Aliyth
const project2Images = [
  "projects/br-aliyth/1.jpeg",
  "projects/br-aliyth/2.jpeg",
  "projects/br-aliyth/3.jpeg",
  "projects/br-aliyth/4.jpeg",
  "projects/br-aliyth/5.jpeg",
  "projects/br-aliyth/6.jpeg",
  "projects/br-aliyth/7.jpeg",
  "projects/br-aliyth/8.jpeg",
  "projects/br-aliyth/9.jpeg",
  "projects/br-aliyth/10.jpeg",
  "projects/br-aliyth/11.jpeg",
  "projects/br-aliyth/12.jpeg",
  "projects/br-aliyth/13.jpeg",
  "projects/br-aliyth/14.jpeg",
  "projects/br-aliyth/15.jpeg",
  "projects/br-aliyth/16.jpeg",
];
let project2Current = 0;
function changeProject2Image(dir) {
  project2Current += dir;
  if (project2Current < 0) project2Current = project2Images.length - 1;
  if (project2Current >= project2Images.length) project2Current = 0;
  var img = document.getElementById("project2Image");
  img.src = project2Images[project2Current];
  img.style.top = "0";
  document.getElementById("counter2").textContent =
    project2Current + 1 + "/" + project2Images.length + " صور";
}

// المشروع 3: مديل
const project3Images = [
  "projects/madil/1.jpeg",
  "projects/madil/2.jpeg",
  "projects/madil/3.jpeg",
  "projects/madil/4.jpeg",
];
let project3Current = 0;
function changeProject3Image(dir) {
  project3Current += dir;
  if (project3Current < 0) project3Current = project3Images.length - 1;
  if (project3Current >= project3Images.length) project3Current = 0;
  var img = document.getElementById("project3Image");
  img.src = project3Images[project3Current];
  img.style.top = "0";
  document.getElementById("counter3").textContent =
    project3Current + 1 + "/" + project3Images.length + " صور";
}

// المشروع 4: 5obara
const project4Images = [
  "projects/5obara/1.jpeg",
  "projects/5obara/2.jpeg",
  "projects/5obara/3.jpeg",
  "projects/5obara/4.jpeg",
  "projects/5obara/5.jpeg",
];
let project4Current = 0;
function changeProject4Image(dir) {
  project4Current += dir;
  if (project4Current < 0) project4Current = project4Images.length - 1;
  if (project4Current >= project4Images.length) project4Current = 0;
  var img = document.getElementById("project4Image");
  img.src = project4Images[project4Current];
  img.style.top = "0";
  document.getElementById("counter4").textContent =
    project4Current + 1 + "/" + project4Images.length + " صور";
}

// المشروع 5: Green Power
const project5Images = [
  "projects/green-power/1.jpeg",
  "projects/green-power/2.jpeg",
  "projects/green-power/3.jpeg",
  "projects/green-power/4.jpeg",
];
let project5Current = 0;
function changeProject5Image(dir) {
  project5Current += dir;
  if (project5Current < 0) project5Current = project5Images.length - 1;
  if (project5Current >= project5Images.length) project5Current = 0;
  var img = document.getElementById("project5Image");
  img.src = project5Images[project5Current];
  img.style.top = "0";
  document.getElementById("counter5").textContent =
    project5Current + 1 + "/" + project5Images.length + " صور";
}

// المشروع 6: Toovix
const project6Images = [
  "projects/toovix/1.jpeg",
  "projects/toovix/2.jpeg",
  "projects/toovix/3.jpeg",
  "projects/toovix/4.jpeg",
  "projects/toovix/5.jpeg",
  "projects/toovix/6.jpeg",
];
let project6Current = 0;
function changeProject6Image(dir) {
  project6Current += dir;
  if (project6Current < 0) project6Current = project6Images.length - 1;
  if (project6Current >= project6Images.length) project6Current = 0;
  var img = document.getElementById("project6Image");
  img.src = project6Images[project6Current];
  img.style.top = "0";
  document.getElementById("counter6").textContent =
    project6Current + 1 + "/" + project6Images.length + " صور";
}

// المشروع 7: Arkan
const project7Images = [
  "projects/arkan/1.jpeg",
  "projects/arkan/2.jpeg",
  "projects/arkan/3.jpeg",
  "projects/arkan/4.jpeg",
  "projects/arkan/5.jpeg",
  "projects/arkan/6.jpeg",
];
let project7Current = 0;
function changeProject7Image(dir) {
  project7Current += dir;
  if (project7Current < 0) project7Current = project7Images.length - 1;
  if (project7Current >= project7Images.length) project7Current = 0;
  var img = document.getElementById("project7Image");
  img.src = project7Images[project7Current];
  img.style.top = "0";
  document.getElementById("counter7").textContent =
    project7Current + 1 + "/" + project7Images.length + " صور";
}

// المشروع 8: مجمع الدقة
const project8Images = [
  "projects/مجمع الدقه/Screenshot_13-7-2025_201628_ahmeddfathy.github.io.jpeg",
  "projects/مجمع الدقه/Screenshot_13-7-2025_20167_ahmeddfathy.github.io.jpeg",
  "projects/مجمع الدقه/Screenshot_13-7-2025_201717_ahmeddfathy.github.io.jpeg",
  "projects/مجمع الدقه/Screenshot_13-7-2025_201741_ahmeddfathy.github.io.jpeg",
];
let project8Current = 0;
function changeProject8Image(dir) {
  project8Current += dir;
  if (project8Current < 0) project8Current = project8Images.length - 1;
  if (project8Current >= project8Images.length) project8Current = 0;
  var img = document.getElementById("project8Image");
  img.src = project8Images[project8Current];
  img.style.top = "0";
  document.getElementById("counter8").textContent =
    project8Current + 1 + "/" + project8Images.length + " صور";
}

// المشروع 9: Gym
const project9Images = [
  "projects/gym/1.jpeg",
  "projects/gym/2.jpeg",
  "projects/gym/3.jpeg",
  "projects/gym/4.jpeg",
  "projects/gym/5.jpeg",
];
let project9Current = 0;
function changeProject9Image(dir) {
  project9Current += dir;
  if (project9Current < 0) project9Current = project9Images.length - 1;
  if (project9Current >= project9Images.length) project9Current = 0;
  var img = document.getElementById("project9Image");
  img.src = project9Images[project9Current];
  img.style.top = "0";
  document.getElementById("counter9").textContent =
    project9Current + 1 + "/" + project9Images.length + " صور";
}

// دالة التمرير للمشاريع
function scrollProject(element) {
  var screen = element;
  var img = screen.querySelector(".screen-content");
  if (!img) return;

  if (!img.complete) {
    img.onload = function () {
      scrollProject(element);
    };
    return;
  }

  img.style.transition = "none";
  img.style.top = "0";

  var diff = img.offsetHeight - screen.offsetHeight;

  if (diff <= 0) {
    img.style.position = "relative";
    img.style.top =
      Math.floor((screen.offsetHeight - img.offsetHeight) / 2) + "px";
    return;
  }

  setTimeout(function () {
    if (!img.offsetHeight) {
      return;
    }

    img.style.transition = "top 5s ease-in-out";
    img.style.top = `-${diff}px`;

    setTimeout(function () {
      if (!element.isConnected || !img.isConnected) {
        return;
      }

      img.style.transition = "top 1s ease-in-out";
      img.style.top = "0";
    }, 5000);
  }, 300);
}

function scrollProjectWithCallback(element, callback) {
  var screen = element;
  var img = screen.querySelector(".screen-content");
  if (!img) return;

  if (!img.complete) {
    img.onload = function () {
      scrollProjectWithCallback(element, callback);
    };
    return;
  }

  img.style.transition = "none";
  img.style.top = "0";

  var diff = img.offsetHeight - screen.offsetHeight;

  if (diff <= 0) {
    img.style.position = "relative";
    img.style.top =
      Math.floor((screen.offsetHeight - img.offsetHeight) / 2) + "px";
    setTimeout(function () {
      if (callback) callback();
    }, 1000);
    return;
  }

  setTimeout(function () {
    if (!img.offsetHeight) {
      if (callback) callback();
      return;
    }

    img.style.transition = "top 5s ease-in-out";
    img.style.top = `-${diff}px`;

    setTimeout(function () {
      if (!element.isConnected || !img.isConnected) {
        if (callback) callback();
        return;
      }

      img.style.transition = "top 1s ease-in-out";
      img.style.top = "0";
      setTimeout(function () {
        if (callback) callback();
      }, 1000);
    }, 5000);
  }, 300);
}

document.addEventListener("DOMContentLoaded", function () {
  const projectStates = {
    project1: { active: false, timer: null },
    project2: { active: false, timer: null },
    project3: { active: false, timer: null },
    project4: { active: false, timer: null },
    project5: { active: false, timer: null },
    project6: { active: false, timer: null },
    project7: { active: false, timer: null },
    project8: { active: false, timer: null },
    project9: { active: false, timer: null },
  };

  // تهيئة عدادات الصور
  document.getElementById("counter1").textContent =
    "1/" + project1Images.length + " صور";
  document.getElementById("counter2").textContent =
    "1/" + project2Images.length + " صور";
  document.getElementById("counter3").textContent =
    "1/" + project3Images.length + " صور";
  document.getElementById("counter4").textContent =
    "1/" + project4Images.length + " صور";
  document.getElementById("counter5").textContent =
    "1/" + project5Images.length + " صور";
  document.getElementById("counter6").textContent =
    "1/" + project6Images.length + " صور";
  document.getElementById("counter7").textContent =
    "1/" + project7Images.length + " صور";
  document.getElementById("counter8").textContent =
    "1/" + project8Images.length + " صور";
  document.getElementById("counter9").textContent =
    "1/" + project9Images.length + " صور";

  function modifiedAutoScrollProject1() {
    if (!projectStates.project1.active) return;

    const screen = document
      .querySelector("#project1Image")
      .closest(".imac-screen");
    if (!screen) return;

    const img = document.querySelector("#project1Image");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project1.timer = setTimeout(
        modifiedAutoScrollProject1,
        300
      );
      return;
    }

    scrollProjectWithCallback(screen, function () {
      if (projectStates.project1.active) {
        changeProject1Image(1);
        projectStates.project1.timer = setTimeout(
          modifiedAutoScrollProject1,
          500
        );
      }
    });
  }

  function modifiedAutoScrollProject2() {
    if (!projectStates.project2.active) return;

    const screen = document
      .querySelector("#project2Image")
      .closest(".imac-screen");
    if (!screen) return;

    const img = document.querySelector("#project2Image");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project2.timer = setTimeout(
        modifiedAutoScrollProject2,
        300
      );
      return;
    }

    scrollProjectWithCallback(screen, function () {
      if (projectStates.project2.active) {
        changeProject2Image(1);
        projectStates.project2.timer = setTimeout(
          modifiedAutoScrollProject2,
          500
        );
      }
    });
  }

  function modifiedAutoScrollProject3() {
    if (!projectStates.project3.active) return;
    const screen = document
      .querySelector("#project3Image")
      .closest(".imac-screen");
    if (!screen) return;
    const img = document.querySelector("#project3Image");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project3.timer = setTimeout(
        modifiedAutoScrollProject3,
        300
      );
      return;
    }
    scrollProjectWithCallback(screen, function () {
      if (projectStates.project3.active) {
        changeProject3Image(1);
        projectStates.project3.timer = setTimeout(
          modifiedAutoScrollProject3,
          500
        );
      }
    });
  }

  function modifiedAutoScrollProject4() {
    if (!projectStates.project4.active) return;
    const screen = document
      .querySelector("#project4Image")
      .closest(".imac-screen");
    if (!screen) return;
    const img = document.querySelector("#project4Image");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project4.timer = setTimeout(
        modifiedAutoScrollProject4,
        300
      );
      return;
    }
    scrollProjectWithCallback(screen, function () {
      if (projectStates.project4.active) {
        changeProject4Image(1);
        projectStates.project4.timer = setTimeout(
          modifiedAutoScrollProject4,
          500
        );
      }
    });
  }

  function modifiedAutoScrollProject5() {
    if (!projectStates.project5.active) return;
    const screen = document
      .querySelector("#project5Image")
      .closest(".imac-screen");
    if (!screen) return;
    const img = document.querySelector("#project5Image");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project5.timer = setTimeout(
        modifiedAutoScrollProject5,
        300
      );
      return;
    }
    scrollProjectWithCallback(screen, function () {
      if (projectStates.project5.active) {
        changeProject5Image(1);
        projectStates.project5.timer = setTimeout(
          modifiedAutoScrollProject5,
          500
        );
      }
    });
  }

  function modifiedAutoScrollProject6() {
    if (!projectStates.project6.active) return;
    const screen = document
      .querySelector("#project6Image")
      .closest(".imac-screen");
    if (!screen) return;
    const img = screen.querySelector(".screen-content");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project6.timer = setTimeout(
        modifiedAutoScrollProject6,
        300
      );
      return;
    }
    scrollProjectWithCallback(screen, function () {
      if (projectStates.project6.active) {
        changeProject6Image(1);
        projectStates.project6.timer = setTimeout(
          modifiedAutoScrollProject6,
          500
        );
      }
    });
  }

  function modifiedAutoScrollProject7() {
    if (!projectStates.project7.active) return;
    const screen = document
      .querySelector("#project7Image")
      .closest(".imac-screen");
    if (!screen) return;
    const img = screen.querySelector(".screen-content");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project7.timer = setTimeout(
        modifiedAutoScrollProject7,
        300
      );
      return;
    }
    scrollProjectWithCallback(screen, function () {
      if (projectStates.project7.active) {
        changeProject7Image(1);
        projectStates.project7.timer = setTimeout(
          modifiedAutoScrollProject7,
          500
        );
      }
    });
  }

  function modifiedAutoScrollProject8() {
    if (!projectStates.project8.active) return;
    const screen = document
      .querySelector("#project8Image")
      .closest(".imac-screen");
    if (!screen) return;
    const img = screen.querySelector(".screen-content");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project8.timer = setTimeout(
        modifiedAutoScrollProject8,
        300
      );
      return;
    }
    scrollProjectWithCallback(screen, function () {
      if (projectStates.project8.active) {
        changeProject8Image(1);
        projectStates.project8.timer = setTimeout(
          modifiedAutoScrollProject8,
          500
        );
      }
    });
  }

  function modifiedAutoScrollProject9() {
    if (!projectStates.project9.active) return;
    const screen = document
      .querySelector("#project9Image")
      .closest(".imac-screen");
    if (!screen) return;
    const img = screen.querySelector(".screen-content");
    if (!img || !img.complete || img.naturalHeight === 0) {
      projectStates.project9.timer = setTimeout(
        modifiedAutoScrollProject9,
        300
      );
      return;
    }
    scrollProjectWithCallback(screen, function () {
      if (projectStates.project9.active) {
        changeProject9Image(1);
        projectStates.project9.timer = setTimeout(
          modifiedAutoScrollProject9,
          500
        );
      }
    });
  }

  const projectObservers = [
    {
      id: "#project1Image",
      stateKey: "project1",
      startFunction: modifiedAutoScrollProject1,
    },
    {
      id: "#project2Image",
      stateKey: "project2",
      startFunction: modifiedAutoScrollProject2,
    },
    {
      id: "#project3Image",
      stateKey: "project3",
      startFunction: modifiedAutoScrollProject3,
    },
    {
      id: "#project4Image",
      stateKey: "project4",
      startFunction: modifiedAutoScrollProject4,
    },
    {
      id: "#project5Image",
      stateKey: "project5",
      startFunction: modifiedAutoScrollProject5,
    },
    {
      id: "#project6Image",
      stateKey: "project6",
      startFunction: modifiedAutoScrollProject6,
    },
    {
      id: "#project7Image",
      stateKey: "project7",
      startFunction: modifiedAutoScrollProject7,
    },
    {
      id: "#project8Image",
      stateKey: "project8",
      startFunction: modifiedAutoScrollProject8,
    },
    {
      id: "#project9Image",
      stateKey: "project9",
      startFunction: modifiedAutoScrollProject9,
    },
  ];

  projectObservers.forEach((project) => {
    const element = document.querySelector(project.id);
    if (!element) return;

    const card = element.closest(".project-card");
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const state = projectStates[project.stateKey];

          if (entry.isIntersecting) {
            state.active = true;
            if (!state.timer) {
              project.startFunction();
            }
          } else {
            state.active = false;
            if (state.timer) {
              clearTimeout(state.timer);
              state.timer = null;
            }
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px 50px 0px" }
    );

    observer.observe(card);
  });
});
