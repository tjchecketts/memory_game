// $('box').on('click', (function() {
//   var newImage = "yellow_triangle.jpg"

//   '#a1' = newImage
// }))


// $(document).click(function () {
//   var newImg = $(this).data('#a1');
//   var imgURL = "yellow_triangle.jpg"
//   $("#a1").html("<img src='" + imgUrl + "' alt='yellow triangle' />");
// });




// / tried doing everything above on my own
// / ultimately, had to open up the answer doc
// / in order to get this to run

$attempts = $('#attempts')

var icons = [
  'adventure_time.jpg',
  'owl.png',
  'Spongebob.jpg',
  'yellow_pentagon.jpg',
  'yellow_triangle.jpg',
  'zebra.jpg'
]

var images = [];
var guess1;
var guess2;
var numGuesses = 0;

function createCards() {
  icons.forEach( function(i) {
    images.push(i);
    images.push(i);
    images.push(i);
    images.push(i);
  })
}

function shuffleCards() {
  var j, x, i;
  for (i = images.length; i; i--) {
    j = Math.floor(Math.random() * i);
    x = images[i - 1];
    images[i - 1] = images[j];
    images[j] = x;

  }
}

// may need to play with this part a bit
function displayCards() {
  let box = document.getElement()
  var cards = images.map( function(image) {
    var card = document.createElement('button')
    card.className = "col s3 card center pointer"
    card.dataset.value = image;
    var icon = document.createElement('i')
    icon.className = 'material-icons large';
    icon.innerHTML = image;
    card.appendChild(icon);
    row.appendChild(card);
    return card;
  })
}

function hideCards() {
  setTimeout( function() {
    $('.card').children('i').toggleClass('hidden');
  }, 3000);
}

function newGame() {
  guess1 = 0
  guess2 = 0
  numGuesses = 0
  images = []
  createCards();
  shuffleCards();
  displayCards();
  hideCards();
}

function checkForMatch() {
  numGuesses += 1
  $attempts.text('Attenpts: ' + numGuesses);

  setTimeout( function() {
    if (guess1 !== guess2) {
      var card1 = $("[data-value='" + guess1 + "']");
      var card2 = $("[data-value='" + guess2 + "']");
      card1.children('i').addClass('hidden')
      card2.children('i').addClass('hidden')

    }

    guess1 = null;
    guess2 = null;
  }, 1000);
}

$(document).ready( function() {
  newGame()

  $(document).on('click', '.card', function() {
    var card = $(this);
    if (card.children('i').hasClass('hidden')) {
      if (!guess1) {
        card.children('i').toggleClass('hidden')
        guess1 = card.data('value')
      } else if (!guess2) {
        card.children('i').toggleClass('hidden')
        guess2 = card.data('value')
      }

      if (guess1 && guess2) {
        checkForMatch()

      }
      
      
    }
  })

  $('#new_game').on('click', function() {
    $('#box').empty();
    $attempts.text('');
    newGame()
  })
})
