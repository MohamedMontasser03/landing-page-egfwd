/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("[data-nav]");
const ul = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createLink(i) {
  const navListItem = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.classList.add("menu__link");
  navLink.textContent = `Section ${i + 1}`;
  navLink.setAttribute("href", `#section${i + 1}`);
  navLink.addEventListener("click", linkScroll);

  navListItem.appendChild(navLink);
  return navListItem;
}

//check if the section is in view
function isInView(rect) {
  return rect.bottom - 0.25 * rect.height > 0 && rect.top < window.innerHeight;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function initNav() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < sections.length; i++) {
    const link = createLink(i);

    fragment.appendChild(link);
  }

  ul.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function activateSection(e) {
  let selected = false;

  sections.forEach((el, i) => {
    const rect = el.getBoundingClientRect();

    //check if 50% of the box is in view and set class
    if (isInView(rect) && !selected) {
      el.classList.add("landing__container--active");
      ul.children[i].children[0].classList.add("menu__link--active");
      selected = true;
    } else {
      el.classList.remove("landing__container--active");
      ul.children[i].children[0].classList.remove("menu__link--active");
    }
  });
}

// Scroll to anchor ID using scrollTO event
function linkScroll(e) {
  e.preventDefault();
  if (!e.target.classList.contains("menu__link--active")) {
    const id = e.target.getAttribute("href");
    const index = parseInt(id.charAt(id.length - 1)) - 1;
    sections[index].scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.addEventListener("load", initNav);

// Scroll to section on link click
//added the event dynamically when initializing the links

// Set sections as active
window.addEventListener("scroll", activateSection);
