$('.accordian').on('click', 'h2', function() {
  if ($(this).container().hasClass('hidden'))
  {
    $(this).container().removeClass('hidden').addClass('hidden');
  }
} else {
  $('section').addClass('hidden');
}
};

// Build a jQuery Accordion WITHOUT using slideUp, slideDown, or slideToggle. Hint: use addClass & removeClass.
// Only CSS3 transitions allowed. It should work for 2 or more sections.
// Use the image below as an example
