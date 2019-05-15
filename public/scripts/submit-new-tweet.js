$(function() {
    const $form = $('.new-tweet form');
    $form.on('submit', function () {
        event.preventDefault();
        const text = $(this).children('textarea').val()
        console.log(this)
        console.log(text)
    //   $.ajax('more-posts.html', { method: 'GET' })
    //   .then(function (morePostsHtml) {
    //     console.log('Success: ', morePostsHtml);
    //     $button.replaceWith(morePostsHtml);
    //   });

    });
  });