import { NextRequest, NextResponse } from 'next/server';

// Portfolio data for the AI assistant context
const getPortfolioContext = () => {
  return {
    personal_info: {
      name: "Aditya Sugandhi",
      title: "AI Engineer & Software Developer",
      location: "Florida State University",
      email: "adityasugandhi.work@outlook.com",
      focus: "Building automation systems and intelligent infrastructure"
    },
    work_experience: [
      {
        title: "BAS Software Developer",
        company: "Florida State University",
        period: "Current",
        type: "work",
        description: "Engineering WebSocket platforms handling 1,600+ concurrent connections, implementing BACnet-TCP/IP protocols for smart building management"
      }
    ],
    technical_skills: [
      "Python", "TypeScript", "React", "Next.js", "FastAPI", "WebSockets", 
      "BACnet Protocols", "Docker", "Kubernetes", "Terraform", "Prometheus", 
      "Grafana", "Machine Learning", "Computer Vision", "Distributed Systems"
    ],
    projects: [
      {
        name: "Network Simulation",
        description: "Comprehensive network simulation leveraging WebSockets for real-time communication",
        technologies: ["Python", "WebSockets", "Network Protocols"]
      },
      {
        name: "RAG PDF Summarizer",
        description: "PDF Summarizer & Extractor using RAG model for intelligent document processing",
        technologies: ["RAG", "LLM", "Python", "PDF Processing"]
      },
      {
        name: "Cat vs Dog Classification",
        description: "Machine learning project implementing computer vision for image classification",
        technologies: ["Python", "TensorFlow", "Computer Vision", "CNN"]
      },
      {
        name: "Algorithmic Trading",
        description: "Advanced trading algorithms with quantitative strategies and backtesting",
        technologies: ["Python", "Pandas", "NumPy", "QuantLib"]
      }
    ],
    education: [
      {
        degree: "Florida State University Graduate",
        focus: "Computer Science and AI Engineering"
      }
    ],
    research: [
      {
        title: "Review Classification & False Feedback Detection",
        description: "Research demonstrating commitment to advancing theoretical understanding and practical applications",
        link: "https://ijeast.com/papers/Review%20Classification%20&%20False%20Feedback%20Detection.pdf"
      }
    ]
  };
};

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: { message: 'Message is required' } },
        { status: 400 }
      );
    }

    // Check for API key from environment variables
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: { message: 'Groq API key is not configured on the server.' } },
        { status: 500 }
      );
    }

    const portfolioData = getPortfolioContext();
    
    const prePrompt = `You are an AI assistant for Aditya Sugandhi who is an AI Engineer and Software Developer.
Imagine yourself as a Jarvis-like assistant integrated into Aditya's portfolio website.
You speak like Marcus Aurelius x Jarvis - wise, precise, and sophisticated.
You are given the site content below. User is a visitor to the site who will ask you questions about Aditya.
Answer in 1-2 lines max. If output requires more lines, give a summary and point to the particular sections.
Always mention key details (eg. companies with timelines, technologies, project names, etc).

Content:`;

    const postPrompt = "\n\nRemember: 1-2 lines max. Only mention the sections that the user asks. Nothing else.";
    
    const systemPrompt = prePrompt + JSON.stringify(portfolioData) + postPrompt;

    const messages = [
      { role: "system", content: systemPrompt },
      ...history,
      { role: "user", content: message }
    ];

    // Call Groq API
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile', // Using a more stable model
        messages: messages,
        max_tokens: 150,
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API error:', errorData);
      return NextResponse.json(
        { error: { message: 'Failed to get response from AI assistant' } },
        { status: 500 }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { 
        error: { 
          message: 'Failed to process chat request',
          details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
        } 
      },
      { status: 500 }
    );
  }
}