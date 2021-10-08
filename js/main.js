let allMovie = [];
let searchInputByWord = document.querySelector(".searchByWord");
let searchInput = document.querySelector(".search");

async function getMovies(catagory) {
  let response;
  if (catagory == "trending") {
    response = await fetch(
      `https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3-NxuxjKK-k0M-7l_yGCm_Kmf3_q2EB2ZEWGRoqAZCAwlR-K6cV543RF4`
    );
  } else {
    response = await fetch(
      `https://api.themoviedb.org/3/movie/${catagory}?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3-NxuxjKK-k0M-7l_yGCm_Kmf3_q2EB2ZEWGRoqAZCAwlR-K6cV543RF4`
    );
  }

  let result = await response.json();
  allMovie = result.results;
  displayMovies();
}

getMovies("now_playing");

$("#Nowplaying").click(function () {
  getMovies("now_playing");
});

$("#popular").click(function () {
  getMovies("popular");
});

$("#top-rated").click(function () {
  getMovies("top_rated");
});

$("#trending").click(function () {
  getMovies("trending");
});

$("#upcoming").click(function () {
  getMovies("upcoming");
});

function displayMovies() {
  var cartoona = ``;

  for (let i = 0; i < allMovie.length; i++) {
    cartoona += `
        <div class="col-md-4 mb-4">
            <div class="movie position-relative overflow-hidden shadow rounded">    
                <img src="https://image.tmdb.org/t/p/w500${allMovie[i].poster_path}" alt="" class="img-fluid rounded">
                <div class="info d-flex justify-content-center align-items-center flex-column flex-wrap text-center position-absolute  w-100 h-100">              
                    <h2 class="my-3">${allMovie[i].original_title}</h2>
                    <p class="my-3">${allMovie[i].overview}</p>
                    <p class="my-3">Rate: ${allMovie[i].vote_average}</p>
                    <p class="my-3">${allMovie[i].release_date}</p>
                </div>
            </div>
        </div>
        `;
  }

  document.getElementById("displayMovie").innerHTML = cartoona;
}

$(".searchByWord").keyup(function () {
  getBySearch();
});

