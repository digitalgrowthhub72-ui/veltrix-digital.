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
       category = label shown on the card; filter = which filter button it appears under (defaults to category)
       tags = optional small labels shown on the card and in the preview
     --------------------------------------------------------------- */
  portfolio: [
    { title: "ALIVE Wellness Retreats Website", category: "Websites", image: "assets/portfolio/alive.jpg", position: "top", link: "",
      description: "A luxury wellness website concept designed to showcase retreat experiences, wellness programs and destinations through elegant layouts, immersive imagery and clear booking calls to action." },
    { title: "Luxury Wellness Retreat Landing Page", category: "Landing Pages", image: "assets/portfolio/landing-page-2.jpg", position: "top", link: "",
      description: "A premium landing page concept for a private wellness retreat, combining calming visuals, refined typography and prominent consultation or booking calls to action." },
    { title: "Studio North — Squarespace Website Customization", category: "Websites", image: "assets/portfolio/studio-north.jpg", position: "top", link: "",
      description: "A Squarespace website concept highlighting custom styling, responsive layouts and polished user experiences for creative businesses and growing brands." },
    { title: "Studio Elevate — Squarespace Design & CSS", category: "Redesigns", image: "assets/portfolio/studio-elevate.jpg", position: "top", link: "",
      description: "A modern Squarespace customization concept focused on improving website layouts, visual consistency, mobile responsiveness and brand presentation through thoughtful CSS enhancements." },
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
      description: "A CRM automation concept illustrating how lead capture, pipeline management and follow-up workflows can work together." },
    { title: "LuxeSpa — Beauty & Wellness Website", category: "Beauty & Wellness", filter: "Websites", image: "assets/portfolio/luxespa.jpg", position: "top", link: "",
      tags: ["Website Design", "UI/UX", "Booking Integration"],
      description: "Designed an elegant spa website featuring beauty treatments, appointment booking, service highlights, customer testimonials, and opening hours." },
    { title: "HomeFront Realty — Real Estate Website", category: "Real Estate", filter: "Websites", image: "assets/portfolio/homefront.jpg", position: "top", link: "",
      tags: ["Real Estate Web Design", "Property Listings", "Responsive Design"],
      description: "Created a modern real estate website concept with property listings, search filters, featured homes, and client testimonials to help visitors discover properties easily." },
    { title: "Fallspa — Spa Services Website", category: "Beauty & Wellness", filter: "Websites", image: "assets/portfolio/fallspa.jpg", position: "top", link: "",
      tags: ["Spa Website", "Landing Page Design", "Appointment Forms"],
      description: "Designed a calming spa website showcasing treatment services, appointment forms, business hours, and a dedicated testimonial section." },
    { title: "Aurea Solutions — Corporate Business Website", category: "Corporate & Technology", filter: "Websites", image: "assets/portfolio/aurea.jpg", position: "top", link: "",
      tags: ["Corporate Web Design", "Lead Generation", "Business Website"],
      description: "Developed a professional corporate website concept highlighting digital services, business solutions, company vision, and a contact form for lead generation." },
    { title: "Eliza Hart — Wedding Photography Portfolio", category: "Photography", filter: "Websites", image: "assets/portfolio/eliza-hart.jpg", position: "top", link: "",
      tags: ["Photography Website", "Portfolio Design", "Luxury Branding"],
      description: "Created an elegant photography portfolio with immersive imagery, curated galleries, service information, and enquiry calls to action to attract wedding clients." },
    { title: "The Table — Restaurant Website", category: "Food & Hospitality", filter: "Websites", image: "assets/portfolio/the-table.jpg", position: "top", link: "",
      tags: ["Restaurant Web Design", "Menu Layout", "Reservations"],
      description: "Designed a stylish restaurant website featuring menu highlights, food photography, restaurant information, and prominent table reservation calls to action." },
    { title: "Alex Morgan — Creative Designer Portfolio", category: "Personal Portfolio", filter: "Websites", image: "assets/portfolio/alex-morgan.jpg", position: "top", link: "",
      tags: ["Portfolio Website", "Personal Branding", "UI/UX Design"],
      description: "Designed a contemporary personal portfolio showcasing selected projects, professional services, client feedback, and clear contact options." },
    { title: "Northbridge Academy — Online Education Website", category: "Education & E-learning", filter: "Websites", image: "assets/portfolio/northbridge.jpg", position: "top", link: "",
      tags: ["Education Website", "E-learning", "Course Promotion"],
      description: "Created an educational website concept presenting online courses, learning resources, membership options, and calls to action designed to encourage enrolment." },
    { title: "Harper Quinn — Blog Design & Customization", category: "Blog & Content", filter: "Websites", image: "assets/portfolio/harper-blog.jpg", position: "top", link: "",
      tags: ["Squarespace", "Blog Design", "Website Customization"],
      description: "Designed a content-focused website concept with an editorial layout, blog services, project showcases, and testimonials to help brands publish content professionally." },
    { title: "Harper Quinn — Web Designer Portfolio Website", category: "Professional Services", filter: "Websites", image: "assets/portfolio/harper-portfolio.jpg", position: "top", link: "",
      tags: ["Web Design", "Portfolio Website", "Personal Branding"],
      description: "Created a polished designer portfolio featuring an introduction, services, selected projects, experience highlights, client testimonials, and a project enquiry form." },
    { title: "HVAC Business Website Design", category: "Websites", image: "assets/portfolio/hvac-website.jpg", position: "top", link: "",
      description: "A professional, conversion-focused website concept for an HVAC company, designed to showcase heating and cooling services, build customer trust, and generate service inquiries." },
    { title: "Business Workflow Automation", category: "Automation", image: "assets/portfolio/workflow-automation.jpg", position: "center", link: "",
      description: "A visual representation of smart business automation designed to simplify repetitive tasks, connect business processes, and improve operational efficiency." },
    { title: "OA Corporate Brand Identity Design", category: "Brand", image: "assets/portfolio/oa-brand-identity.jpg", position: "center", link: "",
      description: "A modern corporate identity concept featuring a distinctive monogram, a dark green and lime color palette, and coordinated branded stationery for a consistent professional image." },
    { title: "SaaS Product Landing Page Design", category: "Landing Pages", image: "assets/portfolio/saas-landing-page.jpg", position: "top", link: "",
      description: "A modern SaaS landing page concept designed to communicate product value, highlight software features, present pricing plans, and encourage visitors to start a free trial." },
    { title: "Professional Consulting Website Design", category: "Redesigns", image: "assets/portfolio/consulting-website.jpg", position: "top", link: "",
      description: "A modern consulting website concept designed to communicate expertise, present professional services, introduce team members, and encourage potential clients to book consultations." },
    { title: "Nexora Premium Brand Identity Design", category: "Brand", image: "assets/portfolio/nexora-brand.jpg", position: "top", link: "",
      description: "A premium brand identity concept featuring logo design, branded apparel, packaging, business cards, and merchandise with a consistent green and gold aesthetic." },
    { title: "GreenStay Property Rental Website", category: "Landing Pages", image: "assets/portfolio/greenstay-rental.jpg", position: "top", link: "",
      description: "A modern real estate website concept featuring property listings, advanced search filters, featured homes, location highlights, and property details." },
    { title: "Construction Company Business Website", category: "Landing Pages", image: "assets/portfolio/construction-website.jpg", position: "top", link: "",
      description: "A professional construction website concept showcasing building services, company information, project galleries, client testimonials, and inquiry options." },
    { title: "Creatix Creative Agency Website Design", category: "Redesigns", image: "assets/portfolio/creatix-agency.jpg", position: "top", link: "",
      description: "A modern agency website concept with bold typography, responsive layouts, service showcases, team profiles, testimonials, and contact sections." },
    { title: "Purly Organic Brand Identity Design", category: "Brand", image: "assets/portfolio/purly-brand.jpg", position: "top", link: "",
      description: "A premium branding concept featuring logo design, branded apparel, packaging, business cards, merchandise, and coordinated brand applications." },
    { title: "Paya Fintech App Landing Page", category: "Redesigns", image: "assets/portfolio/paya-fintech.jpg", position: "top", link: "",
      description: "A conversion-focused landing page concept highlighting app features, benefits, user testimonials, security information, and app download calls to action." },
    { title: "Email Marketing Automation Workflow", category: "Automation", image: "assets/portfolio/email-automation.jpg", position: "center", link: "",
      description: "An email marketing automation concept illustrating campaign scheduling, audience segmentation, automated messaging, engagement tracking, and workflow optimization." },
    { title: "AI-Powered Business Automation", category: "Automation", image: "assets/portfolio/ai-automation.jpg", position: "center", link: "",
      description: "An AI automation concept showcasing connected business systems for customer communication, data management, reporting, and streamlined workflows." },
  ],

  /* ---------------------------------------------------------------
     TESTIMONIALS
     Replace each placeholder with a genuine client review.
       quote     - what the client said
       name      - client's name
       role      - their role / title (optional)
       business  - their business (optional)
       photo     - optional picture, e.g. "assets/clients/ada.jpg" ("" shows a neutral icon)
       rating    - optional number 1-5. Leave out unless the client gave one.
       placeholder - set to false once the review is real (removes the "Placeholder" tag)
     Add or remove entries freely; the carousel adjusts automatically.
     --------------------------------------------------------------- */
  testimonials: [
    { placeholder: false, quote: "Working with this designer was a great experience. The website design was clean, professional, and easy to navigate. I really appreciate the attention to detail and the effort put into creating a strong online presence for my business.", name: "Daniel Carter", role: "Small Business Owner", business: "Carter Digital", photo: "assets/testimonials/daniel-carter.jpg" },
    { placeholder: false, quote: "I love how professional and visually appealing the design turned out. The layout feels modern, the details are well organized, and the overall experience is smooth. It\u2019s exactly the kind of quality I wanted for my brand.", name: "Sophia Williams", role: "Brand Owner", business: "Sophia Creative Studio", photo: "assets/testimonials/sophia-williams.jpg" },
    { placeholder: false, quote: "The design looks polished and communicates the brand clearly. I especially like the layout, responsiveness, and thoughtful presentation of the content. It\u2019s a solid foundation for building trust with potential customers online.", name: "Michael Anderson", role: "Startup Founder", business: "Anderson Ventures", photo: "assets/testimonials/michael-anderson.jpg" }
  ]
};
