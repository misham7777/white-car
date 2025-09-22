export const legal = {
  // Company Information
  legalName: "CarVault UAE FZ-LLC",
  tradeName: "CarVault",
  registrationNumber: "UAE-FZ-2024-001",
  licenseNumber: "UAE-LC-2024-001",
  lastUpdatedISO: "2024-01-15T10:00:00Z",
  
  // Contact Information
  contact: {
    email: "legal@carvault.ae",
    phone: "+971 4 123 4567",
    address: "Business Bay, Dubai, UAE",
    postalAddress: "P.O. Box 12345, Dubai, UAE",
    dpoEmail: "dpo@carvault.ae"
  },

  // Terms of Service
  terms: {
    eligibility: {
      age: "18+",
      territory: "UAE",
      scope: "Premium car buyout service with instant payout via bank transfer or cash"
    },
    process: {
      onlineInspection: "Online video inspection including walk-around video, VIN verification, and odometer reading",
      onsiteVerification: "30-minute on-site verification by certified inspectors",
      offerValidity: "Offers valid for 48 hours from generation",
      finalPrice: "Final price determined after physical inspection and may differ from initial estimate"
    },
    prohibitedUses: [
      "Fraudulent vehicle information",
      "Stolen vehicles",
      "Vehicles with undisclosed liens or encumbrances",
      "Vehicles not owned by the seller",
      "Commercial vehicles outside our scope"
    ],
    userRepresentations: [
      "True ownership of the vehicle",
      "No undisclosed liens or encumbrances",
      "Accurate vehicle information",
      "Legal right to sell the vehicle"
    ],
    payment: {
      methods: ["Bank transfer", "Cash"],
      kyc: "KYC verification required per UAE AML/CFT regulations",
      processing: "Bank transfers processed within 24 hours of inspection completion"
    },
    liability: {
      cap: "AED 5,000 or total fees paid (whichever is lower)",
      exclusions: ["Consequential damages", "Indirect losses", "Lost profits"]
    },
    jurisdiction: {
      law: "UAE law",
      courts: "Courts of Dubai (non-DIFC)"
    }
  },

  // Privacy Policy (UAE PDPL)
  privacy: {
    controller: "CarVault UAE FZ-LLC",
    dataCategories: [
      "Identity information (name, Emirates ID, passport)",
      "Contact details (phone, email, address)",
      "Vehicle information (make, model, year, VIN, condition)",
      "KYC documentation (ID copies, proof of ownership)",
      "Financial information (bank account details for transfers)"
    ],
    purposes: {
      contract: "Service provision and payment processing",
      legitimateInterests: "Business operations and customer service",
      legalObligation: "AML/CFT compliance and regulatory reporting"
    },
    dataRights: [
      "Right of access to personal data",
      "Right to correction of inaccurate data",
      "Right to erasure (subject to legal obligations)",
      "Right to restrict processing",
      "Right to object to processing",
      "Right to data portability"
    ],
    sharing: {
      processors: [
        "Hosting providers (AWS, Vercel)",
        "Analytics services (Google Analytics)",
        "Telecom providers for SMS/email",
        "CRM systems for customer management"
      ],
      lawEnforcement: "When required by UAE law or court order"
    },
    transfers: {
      policy: "Cross-border transfers only to adequate jurisdictions or with appropriate safeguards",
      safeguards: ["Standard contractual clauses", "Explicit consent where required"]
    },
    retention: {
      kyc: "5 years post-transaction as required by UAE AML/CFT",
      general: "3 years post-service completion",
      marketing: "Until consent withdrawn"
    },
    children: {
      policy: "Not targeted at children; 18+ only",
      collection: "No intentional collection of children's data"
    },
    complaints: {
      internal: "legal@carvault.ae",
      regulator: "UAE Data Office",
      timeline: "30 days for initial response"
    }
  },

  // KYC/AML Statement
  kycAml: {
    compliance: "Full compliance with UAE Federal Decree-Law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism",
    verificationSteps: [
      "Identity verification using Emirates ID or passport",
      "Proof of vehicle ownership (registration, purchase documents)",
      "Address verification (utility bills, bank statements)",
      "Source of funds verification for high-value transactions"
    ],
    screening: {
      pep: "Politically Exposed Persons screening",
      sanctions: "OFAC, UN, and UAE sanctions list screening",
      watchlists: "Enhanced due diligence for flagged individuals"
    },
    reporting: {
      threshold: "Transactions over AED 55,000 reported to UAE FIU",
      suspicious: "Suspicious transaction reporting as required",
      timeframe: "Reports filed within prescribed timeframes"
    },
    digitalAssets: {
      policy: "No digital asset handling or processing",
      compliance: "Traditional banking channels only for AML compliance"
    }
  },

  // Inspection & Valuation Policy
  inspection: {
    onlineProcess: {
      video: "Comprehensive walk-around video inspection",
      vin: "VIN verification and history check",
      odometer: "Odometer reading and mileage verification",
      documents: "Registration and ownership document review"
    },
    onsiteProcess: {
      duration: "30-minute comprehensive inspection",
      checklist: [
        "Engine and mechanical condition",
        "Body and paint condition",
        "Interior condition and features",
        "Tire and brake condition",
        "Electrical systems",
        "Test drive (if applicable)"
      ]
    },
    valuation: {
      methodology: "Market-based valuation using industry databases",
      factors: [
        "Vehicle condition and mileage",
        "Market demand and availability",
        "Seasonal factors",
        "Regional market conditions"
      ],
      finalLogic: "Final price based on physical inspection findings"
    },
    titleChecks: {
      liens: "Comprehensive lien and encumbrance verification",
      ownership: "Title chain verification",
      loans: "Outstanding loan balance checks",
      insurance: "Insurance claim history review"
    }
  },

  // Complaints & Contact
  complaints: {
    process: [
      "Initial contact within 24 hours",
      "Investigation within 5 business days",
      "Resolution proposal within 10 business days",
      "Final resolution within 30 days"
    ],
    escalation: {
      email: "complaints@carvault.ae",
      phone: "+971 4 123 4567",
      address: "Business Bay, Dubai, UAE"
    },
    jurisdiction: "Dubai Courts (non-DIFC) for dispute resolution"
  },

  // Cookie Policy
  cookies: {
    essential: [
      "Session management",
      "Security tokens",
      "Form data preservation",
      "User preferences"
    ],
    analytics: [
      "Google Analytics (with consent)",
      "Performance monitoring",
      "User behavior analysis"
    ],
    consent: {
      default: "Essential cookies only",
      analytics: "Requires explicit consent",
      withdrawal: "Can be withdrawn at any time"
    }
  }
};
