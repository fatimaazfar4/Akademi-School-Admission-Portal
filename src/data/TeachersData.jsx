const TeachersData = [
  {
    name: "Dimitres Viga",
    subject: "Mathematics",
    email: "dimitres.viga@gmail.com",
    phone: "123-456-7890",
    address: "123 Math Ave, Numbers City",
    about:
      "Experienced math teacher with a passion for numbers and problem solving. Dimitres believes in making abstract concepts tangible and fosters a classroom environment that encourages analytical thinking, curiosity, and precision.",
    education: [
      { degree: "B.Sc. in Mathematics, University of Equations", years: "2010–2014" },
      { degree: "M.Sc. in Applied Mathematics, Numbers Institute", years: "2014–2016" },
    ],
    expertise: ["Algebra", "Calculus", "Statistics", "Geometry"],
    schedule: [
      { subject: "Algebra", class: "VI A", date: "2025-08-01", time: "10:00 AM", color: "#4d44b5" },
      { subject: "Calculus", class: "VII B", date: "2025-08-02", time: "11:00 AM", color: "#fb7d5b" },
      { subject: "Geometry", class: "VIII A", date: "2025-08-03", time: "12:00 PM", color: "#fcc43e" },
      { subject: "Statistics", class: "IX A", date: "2025-08-04", time: "01:00 PM", color: "#303972" },
    ],
  },
  {
    name: "Tom Housenburg",
    subject: "Science",
    email: "tom.h@gmail.com",
    phone: "234-567-8901",
    address: "Science Park, New Labs City",
    about:
      "Innovative science educator with a focus on practical experiments and STEM learning. Tom blends theoretical foundations with hands-on projects to ignite curiosity and critical thinking in students.",
    education: [
      { degree: "B.Sc. in Physics, Tech University", years: "2011–2015" },
      { degree: "M.Ed. in Science Education, Educators College", years: "2015–2017" },
    ],
    expertise: ["Physics", "Chemistry", "Lab Experiments"],
    schedule: [
      { subject: "Physics", class: "VI B", date: "2025-08-01", time: "09:30 AM", color: "#4d44b5" },
      { subject: "Chemistry", class: "VII A", date: "2025-08-02", time: "10:30 AM", color: "#fb7d5b" },
      { subject: "Biology", class: "VIII C", date: "2025-08-03", time: "11:30 AM", color: "#fcc43e" },
      { subject: "Environmental Science", class: "IX B", date: "2025-08-04", time: "12:30 PM", color: "#303972" },
    ],
  },
  {
    name: "Dana Benevista",
    subject: "Art",
    email: "dana.b@gmail.com",
    phone: "345-678-9012",
    address: "Canvas Street, Creative Town",
    about:
      "Creative and passionate art teacher inspiring students through colors and expression. Dana promotes artistic exploration and visual storytelling.",
    education: [
      { degree: "B.F.A. in Fine Arts, Art Academy", years: "2010–2014" },
      { degree: "M.A. in Visual Arts, Creativity University", years: "2014–2016" },
    ],
    expertise: ["Painting", "Sketching", "Design"],
    schedule: [
      { subject: "Drawing", class: "VI C", date: "2025-08-01", time: "11:00 AM", color: "#4d44b5" },
      { subject: "Color Theory", class: "VII C", date: "2025-08-02", time: "12:00 PM", color: "#fb7d5b" },
      { subject: "Digital Art", class: "VIII B", date: "2025-08-03", time: "01:00 PM", color: "#fcc43e" },
      { subject: "Art History", class: "IX C", date: "2025-08-04", time: "02:00 PM", color: "#303972" },
    ],
  },
  {
    name: "Salvadore Morbeau",
    subject: "Biology",
    email: "sal.morbeau@gmail.com",
    phone: "456-789-0123",
    address: "Greenway Blvd, Nature City",
    about:
      "Biology expert with deep knowledge of ecosystems and human anatomy. Salvadore brings biology to life through fieldwork and detailed labs.",
    education: [
      { degree: "B.Sc. in Biology, Natural University", years: "2009–2013" },
      { degree: "Ph.D. in Environmental Biology, Research Institute", years: "2013–2018" },
    ],
    expertise: ["Botany", "Genetics", "Human Anatomy"],
    schedule: [
      { subject: "Botany", class: "VI A", date: "2025-08-01", time: "08:00 AM", color: "#4d44b5" },
      { subject: "Zoology", class: "VII D", date: "2025-08-02", time: "09:00 AM", color: "#fb7d5b" },
      { subject: "Genetics", class: "VIII D", date: "2025-08-03", time: "10:00 AM", color: "#fcc43e" },
      { subject: "Ecology", class: "IX D", date: "2025-08-04", time: "11:00 AM", color: "#303972" },
    ],
  },
  {
    name: "Maria Historia",
    subject: "History",
    email: "maria.h@gmail.com",
    phone: "567-890-1234",
    address: "Old Town Road, Historia City",
    about:
      "Historian and educator with a love for ancient cultures and storytelling. Maria brings history alive through immersive storytelling and multimedia presentations.",
    education: [
      { degree: "History Major, University Akademi Historia", years: "2013–2017" },
      { degree: "Master of History, University Akademi Historia", years: "2017–2020" },
    ],
    expertise: ["World History", "Philosophy", "Prehistoric", "Culture", "Ancient"],
    schedule: [
      { subject: "Ancient History", class: "VI B", date: "2025-08-01", time: "10:15 AM", color: "#4d44b5" },
      { subject: "World History", class: "VII A", date: "2025-08-02", time: "11:15 AM", color: "#fb7d5b" },
      { subject: "Modern History", class: "VIII B", date: "2025-08-03", time: "12:15 PM", color: "#fcc43e" },
      { subject: "Cultural History", class: "IX A", date: "2025-08-04", time: "01:15 PM", color: "#303972" },
    ],
  },
  {
    name: "Jack Sally",
    subject: "Physics",
    email: "jack.s@gmail.com",
    phone: "678-901-2345",
    address: "Quantum Lane, Energyville",
    about:
      "A curious mind with a knack for breaking down complex physical theories into engaging lessons. Jack believes physics should be both visual and logical.",
    education: [
      { degree: "B.Sc. in Physics, Energy Institute", years: "2012–2016" },
      { degree: "M.Sc. in Quantum Mechanics, Particle Lab University", years: "2016–2018" },
    ],
    expertise: ["Mechanics", "Thermodynamics", "Electromagnetism"],
    schedule: [
      { subject: "Mechanics", class: "VI A", date: "2025-08-01", time: "08:30 AM", color: "#4d44b5" },
      { subject: "Optics", class: "VII C", date: "2025-08-02", time: "09:30 AM", color: "#fb7d5b" },
      { subject: "Waves", class: "VIII C", date: "2025-08-03", time: "10:30 AM", color: "#fcc43e" },
      { subject: "Electricity", class: "IX C", date: "2025-08-04", time: "11:30 AM", color: "#303972" },
    ],
  },
  {
    name: "Lula Beatrice",
    subject: "Algorithm",
    email: "lula.b@gmail.com",
    phone: "789-012-3456",
    address: "Logic Way, CodeCity",
    about:
      "Algorithm specialist with strong background in computational logic and complexity theory. Loves teaching through real-world problem solving.",
    education: [
      { degree: "B.Tech in Computer Science, Logic University", years: "2011–2015" },
      { degree: "M.Tech in Algorithms, Data Institute", years: "2015–2017" },
    ],
    expertise: ["Sorting", "Graphs", "Greedy", "Dynamic Programming"],
    schedule: [
      { subject: "Graph Algorithms", class: "VI B", date: "2025-08-01", time: "10:45 AM", color: "#4d44b5" },
      { subject: "Sorting Techniques", class: "VII D", date: "2025-08-02", time: "11:45 AM", color: "#fb7d5b" },
      { subject: "Greedy Algorithms", class: "VIII D", date: "2025-08-03", time: "12:45 PM", color: "#fcc43e" },
      { subject: "DP Strategies", class: "IX D", date: "2025-08-04", time: "01:45 PM", color: "#303972" },
    ],
  },
  {
    name: "Nella Vita",
    subject: "English",
    email: "nella.v@gmail.com",
    phone: "890-123-4567",
    address: "Grammar Garden, LitCity",
    about:
      "Lover of literature and language arts. Nella makes English classes interactive through books, debates, and drama-based learning.",
    education: [
      { degree: "B.A. in English Literature, Lit University", years: "2012–2016" },
      { degree: "M.A. in Linguistics, Wordsmith College", years: "2016–2018" },
    ],
    expertise: ["Grammar", "Poetry", "Drama"],
    schedule: [
      { subject: "Literature", class: "VI A", date: "2025-08-01", time: "09:15 AM", color: "#4d44b5" },
      { subject: "Creative Writing", class: "VII B", date: "2025-08-02", time: "10:15 AM", color: "#fb7d5b" },
      { subject: "Reading Comprehension", class: "VIII A", date: "2025-08-03", time: "11:15 AM", color: "#fcc43e" },
      { subject: "Grammar Workshop", class: "IX B", date: "2025-08-04", time: "12:15 PM", color: "#303972" },
    ],
  },
  {
  name: "Nadia Rojas",
  subject: "Geography",
  email: "nadia.r@gmail.com",
  phone: "901-234-5678",
  address: "Maple Drive, Terrain Town",
  about:
    "Geography teacher who makes earth sciences and cartography fun through interactive maps and global awareness activities. Nadia inspires students to explore the planet responsibly.",
  education: [
    { degree: "B.A. in Geography, Global University", years: "2011–2015" },
    { degree: "M.A. in Geoscience, Planet Earth Institute", years: "2015–2017" },
  ],
  expertise: ["Cartography", "Environmental Studies", "World Geography"],
  schedule: [
    { subject: "Cartography", class: "VI C", date: "2025-08-01", time: "09:00 AM", color: "#4d44b5" },
    { subject: "Climatology", class: "VII C", date: "2025-08-02", time: "10:00 AM", color: "#fb7d5b" },
    { subject: "Urban Geography", class: "VIII C", date: "2025-08-03", time: "11:00 AM", color: "#fcc43e" },
    { subject: "Environmental Studies", class: "IX C", date: "2025-08-04", time: "12:00 PM", color: "#303972" },
  ],
},
{
  name: "Dakota Lin",
  subject: "Computer Science",
  email: "dakota.lin@gmail.com",
  phone: "012-345-6789",
  address: "Silicon Street, Tech Valley",
  about:
    "Tech enthusiast and passionate computer science teacher with a love for teaching code logic and digital literacy. Dakota’s classes blend coding, problem-solving, and creativity.",
  education: [
    { degree: "B.Tech in Computer Engineering, Code University", years: "2012–2016" },
    { degree: "M.Sc. in Artificial Intelligence, AI Academy", years: "2016–2018" },
  ],
  expertise: ["Python", "Web Development", "AI Basics"],
  schedule: [
    { subject: "Python Basics", class: "VI A", date: "2025-08-01", time: "10:30 AM", color: "#4d44b5" },
    { subject: "HTML/CSS", class: "VII B", date: "2025-08-02", time: "11:30 AM", color: "#fb7d5b" },
    { subject: "Scratch Programming", class: "VIII A", date: "2025-08-03", time: "12:30 PM", color: "#fcc43e" },
    { subject: "AI Fundamentals", class: "IX A", date: "2025-08-04", time: "01:30 PM", color: "#303972" },
  ],
},
{
  name: "Miranda Stellano",
  subject: "Music",
  email: "miranda.s@gmail.com",
  phone: "123-321-1234",
  address: "Rhythm Road, Melody City",
  about:
    "A music maestro with a soulful approach to teaching melody, rhythm, and composition. Miranda makes music theory and performance an expressive outlet for students.",
  education: [
    { degree: "B.A. in Music, Harmonia University", years: "2010–2014" },
    { degree: "M.A. in Music Composition, Orchestra Institute", years: "2014–2016" },
  ],
  expertise: ["Vocals", "Music Theory", "Instruments"],
  schedule: [
    { subject: "Music Theory", class: "VI B", date: "2025-08-01", time: "11:00 AM", color: "#4d44b5" },
    { subject: "Vocal Training", class: "VII D", date: "2025-08-02", time: "12:00 PM", color: "#fb7d5b" },
    { subject: "Instrumental", class: "VIII D", date: "2025-08-03", time: "01:00 PM", color: "#fcc43e" },
    { subject: "Choir Practice", class: "IX D", date: "2025-08-04", time: "02:00 PM", color: "#303972" },
  ],
},
{
  name: "Indiana Creed",
  subject: "Physical Education",
  email: "indiana.c@gmail.com",
  phone: "321-123-4321",
  address: "Fitness Lane, Sportstown",
  about:
    "Energetic physical education coach who inspires teamwork, discipline, and wellness. Indiana trains students in both traditional sports and modern fitness routines.",
  education: [
    { degree: "B.P.Ed., National Sports University", years: "2011–2015" },
    { degree: "M.P.Ed., Athletic Training College", years: "2015–2017" },
  ],
  expertise: ["Athletics", "Team Sports", "Health Education"],
  schedule: [
    { subject: "Fitness Drills", class: "VI D", date: "2025-08-01", time: "08:00 AM", color: "#4d44b5" },
    { subject: "Yoga & Stretching", class: "VII C", date: "2025-08-02", time: "09:00 AM", color: "#fb7d5b" },
    { subject: "Basketball", class: "VIII B", date: "2025-08-03", time: "10:00 AM", color: "#fcc43e" },
    { subject: "Track & Field", class: "IX B", date: "2025-08-04", time: "11:00 AM", color: "#303972" },
  ],
},

];

export default TeachersData;
