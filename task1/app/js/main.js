jQuery(() => {
   $('.open-modal').on('click', (e) => {
      $('.modal').parents('.overlay').addClass('overlay--open');
      setTimeout(() => {
         $('.modal').addClass('modal--open');
      }, 350);

      $(document).on('click', (e) => {
         const target = $(e.target);

         if ($(target).hasClass('overlay')) {
            $(target).find('.modal').removeClass('modal--open');

            setTimeout(() => {
               $(target).removeClass('overlay--open');
            }, 350);
         }
      });
   });

   $('.close-modal').on('click', (e) => {
      $('.modal').removeClass('modal--open');
      setTimeout(() => {
         $('.modal').parents('.overlay').removeClass('overlay--open');
      }, 350);
   });

   $('.btn--accept').on('click', (e) => {
      $('.modal').removeClass('modal--open');
      setTimeout(() => {
         $('.modal').parents('.overlay').removeClass('overlay--open');
      }, 350);

      setTimeout(() => {
         alert('DONE');
      }, 375);
   });
});
