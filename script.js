(function () {
  var skills = {
    "Languages": ["C++","Java","Python","C#","Go","TypeScript"],
    "AI / ML / LLM": ["PyTorch","LangChain","HuggingFace","RAG","Fine-tuning","Prompt Engineering"],
    "GenAI Stack": ["OpenAI API","Pinecone","ChromaDB","AI Agents","Embeddings"],
    "Frameworks": ["Spring Boot",".NET Core","Angular","Node.js","FastAPI"],
    "Cloud & Infra": ["AWS (S3, SageMaker, Lambda)","Azure (Blob, OpenAI)","Kubernetes","Docker"],
    "Databases": ["PostgreSQL","MongoDB","Redis","SQLite","Vector Databases"],
    "System Design": ["Distributed Systems","Microservices","ML Pipelines","Model Serving"],
    "MLOps & DevOps": ["MLflow","Jenkins","Git","CI/CD","Weights & Biases","REST/gRPC"]
  };
  var jobs = [
    { role: "Senior Software Engineer", co: "Dell Technologies", meta: "Bengaluru, India | Apr 2022 – Present", open: true, pts: [
      "Architected SQL Server per-file database relocation feature end-to-end (UI to backend across 6 repositories), reducing the original epic delivery estimate by 70% and enabling zero-downtime restore operations.",
      "Designed and built Native Edge Plugin Service using Go and Java microservices to automate onboarding and discovery of 1,000+ edge devices, improving setup efficiency by 30% and cutting provisioning time from hours to minutes.",
      "Engineered vProxy discovery daemon for automated VM discovery in Hyper-V and Native Edge environments, reducing manual intervention by 40% and eliminating configuration drift across distributed clusters.",
      "Led the Hyper-V Backup & Restore module integrating C++, .NET, and Java services for Dell PowerProtect Data Manager (PPDM), achieving 99.9% restore reliability across 50+ enterprise customers.",
      "Built GHVDM microservice layer (Spring Boot) bridging PPDM with Hyper-V Agent, processing 10K+ metadata operations/day with sub-second latency for data flow and metadata management.",
      "Developed AI-powered log analysis pipeline using LLM-based classification and RAG to auto-diagnose backup failures from unstructured logs, reducing mean-time-to-resolution by 45% across support workflows.",
      "Resolved 15+ critical P0/P1 customer escalations under SLA, mentored 5 engineers on system design, debugging, and performance tuning best practices."] },
    { role: "Software Engineer II", co: "Dell Technologies", meta: "Bengaluru, India | Dec 2019 – Mar 2022", pts: [
      "Developed Object Store backup/restore SDK for Azure Blob and AWS S3 using C++ and Node.js, improving cloud data transfer throughput by 35% through parallel chunked uploads and connection pooling.",
      "Architected Active Directory Granular Level Restore (AD GLR) system with iSCSI-based live mount, reducing recovery turnaround from hours to minutes for enterprise AD environments.",
      "Served as Scrum Lead for AD GLR epic; managed sprint planning, backlog refinement, and delivery tracking for a team of 8 across 4 sprints.",
      "Optimized backup verification pipeline using SQLite and VSS integration, reducing recovery time by 25% through query optimization and batch processing.",
      "Filed 13 patent applications covering Office 365 backup, cloud storage optimization, and virtualization recovery techniques; 10 patents granted globally."] },
    { role: "Software Engineer", co: "Micro Focus (now OpenText)", meta: "Bengaluru, India | Aug 2016 – Nov 2019", pts: [
      "Built core modules for Directory and Resource Administrator (DRA) product using C++/.NET backend and Angular frontend, improving feature delivery velocity by 20%.",
      "Developed enterprise desktop applications using WCF and WinForms for administrative workflows, service communication, and configuration management within the DRA ecosystem.",
      "Designed WCF-based service layers enabling secure, encrypted communication between management consoles and backend services across distributed Active Directory domains.",
      "Created standalone Health Check Utility (WinForms) for product validation and diagnostics; recognized at internal hackathon for innovation and adopted org-wide."] }
  ];
  var projects = [
    ["AI/GenAI","Intelligent Log Diagnostics (RAG + LLM)","Built a Retrieval-Augmented Generation pipeline using LangChain, ChromaDB, and GPT-4 to auto-classify and diagnose backup failure logs, replacing manual triage for 10K+ daily incidents."],
    ["AI/GenAI","AI-Driven Backup Policy Recommender","Developed an ML-based system using Python and scikit-learn to analyze historical backup patterns and recommend optimal protection policies, improving storage efficiency by 20%."],
    ["Cloud & Distributed Systems","Native Edge Orchestrator","Created Go-based microservices for edge node onboarding, discovery, and secure configuration management with zero-touch provisioning."],
    ["Cloud & Distributed Systems","Object Store Cloud Backup","Architected high-throughput upload/download modules for Azure & AWS with multi-part parallel transfers, supporting petabyte-scale distributed storage."],
    ["Virtualization/Storage","Active Directory GLR","Built iSCSI-based live mount restore system reducing AD recovery from hours to minutes for enterprises with 100K+ directory objects."],
    ["Virtualization/Storage","Bare Metal Recovery (BMR/SSR)","Designed low-level backup/restore mechanisms in C++ and VSS enabling complete OS state recovery with data consistency guarantees across heterogeneous hardware."]
  ];
  var ach = [
    "Scrum Lead for multiple product releases in Dell's Data Protection suite, coordinating 8-member cross-functional teams.",
    "Delivered 10+ internal tech talks on backup architecture, cloud integration, system design, and AI/ML integration patterns.",
    "Championed AI-first development practices within the team, integrating LLM-based tooling into code review and incident response workflows.",
    "Recognized for resolving critical customer escalations (P0/P1) under tight SLAs with zero recurring incidents.",
    "Mentored 5+ junior and mid-level engineers on system design, distributed systems debugging, and AI-augmented development."];

  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.textContent = h; return e; }
  var $ = function (id) { return document.getElementById(id); };

  Object.keys(skills).forEach(function (k) {
    var card = el("article", "card"); card.appendChild(el("h3", "", k));
    var tags = el("div", "tags"); skills[k].forEach(function (s) { tags.appendChild(el("span", "", s)); });
    card.appendChild(tags); $("skill-grid").appendChild(card);
  });

  jobs.forEach(function (j) {
    var d = el("details"); if (j.open) d.open = true;
    var s = el("summary"); s.appendChild(el("span", "role", j.role + " — " + j.co)); s.appendChild(el("span", "meta", j.meta));
    d.appendChild(s); var ul = el("ul"); j.pts.forEach(function (p) { ul.appendChild(el("li", "", p)); });
    d.appendChild(ul); $("timeline").appendChild(d);
  });
  window.addEventListener("beforeprint", function () { document.querySelectorAll("details").forEach(function (d) { d.open = true; }); });

  var cards = [], cats = ["All"].concat(projects.map(function (p) { return p[0]; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
  projects.forEach(function (p) {
    var c = el("article", "card"); c.dataset.cat = p[0];
    c.appendChild(el("h3", "", p[1])); c.appendChild(el("p", "", p[2])); c.appendChild(el("p", "muted", p[0]));
    $("project-grid").appendChild(c); cards.push(c);
  });
  cats.forEach(function (cat, i) {
    var b = el("button", "", cat); b.type = "button"; b.setAttribute("aria-pressed", i === 0);
    b.addEventListener("click", function () {
      $("filters").querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-pressed", x === b); });
      cards.forEach(function (c) { c.hidden = cat !== "All" && c.dataset.cat !== cat; });
    });
    $("filters").appendChild(b);
  });

  ach.forEach(function (a) { $("ach").appendChild(el("li", "", a)); });
  $("yr").textContent = new Date().getFullYear();

  var root = document.documentElement;
  try { var saved = localStorage.getItem("theme"); if (saved) root.dataset.theme = saved; } catch (e) {}
  $("theme").addEventListener("click", function () {
    var next = root.dataset.theme === "dark" ? "light" : "dark"; root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  $("print").addEventListener("click", function () { window.print(); });
})();
