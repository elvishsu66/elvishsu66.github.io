function showSearch(show) {
    document.getElementById('search').setAttribute('hidden', !show);
    var input = document.getElementById('search-input');
    if(show) {
      input.focus();
      document.getElementById("side-menu").checked = false;
    } else {
      input.value= "";
    }
}

document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const html = document.querySelector('html'),
    search = document.getElementById("search"),
    searchOpenIcon = document.getElementById("search-open"),
    searchCloseIcon = document.getElementById("search-close"),
    searchInput = document.getElementById("search-input"),
    sideMenu = document.getElementById("side-menu"),
    lazyloadImages = document.querySelectorAll(".lazy");;

    searchOpenIcon.addEventListener("click", () => {
      searchOpen();
    });


    searchCloseIcon.addEventListener("click", () => {
      searchClose();
    });


    function searchOpen() {
      search.setAttribute('hidden', false);
      searchInput.focus();
      sideMenu.checked = false;
    }

    function searchClose() {
      search.setAttribute('hidden', true);
      searchInput.value= "";
    }

    function lazyLoadImages() {
      if ("IntersectionObserver" in window) {
        var imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var image = entry.target;
              image.src = image.dataset.src;
              image.classList.add("loaded");
              imageObserver.unobserve(image);
            }
          });
        });
    
        lazyloadImages.forEach(function(image) {
          imageObserver.observe(image);
        });
      } else {  
          var lazyloadThrottleTimeout;
         
          function lazyload () {
            if(lazyloadThrottleTimeout) {
              clearTimeout(lazyloadThrottleTimeout);
            }    
      
            lazyloadThrottleTimeout = setTimeout(function() {
              var scrollTop = window.pageYOffset;
              lazyloadImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                  }
              });
              if(lazyloadImages.length == 0) { 
                document.removeEventListener("scroll", lazyload);
                window.removeEventListener("resize", lazyload);
                window.removeEventListener("orientationChange", lazyload);
              }
            }, 20);
          }
      
          document.addEventListener("scroll", lazyload);
          window.addEventListener("resize", lazyload);
          window.addEventListener("orientationChange", lazyload);
      }
    }
    
    lazyLoadImages();
});