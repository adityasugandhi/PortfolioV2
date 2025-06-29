import chatllama from "public/images/chatllama.png";
import networksImg from "public/images/MaximaCliqueinUncertainNetworks.jpeg";
import glacierTaxImg from "public/images/GlacierTaxHelper.avif";
import catDogImg from "public/images/catvsdog.jpg";
import algoTradingImg from "public/images/algorthmictrading.avif";
import gulfofmexicoImg from "public/images/gulfofmexico.png";
import llmImg from "public/images/llm.png";
import ragImg from "public/images/rag.png";

export const products = [
  {
    href: "https://github.com/adityasugandhi/Network-Simulation",
    title: "Network Simulation",
    description:
      "A comprehensive network simulation leveraging WebSockets for real-time communication, HashMap for caches, & ARP for resolving network addresses.",
    thumbnail: networksImg,
    images: [networksImg],
    stack: ["Python", "WebSockets", "Network Protocols", "System Programming"],
    slug: "network-simulation",
    content: (
      <div>
        <p>
          Developed a comprehensive network simulation that demonstrates advanced networking concepts 
          including real-time communication, caching mechanisms, and address resolution protocols.
        </p>
        <p>
          The simulation includes bridges for network segmentation, routers for directing data packets, 
          and switching mechanisms to ensure seamless transfer of data frames across the network. 
          This project showcases deep understanding of network architecture and protocol implementation.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/adityasugandhi/Glacier_Tax_Helper",
    title: "Glacier Tax Helper",
    description:
      "A comprehensive tax assistance tool designed to help users navigate complex tax calculations and filing requirements with intuitive interface and automated processing.",
    thumbnail: glacierTaxImg,
    images: [glacierTaxImg],
    stack: ["Python", "Django", "Tax Processing", "Web Development"],
    slug: "glacier-tax-helper",
    content: (
      <div>
        <p>
          Glacier Tax Helper is a sophisticated tax assistance application that streamlines the complex 
          process of tax calculation and filing. The tool provides users with an intuitive interface 
          to input their financial data and automatically generates accurate tax calculations.
        </p>
        <p>
          Built with Python and Django, the application features automated processing capabilities, 
          error validation, and comprehensive reporting to ensure compliance with tax regulations 
          while minimizing user effort and potential mistakes.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/adityasugandhi/Cat-vs-dog-classification",
    title: "Cat vs Dog Classification",
    description:
      "A machine learning project implementing computer vision techniques to classify images of cats and dogs using deep learning models with high accuracy.",
    thumbnail: catDogImg,
    images: [catDogImg],
    stack: ["Python", "TensorFlow", "Computer Vision", "CNN"],
    slug: "cat-dog-classification",
    content: (
      <div>
        <p>
          This computer vision project implements advanced deep learning techniques to classify images 
          of cats and dogs with high accuracy. Using convolutional neural networks (CNNs), the model 
          learns to distinguish between different features and patterns in animal images.
        </p>
        <p>
          The project demonstrates expertise in image preprocessing, model architecture design, 
          and optimization techniques. It serves as a foundational example of binary classification 
          in computer vision with practical applications in automated image tagging and content moderation.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/adityasugandhi/LLM_Playground",
    title: "RAG PDF Summarizer & Extractor",
    description:
      "Developed a PDF Summarizer & Extractor using RAG (Retrieval Augmented Generation) model. The model extracts the most relevant information from PDFs and generates summaries.",
    thumbnail: ragImg,
    images: [ragImg],
    stack: ["RAG", "LLM", "Python", "PDF Processing"],
    slug: "rag-pdf-summarizer",
    content: (
      <div>
        <p>
          This project combines the power of Retrieval Augmented Generation (RAG) with PDF processing 
          to create an intelligent document summarization system. The model can extract the most 
          relevant information from complex PDF documents and generate concise, accurate summaries.
        </p>
        <p>
          The system leverages modern NLP techniques to understand document structure and content, 
          making it valuable for processing large volumes of academic papers, reports, and other 
          text-heavy documents efficiently.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/adityasugandhi/Improved-Algorithms-in-finding-maximal-and-maximum-clique-in-uncertain-networks",
    title: "Maximal Clique in Uncertain Networks",
    description:
      "Research project implementing improved algorithms for finding maximal & maximum cliques in uncertain networks, with datasets from LinkedIn, Facebook, and Ask Ubuntu.",
    thumbnail: gulfofmexicoImg,
    images: [gulfofmexicoImg],
    stack: ["Python", "Graph Algorithms", "Data Science", "Research"],
    slug: "maximal-clique-research",
    content: (
      <div>
        <p>
          This research project focuses on implementing and improving algorithms for finding maximal 
          and maximum cliques in uncertain networks, particularly in the context of social network analysis.
          The work contributes to advancing graph theory applications in real-world scenarios.
        </p>
        <p>
          The research utilized datasets from major social platforms including LinkedIn, Facebook, 
          and Ask Ubuntu to validate algorithm performance. The improved algorithms provide better 
          efficiency and accuracy in community detection and network structure analysis.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/adityasugandhi/JobApplicationTracker",
    title: "Job Application Tracker",
    description:
      "A comprehensive application tracking system to manage job applications, interview schedules, and career progression with intuitive dashboard and analytics.",
    thumbnail: llmImg,
    images: [llmImg],
    stack: ["React", "Node.js", "MongoDB", "Express"],
    slug: "job-tracker",
    content: (
      <div>
        <p>
          The Job Application Tracker is a full-stack web application designed to help job seekers 
          organize and track their application process efficiently. It provides a centralized platform 
          to manage applications, deadlines, and interview schedules.
        </p>
        <p>
          Built with modern web technologies, the application features real-time updates, data visualization 
          for application progress, and automated reminders. It helps users stay organized during their 
          job search journey and provides insights into application patterns and success rates.
        </p>
      </div>
    ),
  },
  {
    href: "https://github.com/adityasugandhi/Algorithmic-Trading",
    title: "Algorithmic Trading",
    description:
      "Advanced trading algorithms implementing quantitative strategies, backtesting frameworks, and real-time market analysis for automated trading decisions.",
    thumbnail: algoTradingImg,
    images: [algoTradingImg],
    stack: ["Python", "Pandas", "NumPy", "QuantLib", "Trading APIs"],
    slug: "algorithmic-trading",
    content: (
      <div>
        <p>
          This project implements sophisticated algorithmic trading strategies using quantitative analysis 
          and machine learning techniques. It includes backtesting frameworks to validate strategy 
          performance across historical market data.
        </p>
        <p>
          The system features real-time market data integration, risk management protocols, and automated 
          execution capabilities. It demonstrates advanced financial modeling and the application of 
          data science in quantitative finance and investment strategies.
        </p>
      </div>
    ),
  },
];