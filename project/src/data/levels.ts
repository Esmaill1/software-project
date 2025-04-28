import { Level } from '../types';

export const levels: Level[] = [
  {
    id: 1,
    name: "Level 1",
    description: "Foundational courses for first-year students",
    modules: [
      {
        id: "intro-programming",
        name: "Introduction to Programming",
        description: "Learn the basics of programming logic and syntax",
        imageUrl: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "prog-basics",
            title: "Programming Fundamentals",
            description: "Introduction to variables, data types, and basic operations",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-01"
          },
          {
            id: "algorithms-intro",
            title: "Basic Algorithms",
            description: "Introduction to algorithm design and implementation",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-15"
          },
          {
            id: "python-intro",
            title: "Python Basics",
            description: "Getting started with Python programming",
            type: "video",
            url: "#",
            dateAdded: "2023-10-01"
          }
        ]
      },
      {
        id: "calculus-1",
        name: "Calculus 1",
        description: "Introduction to differential and integral calculus",
        imageUrl: "https://images.pexels.com/photos/6238033/pexels-photo-6238033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "limits",
            title: "Limits and Continuity",
            description: "Understanding the concept of limits in calculus",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-05"
          },
          {
            id: "derivatives",
            title: "Derivatives",
            description: "Introduction to differentiation and its applications",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-20"
          },
          {
            id: "integrals",
            title: "Integration",
            description: "Basics of integral calculus and techniques",
            type: "doc",
            url: "#",
            dateAdded: "2023-10-10"
          }
        ]
      },
      {
        id: "physics-fundamentals",
        name: "Fundamentals of Physics",
        description: "Basic principles of mechanics, waves, and thermodynamics",
        imageUrl: "https://images.pexels.com/photos/60582/newton-s-cradle-balls-sphere-metal-60582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "mechanics",
            title: "Classical Mechanics",
            description: "Newton's laws and applications",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-10"
          },
          {
            id: "waves",
            title: "Wave Theory",
            description: "Understanding wave behaviors and properties",
            type: "video",
            url: "#",
            dateAdded: "2023-09-25"
          }
        ]
      },
      {
        id: "cs-basics",
        name: "Basics of Computer Science",
        description: "Introduction to computer architecture and digital logic",
        imageUrl: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "computer-architecture",
            title: "Computer Architecture Basics",
            description: "Understanding computer organization and architecture",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-15"
          },
          {
            id: "digital-logic",
            title: "Digital Logic Design",
            description: "Boolean algebra and logic gates",
            type: "ppt",
            url: "#",
            dateAdded: "2023-10-05"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "Level 2",
    description: "Intermediate courses for second-year students",
    modules: [
      {
        id: "database-systems",
        name: "Database Systems",
        description: "Relational databases, SQL, and database design principles",
        imageUrl: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "sql-basics",
            title: "SQL Fundamentals",
            description: "Introduction to SQL queries and database manipulation",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-05"
          },
          {
            id: "er-diagram",
            title: "Entity-Relationship Diagrams",
            description: "Creating and interpreting ER diagrams",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-20"
          },
          {
            id: "normalization",
            title: "Database Normalization",
            description: "Understanding normal forms and their applications",
            type: "video",
            url: "#",
            dateAdded: "2023-10-10"
          }
        ]
      },
      {
        id: "math",
        name: "Math",
        description: "Linear algebra, discrete mathematics, and statistics",
        imageUrl: "https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "linear-algebra",
            title: "Linear Algebra Essentials",
            description: "Vectors, matrices, and linear transformations",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-10"
          },
          {
            id: "discrete-math",
            title: "Discrete Mathematics",
            description: "Sets, logic, and combinatorics",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-25"
          },
          {
            id: "probability",
            title: "Probability and Statistics",
            description: "Basic statistical concepts and probability theory",
            type: "doc",
            url: "#",
            dateAdded: "2023-10-15"
          }
        ]
      },
      {
        id: "machine-learning",
        name: "Machine Learning",
        description: "Introduction to machine learning algorithms and applications",
        imageUrl: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "ml-intro",
            title: "Introduction to Machine Learning",
            description: "Overview of machine learning concepts",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-15"
          },
          {
            id: "supervised-learning",
            title: "Supervised Learning",
            description: "Classification and regression algorithms",
            type: "video",
            url: "#",
            dateAdded: "2023-10-05"
          },
          {
            id: "unsupervised-learning",
            title: "Unsupervised Learning",
            description: "Clustering and dimensionality reduction",
            type: "pdf",
            url: "#",
            dateAdded: "2023-10-25"
          }
        ]
      },
      {
        id: "software-engineering",
        name: "Software Engineering",
        description: "Software development processes and project management",
        imageUrl: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "sdlc",
            title: "Software Development Life Cycle",
            description: "Understanding the phases of software development",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-20"
          },
          {
            id: "agile",
            title: "Agile Methodologies",
            description: "Introduction to Scrum, Kanban, and other agile frameworks",
            type: "ppt",
            url: "#",
            dateAdded: "2023-10-10"
          },
          {
            id: "testing",
            title: "Software Testing",
            description: "Testing strategies and methodologies",
            type: "doc",
            url: "#",
            dateAdded: "2023-11-01"
          }
        ]
      },
      {
        id: "algorithms",
        name: "Algorithms",
        description: "Algorithm design, analysis, and optimization",
        imageUrl: "https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "complexity-analysis",
            title: "Algorithm Complexity Analysis",
            description: "Big O notation and algorithm efficiency",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-25"
          },
          {
            id: "sorting",
            title: "Sorting Algorithms",
            description: "Comparison of different sorting techniques",
            type: "pdf",
            url: "#",
            dateAdded: "2023-10-15"
          },
          {
            id: "graph-algorithms",
            title: "Graph Algorithms",
            description: "BFS, DFS, shortest path algorithms",
            type: "video",
            url: "#",
            dateAdded: "2023-11-05"
          }
        ]
      },
      {
        id: "computer-architecture",
        name: "Computer Architecture",
        description: "Advanced computer organization and system design",
        imageUrl: "https://images.pexels.com/photos/3862131/pexels-photo-3862131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "processor-design",
            title: "Processor Design",
            description: "CPU architecture and instruction set design",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-30"
          },
          {
            id: "memory-systems",
            title: "Memory Systems",
            description: "Cache hierarchy and memory management",
            type: "pdf",
            url: "#",
            dateAdded: "2023-10-20"
          },
          {
            id: "parallel-processing",
            title: "Parallel Processing",
            description: "Introduction to parallel computing architectures",
            type: "doc",
            url: "#",
            dateAdded: "2023-11-10"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    name: "Level 3",
    description: "Advanced courses for third-year students",
    modules: [
      {
        id: "operating-systems",
        name: "Operating Systems",
        description: "OS design, processes, threading, and memory management",
        imageUrl: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "process-management",
            title: "Process Management",
            description: "Understanding processes, scheduling, and synchronization",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-05"
          },
          {
            id: "memory-management",
            title: "Memory Management",
            description: "Virtual memory, paging, and memory allocation techniques",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-20"
          },
          {
            id: "file-systems",
            title: "File Systems",
            description: "File organization, allocation methods, and management",
            type: "video",
            url: "#",
            dateAdded: "2023-10-10"
          }
        ]
      },
      {
        id: "data-science-basics",
        name: "Data Science Basics",
        description: "Data collection, cleaning, visualization, and analysis",
        imageUrl: "https://images.pexels.com/photos/7108/notebook-numbers-calculation-mathematics-7108.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "data-cleaning",
            title: "Data Cleaning Techniques",
            description: "Methods for preprocessing and cleaning datasets",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-10"
          },
          {
            id: "data-visualization",
            title: "Data Visualization",
            description: "Creating effective visualizations with Python tools",
            type: "ppt",
            url: "#",
            dateAdded: "2023-09-25"
          },
          {
            id: "exploratory-analysis",
            title: "Exploratory Data Analysis",
            description: "Techniques for exploring and understanding datasets",
            type: "doc",
            url: "#",
            dateAdded: "2023-10-15"
          }
        ]
      },
      {
        id: "artificial-intelligence",
        name: "Artificial Intelligence",
        description: "AI concepts, search algorithms, knowledge representation",
        imageUrl: "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "search-algorithms",
            title: "Search Algorithms in AI",
            description: "Informed and uninformed search strategies",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-15"
          },
          {
            id: "knowledge-representation",
            title: "Knowledge Representation",
            description: "Methods for representing knowledge in AI systems",
            type: "pdf",
            url: "#",
            dateAdded: "2023-10-05"
          },
          {
            id: "decision-making",
            title: "Decision Making under Uncertainty",
            description: "Probabilistic reasoning and decision theory",
            type: "video",
            url: "#",
            dateAdded: "2023-10-25"
          }
        ]
      },
      {
        id: "computer-networks",
        name: "Computer Networks",
        description: "Network architecture, protocols, and security",
        imageUrl: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "network-layers",
            title: "Network Layer Architecture",
            description: "Understanding OSI and TCP/IP models",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-20"
          },
          {
            id: "routing-protocols",
            title: "Routing Protocols",
            description: "Dynamic routing algorithms and protocols",
            type: "doc",
            url: "#",
            dateAdded: "2023-10-10"
          },
          {
            id: "network-security",
            title: "Network Security Fundamentals",
            description: "Security threats and protection mechanisms",
            type: "pdf",
            url: "#",
            dateAdded: "2023-11-01"
          }
        ]
      },
      {
        id: "linear-algebra",
        name: "Linear Algebra",
        description: "Vector spaces, linear transformations, and applications",
        imageUrl: "https://images.pexels.com/photos/6238118/pexels-photo-6238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "vector-spaces",
            title: "Vector Spaces",
            description: "Properties and operations in vector spaces",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-25"
          },
          {
            id: "eigenvalues",
            title: "Eigenvalues and Eigenvectors",
            description: "Computing and applying eigenvalues and eigenvectors",
            type: "pdf",
            url: "#",
            dateAdded: "2023-10-15"
          },
          {
            id: "linear-transformations",
            title: "Linear Transformations",
            description: "Understanding and visualizing linear transformations",
            type: "video",
            url: "#",
            dateAdded: "2023-11-05"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    name: "Level 4",
    description: "Specialized courses for fourth-year students",
    modules: [
      {
        id: "advanced-machine-learning",
        name: "Advanced Machine Learning",
        description: "Deep learning, reinforcement learning, and neural networks",
        imageUrl: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "neural-networks",
            title: "Neural Network Architectures",
            description: "Advanced neural network designs and applications",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-05"
          },
          {
            id: "reinforcement-learning",
            title: "Reinforcement Learning",
            description: "RL algorithms and their implementation",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-20"
          },
          {
            id: "gans",
            title: "Generative Adversarial Networks",
            description: "Understanding GANs and their applications",
            type: "video",
            url: "#",
            dateAdded: "2023-10-10"
          }
        ]
      },
      {
        id: "deep-learning",
        name: "Deep Learning",
        description: "Advanced neural networks, CNNs, RNNs, and applications",
        imageUrl: "https://images.pexels.com/photos/8386421/pexels-photo-8386421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "cnns",
            title: "Convolutional Neural Networks",
            description: "Architecture and applications of CNNs",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-10"
          },
          {
            id: "rnns",
            title: "Recurrent Neural Networks",
            description: "RNNs, LSTMs, and sequence modeling",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-25"
          },
          {
            id: "transfer-learning",
            title: "Transfer Learning",
            description: "Leveraging pre-trained models for new tasks",
            type: "doc",
            url: "#",
            dateAdded: "2023-10-15"
          }
        ]
      },
      {
        id: "cloud-computing",
        name: "Cloud Computing",
        description: "Cloud architectures, services, and deployment models",
        imageUrl: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "cloud-services",
            title: "Cloud Service Models",
            description: "Understanding IaaS, PaaS, and SaaS",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-15"
          },
          {
            id: "containerization",
            title: "Containerization with Docker",
            description: "Docker fundamentals and container orchestration",
            type: "pdf",
            url: "#",
            dateAdded: "2023-10-05"
          },
          {
            id: "serverless",
            title: "Serverless Computing",
            description: "Serverless architecture and FaaS",
            type: "video",
            url: "#",
            dateAdded: "2023-10-25"
          }
        ]
      },
      {
        id: "software-project-management",
        name: "Software Project Management",
        description: "Project planning, estimation, risk management, and leadership",
        imageUrl: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "project-planning",
            title: "Project Planning and Estimation",
            description: "Techniques for planning and estimating software projects",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-20"
          },
          {
            id: "risk-management",
            title: "Risk Management",
            description: "Identifying and mitigating project risks",
            type: "ppt",
            url: "#",
            dateAdded: "2023-10-10"
          },
          {
            id: "team-leadership",
            title: "Team Leadership",
            description: "Leading software development teams effectively",
            type: "doc",
            url: "#",
            dateAdded: "2023-11-01"
          }
        ]
      },
      {
        id: "cybersecurity",
        name: "Cybersecurity",
        description: "Security principles, cryptography, and network defense",
        imageUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        materials: [
          {
            id: "cryptography",
            title: "Applied Cryptography",
            description: "Encryption algorithms and secure communication",
            type: "pdf",
            url: "#",
            dateAdded: "2023-09-25"
          },
          {
            id: "network-defense",
            title: "Network Defense Mechanisms",
            description: "Firewalls, IDS, and network security monitoring",
            type: "pdf",
            url: "#",
            dateAdded: "2023-10-15"
          },
          {
            id: "ethical-hacking",
            title: "Ethical Hacking",
            description: "Penetration testing and vulnerability assessment",
            type: "video",
            url: "#",
            dateAdded: "2023-11-05"
          }
        ]
      }
    ]
  }
];