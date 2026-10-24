/* =====================================================================
   VELTRIX DIGITAL — EDIT YOUR CONTENT HERE
   You never need to touch index.html to add portfolio items or
   testimonials. Change the lists below, save, and redeploy.
   ===================================================================== */

window.VELTRIX = {
  /* WhatsApp number in international format, digits only (Nigeria = 234 + number without the first 0) */
  whatsapp: "2349056606876",
  email: "sowemimoayuba744@gmail.com",
  upwork: "https://www.upwork.com/freelancers/~014cfb033d93b9ed96",
  booking: "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3epmQY0nYQF_Yl3A0FLdwpH40Y6b3Aoba1AWbiLc5uk9Tn7coQVqORGMZEpZUIXNek8APd2JPm?gv=true",
  instagram: "https://www.instagram.com/ayokunlesowemimo/",
  facebook: "https://www.facebook.com/profile.php?id=61579270116766",

  /* Default message that opens in WhatsApp when someone clicks any button */
  defaultMessage:
    "Hello Ayuba, I found Veltrix Digital online and I'd like to chat about a website for my business.",

  /* ---------------------------------------------------------------
     PORTFOLIO
     How to add a project:
       1. Put the image inside the  assets/portfolio  folder
          (example: assets/portfolio/project-1.jpg)
       2. Set  image: "assets/portfolio/project-1.jpg"
       3. Change the title, category, and (optional) link
     Leave  image: ""  to show the "coming soon" placeholder.
     category must be one of: "Websites", "Landing Pages", "Redesigns", "Brand", "Automation"
       position: "top" or "center" (which part of a tall image shows on the card)
     --------------------------------------------------------------- */
  portfolio: [
    { title: "Professional Business Website Design", category: "Websites", image: "assets/portfolio/business.jpg", position: "top", link: "",
      description: "A modern digital agency website concept showcasing services, brand messaging and a professional online presence." },
    { title: "Conversion-Focused Landing Page", category: "Landing Pages", image: "assets/portfolio/landing.jpg", position: "top", link: "",
      description: "A marketing landing page concept with clear messaging, structured service sections and conversion-focused calls to action." },
    { title: "Business Website Redesign", category: "Redesigns", image: "assets/portfolio/redesign.jpg", position: "center", link: "",
      description: "A website redesign approach focused on clearer messaging, mobile usability, trust signals and easier customer enquiries." },
    { title: "Premium Brand Identity & Visual Design", category: "Brand", image: "assets/portfolio/brand.jpg", position: "center", link: "",
      description: "A luxury fashion branding concept using a refined monogram, typography and a coordinated visual identity system." },
    { title: "E-commerce Store Design", category: "Websites", image: "assets/portfolio/ecommerce.jpg", position: "center", link: "",
      description: "An e-commerce platform showcasing product management, storefront design and automated retail workflows." },
    { title: "CRM & Lead Follow-Up Automation", category: "Automation", image: "assets/portfolio/crm.jpg", position: "center", link: "",
      description: "A CRM automation concept illustrating how lead capture, pipeline management and follow-up workflows can work together." }
  ],

  /* ---------------------------------------------------------------
     TESTIMONIALS
     Replace each placeholder with a real client.
     photo is optional (e.g. "assets/clients/ada.jpg"); leave "" to show initials.
     --------------------------------------------------------------- */
  testimonials: [
    { quote: "Your client's testimonial will appear here. Replace this text with what they said about working with Veltrix Digital.", name: "Client Name", role: "Their Role", business: "Business Name", photo: "" },
    { quote: "A second testimonial goes here. Short, specific quotes about the result or experience work best.", name: "Client Name", role: "Their Role", business: "Business Name", photo: "" },
    { quote: "A third testimonial goes here. You can add as many as you like — the slider adjusts automatically.", name: "Client Name", role: "Their Role", business: "Business Name", photo: "" }
  ]
};
