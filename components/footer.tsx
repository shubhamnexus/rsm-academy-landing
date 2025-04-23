"use client"

type FooterLink = {
  text: string;
  href: string;
  target?: string;
  rel?: string;
}

type FooterSection = {
  title: string;
  links: FooterLink[];
  logo?: string;
}

export default function Footer() {
  const footerSections: FooterSection[] = [
    {
      title: "National Center Policies",
      links: [
        { text: "Attendance Policy", href: "https://rsmacademy-sa.com/attendance", target: "_blank", rel: "noopener noreferrer" },
        { text: "Privacy and Usage Policy", href: "https://rsmacademy-sa.com/privacy", target: "_blank", rel: "noopener noreferrer" },
        { text: "Technical and Educational Support Policy", href: "https://rsmacademy-sa.com/support", target: "_blank", rel: "noopener noreferrer" },
        { text: "Academic Integrity", href: "https://rsmacademy-sa.com/integrity", target: "_blank", rel: "noopener noreferrer" },
        { text: "Principles of Intellectual Property Rights and Copyrights", href: "https://rsmacademy-sa.com/copyright", target: "_blank", rel: "noopener noreferrer" }
      ]
    },
    {
      title: "Guidelines",
      links: [
        { text: "Organizational Structure Document & Roles and Responsibilities", href: "https://rsmacademy-sa.com/staff", target: "_blank", rel: "noopener noreferrer" },
        { text: "Trainee's Guide", href: "https://rsmacademy-sa.com/student_guide", target: "_blank", rel: "noopener noreferrer" },
        { text: "Guidelines for Trainers and Trainees", href: "https://rsmacademy-sa.com/guidelines", target: "_blank", rel: "noopener noreferrer" },
        { text: "Beneficiary Satisfaction Measurement Questionnaire", href: "https://rsmacademy-sa.com/feedback", target: "_blank", rel: "noopener noreferrer" }
      ]
    },
    {
      title: "Technical Support",
      links: [
        { text: "Complaints and Suggestions", href: "https://rsmacademy-sa.com/contact_us", target: "_blank", rel: "noopener noreferrer" }
      ]
    },
    {
      title: "National Center for E-Learning Accreditation",
      links: [],
      logo: "https://22527425.fs1.hubspotusercontent-na1.net/hubfs/22527425/RSM%20Academy%20Landing%20Page/image%20(23).png"
    }
  ]

  return (
    <footer className="bg-[#1B1B1B] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-lg font-medium mb-6">{section.title}</h3>
              {section.links.length > 0 ? (
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href} 
                        className="text-gray-400 hover:text-white transition-colors text-sm"
                        target={link.target}
                        rel={link.rel}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : section.logo && (
                <div className="mt-4">
                  <img 
                    src={section.logo} 
                    alt="National eLearning Center Logo" 
                    className="w-56"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
} 