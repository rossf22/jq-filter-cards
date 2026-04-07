$(document).ready(function () {

  // Wait until the page has loaded before running the jQuery code.
  // Then listen for clicks on any button with the class "filter-btn".
  $(".filter-btn").click(function() {

    // Get the category stored in the clicked button's data-filter attribute.
    // Example values: "all", "web", "design", "photo", or "video"
    var selectedFilter = ;

    // Remove the active class from every filter button.
    // This clears the old selected button style.
    $(".filter-btn"). ;

    // Add the active class to the button that was clicked.
    // This highlights the current choice.
    

    // If the selected category is "all",
    // hide and then show every card.
    if (selectedFilter === "all") {
      
    } else {
      // Hide all cards first.
      

      // Then show only the cards whose class matches the selected category.
      // Example: if selectedFilter is "photo", this becomes $(".photo")
      
    }

  });

});


/*
==================================================
DETAILED EXPLANATION
==================================================

This script makes the project cards filterable.

How it works:
1. The page loads.
2. The script waits for the user to click one of the filter buttons.
3. When the user clicks a button, the script:
   - reads the button's data-filter value
   - removes the active class from all buttons
   - adds the active class to the clicked button
   - checks whether the filter is "all"
   - if it is "all", it shows every card
   - otherwise, it hides all cards and shows only the matching ones

Why use data-filter?
Each button stores its category directly in HTML.
That makes it easy for JavaScript to read the value and decide what to show.

Why use $(this)?
In this click event, "this" refers to the button that was clicked.
Wrapping it in $(this) lets us use jQuery methods on it.

Why do the cards have category classes?
Each card has a class like web, design, photo, or video.
This makes it easy to select matching cards with jQuery.

How does this line work?

$("." + selectedFilter)

If selectedFilter is "photo", the line becomes:

$(".photo")

That means:
select every element with the class "photo"

Why use hide() and fadeIn()?
hide() removes the cards from view immediately.
fadeIn() brings matching cards back with a smoother visual effect.

==================================================
GLOSSARY OF TERMS
==================================================

jQuery:
A JavaScript library that makes common scripting tasks shorter and easier.

$( ):
The jQuery function used to select and work with elements.

$(document).ready():
Waits until the page is loaded before running the script.

.click():
Runs code when an element is clicked.

this:
Refers to the element that triggered the event.
In this script, it means the clicked filter button.

$(this):
Turns "this" into a jQuery object so jQuery methods can be used on it.

.attr():
Gets or sets an HTML attribute value.

data-filter:
A custom HTML data attribute that stores a filter category.

.removeClass():
Removes a CSS class from selected elements.

.addClass():
Adds a CSS class to selected elements.

.hide():
Hides selected elements.

.fadeIn():
Shows selected elements with a fade effect.

callback:
A function that runs after another action finishes.
This script does not use a callback, but you used one in the gallery exercise.

==================================================
VARIABLE LIST
==================================================

selectedFilter:
Stores the category value from the clicked button.
This value is used to decide which cards should appear.
*/
