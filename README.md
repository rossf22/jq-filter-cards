# jQuery Filter Cards

## Overview

In this coding exercise, you'll use **jQuery** to make a set of interactive content cards.

The page already includes the cards and basic page layout. Your job is to complete the jQuery script so that when a user clicks one of the filter buttons:

- only the matching cards are shown
- non-matching cards are hidden
- the selected button becomes visually highlighted

This exercise is designed to help you practice using **jQuery selectors, click events, classes, and filtering logic** in a way that produces a useful and visually appealing result. Your earlier thumbnail gallery exercise used jQuery to update one featured project area based on a clicked thumbnail; this exercise continues building those same skills, but now applies them to filtering groups of cards instead.

---

## Learning Goals

By the end of this exercise, you should be able to:

- use jQuery to select page elements
- respond to a click event
- read information stored in HTML attributes
- show and hide groups of elements
- add and remove CSS classes
- understand how a filterable gallery works

---

## Files in This Project

### `index.html`

Contains the structure of the page:

- the page heading
- the filter buttons
- the grid of project cards
- classes and `data-filter` attributes used by the JavaScript
- an explanation section displayed on the page

### `reset.css`

Removes or normalizes some default browser styles so the page starts from a cleaner baseline.

### `styles.css`

Contains all the visual styling for the page, including:

- the filter buttons
- the card grid
- the individual cards
- the explanation section

### `jquery-3.7.1.js`

The jQuery library file.

### `filter-cards.js`

The file where you will complete the jQuery code for the filtering interaction.

---

## What the Page Does

This page acts like a simple **filterable project gallery**.

At the top of the page, there is a set of category buttons such as:

- All
- Web
- Design
- Photo
- Video

Below that, there is a collection of project cards. Each card belongs to one category.

When a filter button is clicked, the script checks which category was selected and then updates the page so that:

- cards in that category remain visible
- cards from other categories are hidden
- the clicked button gets the `active` class so users can see which filter is currently selected

This is a very common interface pattern used in:

- portfolio sites
- galleries
- project showcases
- media collections
- product categories

---

## How the HTML Is Set Up

The most important parts of the HTML are the **buttons** and the **cards**.

### Filter Buttons

Each button has the class `filter-btn` and a custom `data-filter` attribute.

Example:

```html
<button class="filter-btn active" data-filter="all">All</button>
<button class="filter-btn" data-filter="web">Web</button>
```

The `data-filter` value tells JavaScript which category that button should display.

### Project Cards

Each project card has:

- the class `card`
- one additional category class such as `web`, `design`, `photo`, or `video`

Example:

```html
<article class="card web">
```

That means this card belongs to the `web` category.

If the user clicks the **Web** button, jQuery will show cards with the class `web`.

---

## Why Use `data-filter`?

The `data-filter` attribute stores extra information directly inside the HTML.

This allows the JavaScript to read the category value from the button the user clicked instead of storing all the category information in a separate JavaScript array.

For example:

```html
<button class="filter-btn" data-filter="photo">Photo</button>
```

When this button is clicked, JavaScript can read the value `photo` and use it to determine which cards to show.

This makes the code easier to organize and easier to understand.

---

## Why Use Classes on the Cards?

Classes are useful because they can be reused across multiple elements.

More than one card can belong to the same category, so classes make filtering easier.

For example:

```html
<article class="card photo">
<article class="card photo">
```

Both of these cards belong to the `photo` category.

That means one filter button can target multiple cards at once.

---

## How the JavaScript Works

The script follows this general process:

1. Wait for the page to load
2. Watch for a click on any filter button
3. Identify the button that was clicked
4. Read that button’s `data-filter` value
5. Remove the `active` class from all filter buttons
6. Add the `active` class to the clicked button
7. Check whether the selected category is `all`
8. If it is `all`, show every card
9. If it is not `all`, hide all cards and then show only the cards that match the selected category

---

## Key jQuery Concepts Used

### `$(document).ready(function() { ... })`

This waits until the page is fully loaded before running the jQuery code.

That helps make sure the HTML elements already exist before the script tries to use them.

Example:

```javascript
$(document).ready(function() {
  // jQuery code goes here
});
```

---

### `$(".filter-btn").click(function() { ... })`

This sets up a click event for every element with the class `filter-btn`.

That means the code inside runs whenever any filter button is clicked.

Example:

```javascript
$(".filter-btn").click(function() {
  // code runs when a filter button is clicked
});
```

---

### `$(this)`

Inside the click event, `this` refers to the specific button that was clicked.

Wrapping it in `$()` turns it into a jQuery object so you can use jQuery methods on it.

Example:

```javascript
$(this).addClass("active");
```

This means:

- find the button that was clicked
- add the class `active` to it

---

### `.attr("data-filter")`

This reads the value of the `data-filter` attribute from the clicked button.

Example:

```javascript
var selectedCategory = $(this).attr("data-filter");
```

If the clicked button is:

```html
<button class="filter-btn" data-filter="video">Video</button>
```

then `selectedCategory` will become:

