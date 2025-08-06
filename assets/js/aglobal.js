      document.addEventListener('DOMContentLoaded', 
      function() {
        let cookiesBanner = document.querySelector('.cookies-banner')
        let cookiesBannerCloseButton = document.querySelector('.cookies-banner-button .button')
        let cookiesDelay = 2000
        if (cookiesBanner) {
          setTimeout(showBanner, cookiesDelay);
        }

        //events

        if (cookiesBannerCloseButton) {
          cookiesBannerCloseButton.addEventListener('click', cookiesBannerClose)
        }

        function cookiesBannerClose(e) {
          e.preventDefault()
          hideBanner()
        }

        function showBanner() {
           cookiesBanner.classList.add('show')
        }

        function hideBanner() {
          cookiesBanner.classList.remove('show')
        }



      } ) /* html page and all elements are loaded */