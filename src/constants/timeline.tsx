export const timeline = [
  {
    company: "Florida State University",
    title: "BAS Software Developer",
    date: "Nov 2024 - Present",
    location: "Tallahassee, FL",
    description: "Engineering real-time building automation systems and infrastructure",
    technologies: ["python", "kubernetes", "docker", "terraform", "prometheus", "grafana"],
    responsibilities: [
      "Engineered a real-time WebSocket platform handling 1,600+ concurrent connections with sub-second latency, optimizing network I/O to reduce CPU usage by 20%",
      "Implemented & maintained BACnet-TCP/IP integration for building automation, diagnosing live network issues using tcpdump & strace",
      "Built end-to-end infra automation with Terraform & Helm charts, deploying containerized microservices on Kubernetes with autoscaling, reducing manual deployment time by 50%",
      "Instrumented system health using Prometheus metrics & Grafana dashboards; configured Alertmanager to triage incidents, cutting MTTD by 40%",
      "Participated in 24/7 on-call rotation, triaging & resolving production incidents with average MTTR of under 30 minutes",
    ],
  },
  {
    company: "Florida State University",
    title: "Machine Learning Researcher (Volunteer)",
    date: "Jan 2023 - Aug 2024",
    location: "Tallahassee, FL",
    description: "Advancing climate science through distributed systems and machine learning",
    technologies: ["python", "apache-spark", "kubernetes", "grafana", "machine-learning"],
    responsibilities: [
      "Architected & deployed Spark pipelines for 1TB+ climate datasets on Kubernetes clusters, achieving 99% job success & improving throughput by 40%",
      "Optimized distributed ingestion buffers & memory management, reducing end-to-end pipeline runtime by 50%",
      "Designed & monitored job metrics in Grafana; created alerts to detect straggler tasks & prevent SLA breaches",
    ],
  },
  {
    company: "Aspire Systems",
    title: "Software Analyst",
    date: "Oct 2020 - Jul 2022",
    location: "Chennai, India",
    description: "Delivering scalable enterprise solutions and cloud migrations",
    technologies: ["aws", "kubernetes", "mysql", "javascript", "jest", "cypress"],
    responsibilities: [
      "Migrated a legacy monolith to AWS microservices (EKS), improving availability by 99.5% & cutting infra costs by 20%",
      "Developed optimized SQL stored procedures & ETL pipelines, boosting data processing speed by 35%",
      "Instituted unit/integration testing with Jest & Cypress (90% coverage), reducing regression defects by 50%",
    ],
  },
];
