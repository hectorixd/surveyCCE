// Smooth scrolling
$('a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html, body').animate({ scrollTop: $(hash).offset().top }, 800);
  }
});

// Block scroll for mobile device
$('body').addClass('stop-scrolling');
