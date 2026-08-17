const projects = [
  {
    id: "rm-advantage-engine",
    image: "/img/rm-advantage-engine/rmae-01.jpg",
    images: [
      "/img/rm-advantage-engine/rmae-01.jpg",
      "/img/rm-advantage-engine/rmae-02.jpg",
      "/img/rm-advantage-engine/rmae-03.jpg",
      "/img/rm-advantage-engine/rmae-04.jpg",
      "/img/rm-advantage-engine/rmae-05.jpg",
    ],
    tags: ["React", "Vite", "Claude API", "Fintech"],
    title: "AI × Finance Hackathon — CFA Society Thailand",
    summary:
      "🏆 1st Place. Sole technical lead on a 5-person team that built an AI system helping wealth-management RMs turn overlooked market moves into a compliance-approved client call list.",
    details:
      'As AI/Tech Lead, built the full agent pipeline and frontend end-to-end: a Claude-powered pipeline that spots when the market reacts differently than expected to news, then routes the insight through a human "Four Eyes" approval step before it becomes a personalized call script for each affected client — keeping a licensed reviewer in the loop on every client-facing recommendation.',
    award: "🏆 1st Place, AI × Finance Hackathon (CFA Society Thailand, 2026)",
    link: "https://github.com/JeabtiE/RM-Advantage-Engine",
  },
  {
    id: "watermelon",
    image: "/img/watermelon.png",
    tags: ["Python", "OpenCV", "Computer Vision"],
    title: "Watermelon Weight Measurement",
    summary:
      "Estimates watermelon weight from images using ellipsoidal geometry and definite integration no scale required.",
    details:
      "Uses OpenCV to detect the shape of a watermelon, then models it as an ellipsoid and applies definite integration along the X-axis to estimate its volume and weight. Accuracy is comparable to conventional weighing methods. Awarded Bronze Medal at Innovation Inventors Day (IYIA) in the Agricultural Innovation and Technology category, August 2024.",
    award: "Bronze Medal IYIA 2024",
    link: null,
  },
  {
    id: "voxvet",
    image: "/img/voxvet.png",
    tags: ["Python", "CNN/RNN", "Flutter"],
    title: "VoxVet",
    summary:
      "AI-powered mobile app that detects respiratory diseases in cows through real-time sound analysis.",
    details:
      "Processes cow audio with Librosa to extract features such as MFCCs, then feeds them into a CNN/RNN model trained with TensorFlow. The model is served via a Flask API and connected to a Flutter mobile app, allowing farmers to assess livestock health directly from their smartphones.",
    award: null,
    link: null,
  },
  {
    id: "address",
    image: "/img/datasci.png",
    tags: ["Python", "Data Science", "NLP"],
    title: "Smart Address Completion System",
    summary:
      "Autocompletes partial Thai addresses to reduce input errors in forms and logistics systems.",
    details:
      "Analyzes incomplete address strings and matches them against structured datasets to produce full, validated addresses. Selected as a finalist from 287 teams nationwide. Awarded Silver Medal at the Data Science Project Contest 2024, Faculty of Science, Chiang Mai University.",
    award: "Silver Medal Data Science Contest 2024",
    link: null,
  },
  {
    id: "vr-game",
    image: "/img/game_vr.png",
    tags: ["Unity", "C#", "Game Dev"],
    title: "Game-based VR for Learning Unicellular Animals",
    summary:
      "A VR game that teaches students to identify unicellular organisms through interactive gameplay.",
    details:
      "Built in Unity with C#, featuring a point system and identification mechanics for unicellular organisms in an immersive virtual environment. Presented jointly with Tokyo Gakugei University Senior High School as an oral and poster session in English. Awarded Silver Medal in the Computer Science category at the PCSHS Science Symposium 2024.",
    award: "Silver Medal PCSHS 2024",
    link: null,
  },
  {
    id: "ict-challenge",
    image: "/img/ict_challenge.png",
    tags: ["Networking", "Algorithms", "AI", "OS"],
    title: "ICT Challenge 2024",
    summary:
      "National CS and IT quiz competition covering Networking, Algorithms, AI, and Operating Systems.",
    details:
      "Advanced to the semi-finals as one of the top 90 teams from approximately 220 teams nationwide, then reached the final round among the top 10 teams at the Faculty of Information Technology, King Mongkut's University of Technology Thonburi. Awarded Second Runner-Up with a 3,000 THB scholarship, November 2024.",
    award: "Second Runner-Up ICT Challenge 2024",
    link: null,
  },
  {
    id: "snp",
    image: "/img/snp.png",
    tags: ["HTML", "CSS", "JavaScript"],
    title: "BakeYourSoul — S&P Interactive Game",
    summary:
      "A bilingual interactive game that reveals which S&P cake matches your personality.",
    details:
      'Built for S&P Bakery\'s "Crack the Cake" case competition. Features typewriter animation, animated result reveals, Open Graph tags for social sharing, and image preloading.',
    award: null,
    link: "https://bakeyoursoul.vercel.app/",
  },
];

export default projects;