```javascript
"video"
```

---

### `.removeClass()` and `.addClass()`

These are used to change the appearance of the buttons.

Example:

```javascript
$(".filter-btn").removeClass("active");
$(this).addClass("active");
```

This means:

- remove the `active` class from all buttons
- add the `active` class only to the clicked button

That way the currently selected filter is clearly highlighted.

---

### `.hide()` and `.show()`

These methods hide and show the cards.

Example:

```javascript
$(".card").hide();
$(".video").show();
```

This would:

- hide all cards
- then show only the cards with the class `video`

---

## Example JavaScript Flow

The full filtering process works like this:

### Step 1: User clicks a filter button

For example, the user clicks:

```html
<button class="filter-btn" data-filter="design">Design</button>
```

### Step 2: jQuery reads the filter value

The script stores the category:

```javascript
var selectedCategory = $(this).attr("data-filter");
```

Now the script knows the selected category is:

```javascript
design
```

### Step 3: The active button changes

The script removes `active` from all buttons and adds it to the clicked one.

### Step 4: The cards are filtered

If the category is `"all"`, all cards are shown.

If the category is something else, the script hides all cards and then shows only the cards that have that matching class.

For example:

```javascript
$(".card").hide();
$(".design").show();
```

Now only the design cards remain visible.

---

## Why This Project Matters

This project introduces one of the most useful patterns in interactive web design:

- selecting elements
- responding to a click event
- reading information from HTML
- updating what the user sees

That pattern is used in many real-world features, including:

- filterable galleries
- searchable content layouts
- category buttons
- portfolio sorting
- product filtering
- media libraries

This project is also a good example of how jQuery can simplify interactions that would take more lines of vanilla JavaScript.

---

## Variables Used in This Project

### `selectedCategory`

Stores the category value read from the clicked button’s `data-filter` attribute.

Example:

```javascript
var selectedCategory = $(this).attr("data-filter");
```

If the user clicks the Photo button, this variable would store:

```javascript
photo
```

---

## Important Classes Used in This Project

### `filter-btn`

Applied to every filter button.

jQuery uses this class to attach click events.

### `active`

Applied to the currently selected filter button.

This class changes the button’s appearance so the user can tell which filter is active.

### `card`

Applied to every project card.

Used so jQuery can select all cards at once.

### `web`, `design`, `photo`, `video`

Category classes applied to the cards.

Used so jQuery can show only the matching cards.

### `card-grid`

The layout container that holds all of the cards.

### `card-text`

Wraps the text inside each card.

### `category-label`

Styles the small category label inside each card.

---

## Common Mistakes

### The `data-filter` value does not match the class on the card

This will break the filtering.

For example, this button:

```html
<button class="filter-btn" data-filter="photo">Photo</button>
```

needs to match cards like this:

```html
<article class="card photo">
```

If the names do not match exactly, the cards will not filter correctly.

---

### The `active` class is not removed from the other buttons

If the script only adds `active` and never removes it, multiple buttons may appear selected at the same time.

---

### All cards stay hidden

If the `"all"` condition is not handled separately, clicking the All button may hide all cards and never show them again.

You need logic that specifically says:

- if the selected category is `all`, show every card

---

### The script runs before the page is ready

If you forget to use:

```javascript
$(document).ready(function() {
```

the jQuery may run before the HTML elements exist.

---

## Things to Try

Once the basic version works, experiment with it.

### Add more cards

Create more project cards and assign them to categories.

### Add a new category

For example:

- audio
- motion
- branding
- illustration

Then add a matching filter button.

### Change the content

Replace the sample project cards with your own topics, such as:

- favorite films
- games
- bands
- travel destinations
- campus organizations
- portfolio work

### Change the visual design

Customize things like:

- colors
- fonts
- spacing
- button shapes
- hover effects
- card shadows

### Change the active button style

Try a different background color or add a border to the selected button.

---

## Glossary

**jQuery**  
A JavaScript library that simplifies common scripting tasks.

**Selector**  
A pattern used to target elements, such as `.filter-btn` or `.card`.

**Event**  
An action the browser can detect, such as a click.

**Click Event**  
Code that runs when a user clicks something.

**Class**  
A reusable label that can be applied to multiple HTML elements.

**Attribute**  
Extra information inside an HTML tag, such as `src`, `class`, or `data-filter`.

**`data-filter`**  
A custom HTML data attribute used to store category information.

**`$(this)`**  
In jQuery, this refers to the element that triggered the event.

**`.addClass()`**  
A jQuery method that adds a class to an element.

**`.removeClass()`**  
A jQuery method that removes a class from an element.

**`.show()`**  
A jQuery method that makes an element visible.

**`.hide()`**  
A jQuery method that hides an element.

**Filter**  
A way of showing only the content that matches a selected category.

**Responsive Grid**  
A layout that automatically adjusts how many columns fit across the page depending on the available width.

**`repeat(auto-fit, minmax(240px, 1fr))`**  
A CSS Grid value that allows the browser to automatically create as many columns as will fit while keeping each one at least 240 pixels wide.
