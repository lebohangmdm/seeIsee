export type KeyPoint = {
  title: string;
  point: string;
};

export type Service = {
  id?: string;
  title: string;
  image: string;
  summary: string;
  description: string;
  keyPoint: KeyPoint[];
  createdAt?: string;
  updatedAt?: string;
};

type Services = Service[];

export const services: Services = [
  {
    id: "1",
    title: "Screening Service",
    image: "screen.png",
    summary:
      "We insure high safety and reliability through comprehensive personnel vetting.",
    description:
      "Our screening solutions tailored to the unique needs of the community. Our services ensure that all individuals, vehicles, and goods entering or operating within the area are thoroughly checked to maintain a safe and secure environment",
    keyPoint: [
      {
        title: "Personal and Employee Screening",
        point:
          "We conduct detailed background checks on employees, contractors, and visitors to verify identity and ensure compliance with security protocols. This includes criminal record checks, employment history verification, and biometric screening.",
      },
      {
        title: "Vehicle Inspections",
        point:
          "Our team provides thorough vehicle inspections at community entry points, using both manual checks and advanced technology to detect unauthorized items or suspicious materials.",
      },
      {
        title: "Event Screening",
        point:
          "For local events, we offer security screening solutions to control access, prevent the entry of weapons or prohibited items, and ensure public safety.",
      },
    ],
  },
  {
    id: "2",
    title: "Crowd Management",
    image: "image.png",
    summary:
      "Efficient crowd management services at community, ensuring safety and smooth operations during events and gatherings.",
    description:
      "We specializes in effective crowd management strategies to ensure safety and efficiency in high-density environments. Their approach focuses on minimizing risks, enhancing the flow of people, and preventing incidents through comprehensive planning and on-the-ground coordination.",
    keyPoint: [
      {
        title: "Pre-Event Planning",
        point:
          "Detailed risk assessments and crowd flow analysis.Coordination with local authorities,emergency services and development of crowd control strategies",
      },
      {
        title: "On-Site Personnel",
        point:
          "Trained security personnel deployed strategically for crowd control. Implementation of clear communication channels among staff members.",
      },
      {
        title: "Emergency Response",
        point:
          "Readiness to implement emergency protocols if needed. Regular drills and training to ensure staff are prepared for emergencies.",
      },
      {
        title: "Technology Integration",
        point:
          "Utilization of advanced surveillance systems to monitor crowd behavio",
      },
      {
        title: "Post-Event Review",
        point:
          "Evaluation of crowd management effectiveness. Collection of feedback for continuous improvement in future events.",
      },
    ],
  },
  {
    id: "3",
    title: "Escorting Security Officers",
    image: "image.png",
    summary:
      "We offer professional escorting to ensure safe and secure travel and protection for individuals and groups.",
    description:
      "We  offers specialized escorting services to ensure the safety of individuals and valuable assets during transit. Their solutions are customized based on risk assessments, secure route planning, and expert security personnel who are prepared to handle any potential threats discreetly and efficiently.",
    keyPoint: [
      {
        title: "Personal and Asset Protection",
        point:
          "Tailored security plans based on client-specific requirements. Escort services for VIPs, executives, and high-value items.",
      },
      {
        title: "Risk Assessment and Secure Routes",
        point:
          "Detailed threat evaluations to identify potential risks. Safe route planning with alternative paths to avoid risky areas.",
      },
      {
        title: "Trained Security Personnel",
        point:
          "Officers trained in defensive driving and threat mitigation. Maintaining a discreet but effective presence during the escort.",
      },
      {
        title: "Emergency Preparedness",
        point:
          "Immediate response to potential threats. Pre-planned protocols and coordination with law enforcement.",
      },
      {
        title: "Confidentiality",
        point:
          "Ensuring privacy and confidentiality throughout the escort process.",
      },
    ],
  },
  {
    id: "4",
    title: "Access Control Security",
    image: "img4.png",
    summary:
      "We offer reliable access control, limiting entry to authorized individuals for secure and controlled environments",
    description:
      "We offer comprehensive access control solutions to secure properties, businesses, and facilities in our communities. Their services focus on restricting unauthorized entry, monitoring movement, and ensuring that only approved individuals have access to specific areas. By utilizing modern technologies and trained personnel.",
    keyPoint: [
      {
        title: "Access Restriction and Monitoring",
        point:
          "Limiting entry to authorized personnel through secure systems. Continuous monitoring of entry points to track movements.",
      },
      {
        title: "Advanced Technology",
        point:
          "Integration of keycard systems, biometric scanners, and electronic locks. CCTV surveillance to complement access control measures",
      },
      {
        title: "Customized Solutions",
        point:
          "Tailored access control plans based on the specific needs of businesses, residential complexes, and event venues.Scalable solutions that can be adapted as security needs evolve ",
      },
      {
        title: "Emergency Response",
        point:
          "Immediate lockdown protocols in case of security breaches. Integration with alarm systems and law enforcement for rapid response.",
      },
      {
        title: "Audit and Reporting",
        point:
          "Regular audits of access logs to identify potential vulnerabilities. Detailed reporting on access patterns to improve security measures.",
      },
    ],
  },
  {
    id: "5",
    title: "Concierge",
    image: "img5.png",
    summary:
      "We offer personalized assistance with vigilant protection, ensuring safety and convenience in secure environment",
    description:
      "We offer professional concierge security services tailored for residential complexes, commercial properties, and events. The concierge team serves as the first point of contact, combining hospitality with security to ensure a welcoming and safe environment for residents, visitors, and staff.",
    keyPoint: [
      {
        title: "First Point of Contact",
        point:
          "Professional greeting and screening of visitors. Handling inquiries and directing guests while ensuring security protocols are followed.",
      },
      {
        title: "Access Control",
        point:
          "Monitoring and controlling access to buildings or facilities. Verification of visitor identities and authorization before granting entry.",
      },
      {
        title: "Security with Customer Service",
        point:
          "Seamless blend of security duties with hospitality services. Assisting residents or guests with queries while maintaining a safe environment.",
      },
      {
        title: "Incident Management",
        point:
          "Trained to handle security breaches or disruptions discreetly. Quick reporting and escalation of incidents to relevant authorities.",
      },
      {
        title: "Tailored Solutions",
        point:
          "Customized concierge services based on the specific needs of residential estates, offices, or event venues",
      },
    ],
  },
  {
    id: "6",
    title: "Patrolling",
    image: "img6.png",
    summary:
      "Reliable patrolling at the community to maintain security and deter potential threats around the clock.",
    description:
      "We provides vigilant patrolling services designed to protect residential areas, businesses, and event venues. Their mobile patrol units and on-foot security officers ensure continuous monitoring of designated areas, deterring criminal activities and responding swiftly to potential threats. These patrols offer a visible security presence and enhance safety in high-risk environments.",
    keyPoint: [
      {
        title: "Regular Patrolling",
        point:
          "Scheduled and random patrols to cover a wide area. Visible presence to deter crime and create a sense of safety.",
      },
      {
        title: "Regular Patrolling",
        point:
          "Scheduled and random patrols to cover a wide area. Visible presence to deter crime and create a sense of safety.",
      },
      {
        title: "Mobile and On-Foot Patrols",
        point:
          "Use of vehicles and foot patrols for comprehensive coverage. Flexible routes to adapt to changing security needs.",
      },
      {
        title: "Trained Officers",
        point:
          "Security personnel trained to identify suspicious activity and potential risks. Immediate response to incidents, with a focus on de-escalation.",
      },
      {
        title: "Incident Response",
        point:
          "Quick response to alarms, disturbances, or security breaches. Cooperation with local law enforcement for added support when needed.",
      },
      {
        title: "Customized Patrol Plans",
        point:
          "Tailored patrol routes based on specific security concerns in the area. Adjusted patrol frequency for high-risk zones or events.",
      },
    ],
  },
];
