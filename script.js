// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle")
const mobileMenu = document.getElementById("mobileMenu")
const menuIcon = document.getElementById("menuIcon")
const closeIcon = document.getElementById("closeIcon")

mobileMenuToggle.addEventListener("click", () => {
  const isOpen = !mobileMenu.classList.contains("hidden")

  if (isOpen) {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  } else {
    mobileMenu.classList.remove("hidden")
    menuIcon.classList.add("hidden")
    closeIcon.classList.remove("hidden")
  }
})

// Close mobile menu when clicking on a link
const mobileMenuItems = document.querySelectorAll(".nav-mobile-item")
mobileMenuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.add("hidden")
    menuIcon.classList.remove("hidden")
    closeIcon.classList.add("hidden")
  })
})

let currentLang = "es" // Default language

function updateLanguage(lang) {
  currentLang = lang
  const elements = document.querySelectorAll("[data-en][data-es]")

  elements.forEach((element) => {
    const text = lang === "en" ? element.getAttribute("data-en") : element.getAttribute("data-es")
    if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
      element.placeholder = text
    } else {
      element.textContent = text
    }
  })

  document.getElementById("langText").textContent = lang === "en" ? "ES" : "EN"

  // Save language preference
  localStorage.setItem("preferredLanguage", lang)
}

document.getElementById("langToggle").addEventListener("click", () => {
  const newLang = currentLang === "en" ? "es" : "en"
  updateLanguage(newLang)
})

// Load saved language preference on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferredLanguage")
  if (savedLang) {
    updateLanguage(savedLang)
  } else {
    updateLanguage("es") // Set Spanish on first load
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 64 // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})
