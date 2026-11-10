// Years of experience: calculated from career start (Aug 2016), so it updates itself every year.
(function () {
  var now = new Date(), y = now.getFullYear() - 2016;
  if (now < new Date(now.getFullYear(), 7, 1)) y--;
  [].forEach.call(document.querySelectorAll(".yrs"), function (e) { e.textContent = y; });
  var b = document.querySelector("[data-years]"); if (b) b.dataset.n = y;
})();
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
      "Named inventor on 14 granted US patents covering cloud storage optimization, Office 365 backup, and virtualization recovery techniques."] },
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
    ["Virtualization/Storage","Bare Metal Recovery (BMR/SSR)","Designed low-level backup/restore mechanisms in C++ and VSS enabling complete OS state recovery with data consistency guarantees across heterogeneous hardware."],
    ["Virtualization/Storage","Hypervisor Protection (Hyper-V Backup & Restore)","Led the Hyper-V backup and restore module for Dell PowerProtect Data Manager, spanning C++, .NET and Java services. Built the Spring Boot microservice layer that bridges PPDM with the Hyper-V Agent (10K+ metadata operations a day) and a discovery daemon that finds VMs automatically across Hyper-V and Native Edge environments. Delivered 99.9% restore reliability across 50+ enterprise customers."],
    ["Identity Management","Directory and Resource Administrator (DRA)","Enterprise identity management product for secure, delegated administration of Active Directory environments, built at Micro Focus (now OpenText). Developed core modules on a C++/.NET backend with an Angular frontend, and WCF service layers providing encrypted communication between management consoles and backend services across distributed AD domains. Also built WCF and WinForms desktop applications and a Health Check Utility that won internal hackathon recognition and was adopted org-wide."]
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
})();

(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); }, $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // reading progress
  var bar = $("#progress");
  function prog() { var h = document.documentElement; bar.style.setProperty("--p", (h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)).toFixed(3)); }
  addEventListener("scroll", prog, { passive: true }); prog();

  // count-up (the one moment of motion)
  function fmt(v, d) { return d ? v.toFixed(d) : Math.round(v).toLocaleString("en-US"); }
  function run(b) {
    var n = +b.dataset.n, d = +b.dataset.d || 0, s = b.dataset.s || "";
    if (calm) { b.textContent = fmt(n, d) + s; return; }
    var t0 = performance.now();
    (function tick(t) { var k = Math.min(1, (t - t0) / 1200); b.textContent = fmt(n * (1 - Math.pow(1 - k, 3)), d) + (k === 1 ? s : ""); if (k < 1) requestAnimationFrame(tick); })(t0);
  }
  var io = new IntersectionObserver(function (e, o) { e.forEach(function (x) { if (x.isIntersecting) { $$("b", x.target).forEach(run); o.disconnect(); } }); }, { threshold: .4 });
  io.observe($("#stats"));
  addEventListener("beforeprint", function () { $$("#stats b").forEach(function (b) { b.textContent = fmt(+b.dataset.n, +b.dataset.d || 0) + (b.dataset.s || ""); }); });

  // active section in nav
  var links = $$(".nav nav a");
  var spy = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) links.forEach(function (a) { a.setAttribute("aria-current", a.getAttribute("href") === "#" + e.target.id); }); });
  }, { rootMargin: "-40% 0px -55% 0px" });
  $$("main section[id]").forEach(function (s) { spy.observe(s); });

  // skill -> evidence filter
  var on = null;
  var sb = document.createElement("div"); sb.id = "skillbar"; sb.setAttribute("role", "status");
  var msg = document.createElement("span"), clr = document.createElement("button");
  clr.className = "btn ghost small"; clr.type = "button"; clr.textContent = "Clear"; clr.style.margin = "0 0 0 auto";
  sb.appendChild(msg); sb.appendChild(clr); $("#skills").after(sb);
  function key(t) { return t.split(" (")[0].toLowerCase(); }
  function apply(tag) {
    $$(".tags span").forEach(function (x) { x.classList.toggle("on", !!tag && x === tag); });
    var items = $$("#project-grid .card").concat($$("#timeline details"));
    if (!tag) { items.forEach(function (i) { i.classList.remove("dim", "hit"); }); $$("#timeline li").forEach(function (l) { l.classList.remove("dim"); }); sb.classList.remove("show"); return; }
    var k = key(tag.textContent), n = 0;
    $$("#project-grid .card").forEach(function (c) { var m = c.textContent.toLowerCase().indexOf(k) > -1; c.classList.toggle("dim", !m); c.classList.toggle("hit", m); n += m; if (m) c.hidden = false; });
    $$("#timeline details").forEach(function (d) {
      var m = false;
      $$("li", d).forEach(function (l) { var h = l.textContent.toLowerCase().indexOf(k) > -1; l.classList.toggle("dim", !h); m = m || h; });
      d.classList.toggle("dim", !m); d.classList.toggle("hit", m); if (m) { d.open = true; n++; }
    });
    msg.textContent = "Showing where " + tag.textContent + " was used (" + n + " match" + (n === 1 ? "" : "es") + ")";
    sb.classList.add("show");
  }
  $$(".tags span").forEach(function (t) {
    t.tabIndex = 0; t.setAttribute("role", "button");
    function go() { on = on === t ? null : t; apply(on); }
    t.addEventListener("click", go);
    t.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
  });
  clr.addEventListener("click", function () { on = null; apply(null); });

  // expand all, print2, copy email
  var ex = $("#expand"), all = false;
  ex.addEventListener("click", function () { all = !all; $$("#timeline details").forEach(function (d) { d.open = all; }); ex.textContent = all ? "Collapse all" : "Expand all"; });
  $("#copy").addEventListener("click", function () {
    var m = "prabhatdubey.maildrop@gmail.com", out = $("#copied");
    (navigator.clipboard ? navigator.clipboard.writeText(m) : Promise.reject()).then(function () { out.textContent = "Email address copied."; }, function () { out.textContent = "Copy failed. Address: " + m; });
  });
})();

