import React from 'react';
import { Icon } from '@iconify/react';

export let navData = [
    {
        title:"Home",
        url:"/"
    },
    {
        title:"About Us",
        url:"/about"
    },
    {
        title:"Book Now",
        url:"/booknow"
    },
    {
        title:"Services",
        url:"/services"
    },
    {
        title:"Projects",
        url:"/projects"
    },
    {
        title:"Prices",
        url:"/price"
    },
    {
        title:"Contact us",
        url:"/contact"
    },
    {
        title:"Profile",
        url:"/profile"
    },
]
export let cards = [
    {
        img:"/img/c1.png",
        title:"CONSTRUCTION SERVICES",
        info:"Construction & renovation services. We construct buildings, houses, plazas and provide renovation services at competitive prices."
    },
    {
        img:"/img/c2.png",
        title:"AC & HVAC SERVICES",
        info:"AC cleaning, AC installation, AC repair, AC shifting, R22 / R410 gas charging, PCB kit repair etc. Starting as low as Rs. 500 per hour* only."
    },
    {
        img:"/img/c3.png",
        title:"CLEANING SERVICES",
        info:"Premium cleaning & janitorial services for households and corporate clients. We offer hourly, daily and monthly packages."
    },
    {
        img:"/img/c4.png",
        title:"ELECTRICAL SERVICES",
        info:"Electrical Faults, UPS Installation, TV Installation, Breaker Replacement, Plug Repair, Wiring etc. Starting as low as Rs. 500 per hour* only."
    },
    {
        img:"/img/c5.png",
        title:"PAINTER SERVICES",
        info:"Affordable building & wall paint services for homes and offices. Whitewash, plastic emulsion, enamel paint, polishing & related services."
    },
    {
        img:"/img/c6.png",
        title:"PLUMBING SERVICES",
        info:"Pipe Leaks, Muslim Shower & Tap Replacement, Geyser Installation, Opening Blocked Drains etc. Starting as low as Rs. 500 per hour* only."
    },
]
export const handymanFooter =[
    {
      title: "About Us",
      info: "Founded in 2014, The Handyman is a Pakistan Engineering Council registered (PEC 69296) maintenance, repair & facilities management company. Our services are available to both households and corporate clients at very affordable rates.",
      button: "Learn more",
      link: "/"
    },
    {
      title: "OUR SERVICES",
      lists: [
        {title: "> Book now", url: "",},
        {title: "> AC & HVAC", url: "",},
        {title: "> Cleaning & Janitorial", url: "",},
        {title: "> Construction & Renovation", url: "",},
        {title: "> Electrical", url: "",},
        {title: "> Painter", url: "",},
        {title: "> Plumbing", url: "",},
        {title: "> Outsourcing, Payroll & EOR Services", url: "",},
      ]
    },
    {
      title: "LATEST POSTS",
      lists: [
        {title: "Choosing the right water geyser", url: "",},
        {title: "December 12, 2023", url: "",},
        {title: "A guide on house construction in Pakistan", url: "",},
        {title: "January 11, 2023", url: "",},
      ]
    },
    {
      title: "CONTACT INFO",
      lists: [
        {title: "Office 1, Second Floor, above NBP, 4A Utility Store Plaza, F-8 Markaz, Islamabad, Pakistan", url: "", icon: <Icon icon="mdi:location" />},
        {title: "0800-42639 (Toll Free)", url: "", icon: <Icon icon="bi:phone" />},
        {title: "051-848-7800", url: "", icon: <Icon icon="bi:phone" />},
        {title: "info@thehandyman.com.pk", url: "", icon:<Icon icon="material-symbols:mail-outline" />},
        {title: "Mon-Sun: 9:00 AM - 5:00 PM", url: "", icon: <Icon icon="mdi:clock-outline" />},
      ]
    },
  ]
  
  export const handymanSocialLinks = [
    {icon: <Icon icon="mdi:facebook" />, url: "/"},
    {icon: <Icon icon="iconoir:instagram" />, url: "/"},
    {icon: <Icon icon="bi:twitter" />, url: "/"},
    {icon: <Icon icon="akar-icons:linkedin-fill" />, url: "/"},
  ]
  
  
  export const handymanTestimonials  = [
    {title: "CALL Tradesman", icon: <Icon icon="el:phone-alt" />,},
    {title: "Search Location", icon: <Icon icon="material-symbols-light:location-on" />},
    {title: "Wallet", icon: <Icon icon="solar:wallet-outline" />},
  ]
  
  export const handymanReason = [
    {title: "TRAINED", info: "Our handymen are skilled, trained and professional. Furthermore, they are background-checked."},
    {title: "EQUIPPED", info: "We provide our employees with the best tools and make sure that they are smartly uniformed. This minimizes delays and ensures that the job is done on time."},
    {title: "CAPABLE", info: "We have the capability to do both small and large jobs-from fixing something as small as a muslim shower to renovating and constructing a house, you can count on us to do the job for you."},
    {title: "QUICK", info: "Our handymen use motor bikes to minimize delays and reach you on time."},
    {title: "AFFORDABLE", info: "We charge sensible prices that are really competitive even when compared to contractors or freelance technicians. The clients are further given invoices professionally and don’t have to go through the worry of over-pricing."},
    {title: "CUSTOMER FOCUSED", info: "We provide after support for our services and make routine feedback calls to our customers. In the unlikely event you are unhappy with the job, we will redo it to your satisfaction*"},
  ]
  export const aboutData = [
    {
      icon:<Icon icon="et:profile-male" />,
      title:" WHO WE ARE",
     info:"The Handyman Pvt. Limited is a facilities management company providing construction, renovation, and various on-call maintenance & repair services. Established in 2014, we are proudly serving thousands of customers in Islamabad & Rawalpindi. We are registered with Securities Exchange Commission of Pakistan (SECP) as well as Pakistan Engineering Council (PEC)."
    },
    {
      icon:<Icon icon="fluent-emoji-high-contrast:clipboard" />,
      title:"WHAT WE DO",
      info:"We provide air conditioning, carpentry, electrical, plumbing, MEP, masonry and janitorial services. We also provide construction, renovation & facility management services. Our services are available to both households and corporate customers."
    },
    {
      icon:<Icon icon="vaadin:home-o" />,
      title:"OUR FOCUS",
      info:"Our aim is to make your life easy by providing affordable and professional handyman services at your doorstep."
    }
  ]
  export const profileData = {
    profileCard:[
      {
        type:"file",
        name:"profileImage",
        lable:"profile"
      },
      {
        type:"text",
        name:"createdAt",
        lable:"Member since"
      },
      {
        type:"text",
        name:"location",
        lable:"from"
      },
    ],
    bio:[
      {
      type:"text",
      name:"firstName",
      lable:"First Name"
      },
      {
      type:"text",
      name:"lastName",
      lable:"Last Name"
      },
      {
      type:"password",
      name:"password",
      lable:"Password" 
      },
      {
      type:"number",
      name:"phoneNumber",
      lable:"Phone Number"
      },
      {
      type:"email",
      name:"email",
      lable:"Email Address"
      },
      {
        type:'select',
        name:"gender",
        options:[
          {value:"Male", label:"Male" },{value:"Female",label:"Female"}
        ]
      }
    
    ]
  }