const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
  const isHidden = mobileMenu.classList.contains("hidden");
  if (isHidden) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
    document.body.style.overflow = "hidden"; // Disable background scroll
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    document.body.style.overflow = "auto"; // Re-enable scroll
  }
});

function closeNavbar() {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("flex");
  document.body.style.overflow = "auto";
}
gsap.registerPlugin(ScrollTrigger);

// Smooth scroll animations for product cards
gsap.utils.toArray(".product-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 30,
    duration: 0.6,
    delay: index * 0.1,
  });
});

// Animate solution cards with stagger
gsap.utils.toArray(".solution-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 75%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: index % 2 === 0 ? -50 : 50,
    duration: 0.7,
    delay: index * 0.15,
  });
});

// Testimonial fade in
gsap.utils.toArray(".testimonial-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    scale: 0.9,
    duration: 0.6,
    delay: index * 0.2,
  });
});

// Pricing card animation
gsap.utils.toArray(".pricing-card").forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 75%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 40,
    duration: 0.7,
    delay: index * 0.15,
  });
});

const faqs = [
  {
    question: "What is AROSCAI Smart Home?",
    answer:
      "AROSCAI Smart Home is a premium brand offering smart home solutions designed to make your life easier, more efficient, and secure through cutting-edge technology.",
  },
  {
    question: "Can I control my devices remotely?",
    answer:
      "Yes, you can control all your connected devices anytime and anywhere using the AROSCAI mobile app with real-time updates and monitoring.",
  },
  {
    question: "Is AROSCAI compatible with Alexa or Google Assistant?",
    answer:
      "Yes, AROSCAI smart devices are compatible with both Amazon Alexa and Google Assistant, allowing voice control and seamless smart home integration.",
  },
  {
    question: "Do I need Wi-Fi for AROSCAI products to work?",
    answer:
      "Yes, a stable Wi-Fi connection is required for remote access, real-time control, and smart automation features.",
  },
  {
    question: "Can I install AROSCAI devices in my existing home?",
    answer:
      "Absolutely! AROSCAI products are retrofit-compatible, which means they can be installed in existing homes without any structural changes.",
  },
  {
    question: "Is there any technical support available?",
    answer:
      "Yes, our support team is available 24×7 to assist you with installation, troubleshooting, and setup guidance for all AROSCAI products.",
  },
  {
    question: "How secure are AROSCAI smart devices?",
    answer:
      "All AROSCAI devices are built with advanced encryption and data protection protocols to ensure complete security of your personal data and home network.",
  },
  {
    question: "Can I request a demo before buying?",
    answer:
      "Yes, you can request a live demo through our website or contact form to experience AROSCAI smart solutions before making a purchase.",
  },
];

const container = document.getElementById("faqContainer");

faqs.forEach((faq, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = "border-b border-slate-200 py-4 cursor-pointer";

  const header = document.createElement("div");
  header.className = "flex items-center justify-between";
  header.innerHTML = `
            <h3 class="text-base font-medium">${faq.question}</h3>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transition-all duration-500 ease-in-out icon">
                <path d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                    stroke="#1D293D" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `;

  const answer = document.createElement("p");
  answer.className =
    "text-sm text-slate-500 transition-all duration-500 ease-in-out max-w-md opacity-0 max-h-0 -translate-y-2 pt-0 answer";
  answer.textContent = faq.answer;

  wrapper.appendChild(header);
  wrapper.appendChild(answer);
  container.appendChild(wrapper);

  header.addEventListener("click", () => {
    const allAnswers = document.querySelectorAll(".answer");
    const allIcons = document.querySelectorAll(".icon");

    allAnswers.forEach((el, i) => {
      if (i === index) {
        const isOpen = el.classList.contains("opacity-100");
        el.classList.toggle("opacity-100", !isOpen);
        el.classList.toggle("max-h-[300px]", !isOpen);
        el.classList.toggle("translate-y-0", !isOpen);
        el.classList.toggle("pt-4", !isOpen);
        el.classList.toggle("opacity-0", isOpen);
        el.classList.toggle("max-h-0", isOpen);
        el.classList.toggle("-translate-y-2", isOpen);

        allIcons[i].classList.toggle("rotate-180", !isOpen);
      } else {
        el.classList.remove(
          "opacity-100",
          "max-h-[300px]",
          "translate-y-0",
          "pt-4"
        );
        el.classList.add("opacity-0", "max-h-0", "-translate-y-2");
        allIcons[i].classList.remove("rotate-180");
      }
    });
  });
});