async function getBySearch() {
  movieName = searchInputByWord.value;
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3-NxuxjKK-k0M-7l_yGCm_Kmf3_q2EB2ZEWGRoqAZCAwlR-K6cV543RF&query=${movieName}`
  );
  let result = await response.json();
  allMovie = result.results;
  displayMovies();
}

$(".search").keyup(function () {
  let cartoona = ``;
  for (var i = 0; i < allMovie.length; i++) {
    if (
      allMovie[i].original_title
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    ) {
      cartoona += `
        <div class="col-md-4 mb-4">
            <div class="movie position-relative overflow-hidden shadow rounded">    
                <img src="https://image.tmdb.org/t/p/w500${allMovie[i].poster_path}" alt="" class="img-fluid rounded">
                <div class="info d-flex justify-content-center align-items-center flex-column flex-wrap text-center position-absolute  w-100 h-100">              
                    <h2 class="my-3">${allMovie[i].original_title}</h2>
                    <p class="my-3">${allMovie[i].overview}</p>
                    <p class="my-3">Rate: ${allMovie[i].vote_average}</p>
                    <p class="my-3">${allMovie[i].release_date}</p>
                </div>
            </div>
        </div>
        `;
    }
  }
  document.getElementById("displayMovie").innerHTML = cartoona;
});

let userName = document.getElementById("name"),
  userEmail = document.getElementById("email"),
  userPhone = document.getElementById("phone"),
  userAge = document.getElementById("age"),
  userPassword = document.getElementById("password"),
  userRePassword = document.getElementById("rePassword"),
  userNameAlert = document.getElementById("namealert"),
  userEmailAlert = document.getElementById("emailalert"),
  userPhoneAlert = document.getElementById("phonealert"),
  userAgeAlert = document.getElementById("agealert"),
  userpasswordAlert = document.getElementById("passwordalert"),
  userRepasswordAlert = document.getElementById("repasswordalert");

userName.addEventListener("keyup", isUserNameValid);

function isUserNameValid() {
  var regex = /^[a-zA-Z0-9]+$/;
  if (!regex.test(userName.value)) {
    userNameAlert.classList.remove("d-none");

    return false;
  } else {
    userNameAlert.classList.add("d-none");

    return true;
  }
}

userEmail.addEventListener("keyup", isEmailValid);

function isEmailValid() {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!regex.test(userEmail.value)) {
    userEmailAlert.classList.remove("d-none");

    return false;
  } else {
    userEmailAlert.classList.add("d-none");

    return true;
  }
}

userPhone.addEventListener("keyup", isUserPhoneValid);

function isUserPhoneValid() {
  var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (!regex.test(userPhone.value)) {
    // signUpInput.disabled = "true";
    userPhoneAlert.classList.remove("d-none");

    return false;
  } else {
    // signUpInput.removeAttribute("disabled");
    userPhoneAlert.classList.add("d-none");

    return true;
  }
}

userAge.addEventListener("keyup", isUserAgeValid);

function isUserAgeValid() {
  var regex = /^[1-9][0-9]?$|^100$/;
  if (!regex.test(userAge.value)) {
    // signUpInput.disabled = "true";
    userAgeAlert.classList.remove("d-none");

    return false;
  } else {
    // signUpInput.removeAttribute("disabled");
    userAgeAlert.classList.add("d-none");

    return true;
  }
}

userAge.addEventListener("keyup", isUserAgeValid);

function isUserAgeValid() {
  var regex = /^[1-9][0-9]?$|^100$/;
  if (!regex.test(userAge.value)) {
    userAgeAlert.classList.remove("d-none");

    return false;
  } else {
    userAgeAlert.classList.add("d-none");

    return true;
  }
}

userPassword.addEventListener("keyup", isUserPasswordValid);

function isUserPasswordValid() {
  var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!regex.test(userPassword.value)) {
    userpasswordAlert.classList.remove("d-none");

    return false;
  } else {
    userpasswordAlert.classList.add("d-none");

    return true;
  }
}

userRePassword.addEventListener("keyup", isUserRePasswordValid);

function isUserRePasswordValid() {
  if (!(userPassword.value == userRePassword.value)) {
    userRepasswordAlert.classList.remove("d-none");

    return false;
  } else {
    userRepasswordAlert.classList.add("d-none");

    return true;
  }
}

(userAgeAlert.style.display = "none"),
  userName.addEventListener("keyup", isUserNameValid),
  userEmail.addEventListener("keyup", isEmailValid),
  userPhone.addEventListener("keyup", isUserPhoneValid),
  userAge.addEventListener("keyup", isUserAgeValid),
  userPassword.addEventListener("keyup", isUserPasswordValid),
  userRePassword.addEventListener("keyup", isUserRePasswordValid),
  document.getElementById("contact").addEventListener("click", function () {
    isUserNameValid() &&
    isEmailValid() &&
    isUserPhoneValid() &&
    isUserAgeValid() &&
    isUserPasswordValid() &&
    isUserRePasswordValid()
      ? (document.getElementById("submitBtn").disabled = !1)
      : (document.getElementById("submitBtn").disabled = !0);
  });


let widhMenu = $(".menu").innerWidth();
$(".menu").css("left", -widhMenu);
$(".toggle").click(function () {
  $(".slideToggle").animate({ left: widhMenu }, 500);
  $(".menu").animate({ left: 0 }, 500);
  $(".close").removeClass("d-none");
  $(".toggle").addClass("d-none");


  $(".nav-item li").animate({ opacity: "0", paddingTop: "500px" }, 0);

  $(".nav-item .item1").animate(
    { opacity: "1", paddingTop: "25px" },
    1100
  ),
  $(".nav-item .item2").animate(
    { opacity: "1", paddingTop: "25px" },
    1200
  ),
  $(".nav-item .item3").animate(
    { opacity: "1", paddingTop: "25px" },
    1300
  ),
  $(".nav-item .item4").animate(
    { opacity: "1", paddingTop: "25px" },
    1400
  ),
  $(".nav-item .item5").animate(
    { opacity: "1", paddingTop: "25px" },
    1500
  )
  $(".nav-item .item6").animate(
    { opacity: "1", paddingTop: "25px" },
    1600
  );
})

$(".close").click(function () {
  $(".slideToggle").animate({ left: "0" }, 500);
  $(".menu").animate({ left: -widhMenu }, 500);
  $(".close").addClass("d-none");
  $(".toggle").removeClass("d-none");
  $(".nav-item li").animate({ opacity: "0", paddingTop: "500px" }, 500)
});









  





