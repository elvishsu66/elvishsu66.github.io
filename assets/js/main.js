document.addEventListener("DOMContentLoaded", function() {
  'use strict';

  const html = document.querySelector('html'),
    search = document.getElementById("search"),
    searchOpenIcon = document.getElementById("search-open"),
    searchCloseIcon = document.getElementById("search-close"),
    searchInput = document.getElementById("search-input"),
    sideMenu = document.getElementById("side-menu"),
    lazyImages = document.querySelectorAll(".lazy"),
    tables = document.querySelectorAll('table');

    searchOpenIcon.addEventListener("click", () => {
      searchOpen();
    });


    searchCloseIcon.addEventListener("click", () => {
      searchClose();
    });


    var searchOpen = () => {
      search.setAttribute('hidden', false);
      searchInput.focus();
      sideMenu.checked = false;
    }

    var searchClose = () => {
      search.setAttribute('hidden', true);
      searchInput.value= "";
    }

    var addTableWrapper = () => {
      tables.forEach((table)=>{
        var parent = table.parentNode;
        var wrapper = document.createElement('div');
        wrapper.classList.add("table-wrapper");

        // set the wrapper as child (instead of the element)
        parent.replaceChild(wrapper, table);
        // set element as child of wrapper
        wrapper.appendChild(table);
      });
    }

    var lazyLoadImages = () => {
      if ("IntersectionObserver" in window) {
        var imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              var image = entry.target;
              image.src = image.dataset.src;
              image.classList.add("loaded");
              imageObserver.unobserve(image);
            }
          });
        });
    
        lazyImages.forEach((image) => {
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
              lazyImages.forEach(function(img) {
                  if(img.offsetTop < (window.innerHeight + scrollTop)) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                  }
              });
              if(lazyImages.length == 0) { 
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
    addTableWrapper();
});