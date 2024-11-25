import { System } from '../types/system';

export const systems: System[] = [
  {
    id: "1",
    name: "DIGITLAND JUNIOR",
    vendor: "Digitland",
    website: "https://www.digitland.pl/produkty/digitland-junior/",
    description: "DIGITLAND JUNIOR to intuicyjny program komputerowy stworzony z myślą o małych firmach handlowych.",
    size: ["Małe"],
    finance: true,
    production: false,
    warehouse: true,
    crm: false,
    bi: false,
    hr: false,
    cloud: false,
    onpremise: true,
    hybrid: false,
    mobile: false,
    api: false,
    // Technical aspects
    customization_level: "Low",
    update_frequency: "Quarterly",
    supported_databases: ["MS SQL"],
    multilingual: false,
    // Detailed information
    pricing_model: ["perpetual"],
    implementation_time: "1-3 months",
    target_industries: ["Handel"],
    languages: ["Polski"],
    support_options: ["Email", "Telefon"],
    training_options: ["Online", "Dokumentacja"],
    min_users: 1,
    max_users: 10,
    integration_options: ["Import/Export"],
    security_features: ["Role-based access"],
    compliance_standards: ["JPK"],
    backup_options: ["Manual"],
    reporting_features: ["Standard reports"]
  },
  {
    id: "2",
    name: "enova365",
    vendor: "Soneta Sp. z o. o.",
    website: "https://www.enova.pl/",
    description: "Enova365 to nowoczesny system ERP, który integruje kluczowe obszary działalności przedsiębiorstwa.",
    size: ["Małe", "Średnie", "Duże"],
    finance: true,
    production: true,
    warehouse: true,
    crm: true,
    bi: true,
    hr: true,
    cloud: true,
    onpremise: true,
    hybrid: true,
    mobile: true,
    api: true,
    // Technical aspects
    customization_level: "High",
    update_frequency: "Monthly",
    supported_databases: ["MS SQL", "PostgreSQL"],
    multilingual: true,
    // Detailed information
    pricing_model: ["subscription", "perpetual"],
    implementation_time: "3-6 months",
    target_industries: ["Produkcja", "Handel", "Usługi"],
    languages: ["Polski", "Angielski"],
    support_options: ["Email", "Telefon", "Chat", "On-site"],
    training_options: ["Online", "On-site", "Dokumentacja"],
    min_users: 5,
    max_users: null,
    integration_options: ["API", "Web Services", "Import/Export"],
    security_features: ["2FA", "Role-based access", "Audit trails"],
    compliance_standards: ["GDPR", "JPK"],
    backup_options: ["Automatic", "Manual", "Cloud"],
    reporting_features: ["Custom reports", "Dashboards", "BI"]
  },
  {
    id: "3",
    name: "Epicor iScala",
    vendor: "Todis Consulting Group Sp. z o.o.",
    website: "https://todis.pl/rozwiazanie/epicor-iscala/",
    description: "Epicor iScala to kompleksowy system ERP zaprojektowany dla średnich przedsiębiorstw produkcyjnych.",
    size: ["Małe", "Średnie", "Duże"],
    finance: true,
    production: true,
    warehouse: true,
    crm: true,
    bi: true,
    hr: true,
    cloud: true,
    onpremise: true,
    hybrid: true,
    mobile: true,
    api: true,
    // Technical aspects
    customization_level: "High",
    update_frequency: "Monthly",
    supported_databases: ["MS SQL", "Oracle"],
    multilingual: true,
    // Detailed information
    pricing_model: ["subscription", "perpetual"],
    implementation_time: "6-12 months",
    target_industries: ["Produkcja", "Dystrybucja", "Usługi"],
    languages: ["Polski", "Angielski", "Niemiecki"],
    support_options: ["Email", "Telefon", "Chat", "On-site"],
    training_options: ["Online", "On-site", "Dokumentacja"],
    min_users: 10,
    max_users: null,
    integration_options: ["API", "Web Services", "Import/Export"],
    security_features: ["2FA", "Role-based access", "Audit trails"],
    compliance_standards: ["GDPR", "ISO 27001"],
    backup_options: ["Automatic", "Manual", "Cloud"],
    reporting_features: ["Custom reports", "Dashboards", "BI"]
  }
];