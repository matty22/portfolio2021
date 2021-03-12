
// Set up contact form behaviors
window.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("contactForm");
  let emailField = document.getElementById("emailInput");
  let messageField = document.getElementById("messageInput");
  let submitButton = document.getElementById("submitButton");
  let successToast = document.getElementById("successToast");
  let errorToast = document.getElementById("errorToast");
  let thumbnailImages = [...document.getElementsByClassName("thumbnailGrid")];

  // Finish success handling
  function formSuccess() {
    form.reset();
    submitButton.classList.remove("is-loading");
    successToast.classList.add("show");
  }

  // Finish error handling
  function formError() {
    submitButton.classList.remove("is-loading");
    errorToast.classList.add("show");
  }

  // Contact form email field validation
  emailField.addEventListener("blur", function() {
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    if (!emailField.value.match(regex)) {
      emailField.classList.add("is-danger");
      submitButton.classList.remove("is-primary");
      submitButton.setAttribute("disabled", "true");
    } else if (emailField.classList.contains("is-danger") && emailField.value.match(regex)){
      emailField.classList.remove("is-danger");
      submitButton.classList.add("is-primary");
      submitButton.removeAttribute("disabled");
    }
  });

  // Contact form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    submitButton.classList.add("is-loading");
    let data = {
      email: emailField.value,
      message: messageField.value
    }
  
    fetch("https://formspree.io/f/mgepgkvr", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        formSuccess();
      } else {
        formError();
      }
    }).catch((error) => {
      console.log(error);
    });
  });

  // Project and Talks images hover event listeners
  thumbnailImages.forEach((grid) => {
    grid.addEventListener("mouseover", () => {
      grid.children[1].classList.add("overlay");
      grid.children[1].children[0].classList.add("overlay");
      grid.children[1].children[1].classList.add("overlay");
    });
  });

  thumbnailImages.forEach((grid) => {
    grid.addEventListener("mouseout", () => {
      grid.children[1].classList.remove("overlay");
      grid.children[1].children[0].classList.remove("overlay");
      grid.children[1].children[1].classList.remove("overlay");
    });
  });

});


// Scroll functions
function aboutScroll() {
  let aboutSection = document.getElementById("aboutSection");
  aboutSection.scrollIntoView({
    behavior: "smooth"
  });
}

function projectScroll() {
  let projectSection = document.getElementById("projectSection");
  projectSection.scrollIntoView({
    behavior: "smooth"
  });
}

function talkScroll() {
  let talkSection = document.getElementById("talkSection");
  talkSection.scrollIntoView({
    behavior: "smooth"
  });
}

function contactScroll() {
  let contactSection = document.getElementById("contactSection");
  contactSection.scrollIntoView({
    behavior: "smooth"
  });
}


// Burger menu function
function toggleBurger() {
  let burgerIcon = document.getElementById("navbarBurger");
  let navMenu = document.getElementById("navMenu");
  burgerIcon.classList.toggle("is-active");
  navMenu.classList.toggle("is-active");
}