// Lowest priority: optional cookie-free analytics (GoatCounter). Put your GoatCounter code between the quotes to turn it on.
(function () {
  var CODE = "";
  if (!CODE || navigator.doNotTrack === "1") return;
  addEventListener("load", function () {
    (window.requestIdleCallback || setTimeout)(function () {
      var s = document.createElement("script"); s.async = true; s.src = "https://gc.zgo.at/count.js";
      s.setAttribute("data-goatcounter", "https://" + CODE + ".goatcounter.com/count"); document.body.appendChild(s);
      var f = document.querySelector("footer p"); if (f) f.textContent += " · Privacy-friendly, cookie-free visit counts.";
    });
  });
})();

// Patent category filters
(function () {
  var C = { cloud: "Cloud & Object Storage", inc: "Incremental Backup", tier: "Tiering & Lifecycle", meta: "Metadata & Search", mail: "Email Backup & Restore", sec: "Security & Access Control", sys: "System State & VSS Writers", rec: "Recovery & Restore" };
  var M = { "11095745": "cloud", "11829630": "cloud tier", "12216549": "cloud", "12026062": "cloud", "11340824": "cloud tier", "12032445": "cloud inc meta", "11809280": "cloud inc tier rec", "11669403": "cloud inc tier rec", "11734124": "cloud inc tier rec", "12625999": "cloud sec", "11442819": "cloud inc meta mail rec", "11442822": "cloud meta mail rec", "11836046": "inc sys", "12105602": "sys" };
  var list = document.querySelector("ul.patents"), bar = document.getElementById("pfilters");
  if (!list || !bar) return;
  var cards = [].slice.call(list.querySelectorAll("li.card")), counts = {};
  cards.forEach(function (li) {
    var m = li.querySelector("a").href.match(/(\d+)\/?$/), k = ((m && M[m[1]]) || "").split(" ").filter(Boolean);
    li.dataset.cats = k.join(" ");
    k.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    if (k.length) { var p = document.createElement("p"); p.className = "muted"; p.textContent = k.map(function (x) { return C[x]; }).join(" \u00b7 "); li.appendChild(p); }
  });
  function btn(label, key, on) {
    var b = document.createElement("button"); b.type = "button"; b.textContent = label; b.setAttribute("aria-pressed", on);
    b.addEventListener("click", function () {
      [].forEach.call(bar.querySelectorAll("button"), function (x) { x.setAttribute("aria-pressed", x === b); });
      cards.forEach(function (li) { li.hidden = key !== "all" && li.dataset.cats.split(" ").indexOf(key) < 0; });
    });
    bar.appendChild(b);
  }
  btn("All (" + cards.length + ")", "all", true);
  Object.keys(C).forEach(function (k) { if (counts[k]) btn(C[k] + " (" + counts[k] + ")", k, false); });
})();
