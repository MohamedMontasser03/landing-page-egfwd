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

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function createDomElement(tagName, className = "", content = "") {
  const el = document.createElement(tagName);
  el.classList.add(className);
  el.textContent = content;
  return el;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
function initNav() {
  const fragment = document.createDocumentFragment();
  const ul = document.getElementsByTagName("ul")[0];

  for (let i = 0; i < sections.length; i++) {
    const navListItem = document.createElement("li");
    const navLink = createDomElement("a", "menu__link", `Section ${i + 1}`);
    navLink.setAttribute("href", `#section${i + 1}`);
    navLink.addEventListener("click", linkScroll);

    navListItem.appendChild(navLink);
    fragment.appendChild(navListItem);
  }

  ul.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function activateSection() {}

// Scroll to anchor ID using scrollTO event
function linkScroll(e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  const index = parseInt(id.charAt(id.length - 1)) - 1;
  sections[index].scrollIntoView({ behavior: "smooth" });
}

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
window.addEventListener("load", initNav);

// Scroll to section on link click

// Set sections as active
