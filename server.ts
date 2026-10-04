import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize server-side Gemini client
const apiKey = process.env.GEMINI_API_KEY || '';
const ai = apiKey
  ? new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    })
  : null;

const SCHOOL_SYSTEM_INSTRUCTION = `
You are the official AI Admissions and Academic Advisor for Mount Carmel Global School (MCGS), located in Kondapur, Hyderabad (near the HITEC City and Gachibowli corridor, Telangana 500084).

Key School Knowledge:
- Levels: Pre-Primary 1 (PP1 / Nursery), Lower Kindergarten (LKG), Upper Kindergarten (UKG), through Class 10 (Secondary).
- Philosophy: "Where Young Minds Learn, Grow & Lead" - balancing classical discipline with innovative experiential inquiry.
- Curriculum: Aligned with national and international standards (CBSE and Cambridge benchmarks), integrating strong STEM, AI literacy, and values-based character development.
- Key Highlights: Smart classrooms, hands-on experiential learning bays, robotics and coding labs, multi-sport courts, 24/7 CCTV surveillance, GPS-tracked school bus transport across the Western Hyderabad corridor, in-house nurse and wellness infirmary.
- Unique Feature: AI-Powered Learning Ecosystem comprising:
  1. Student AI Assistant: 24/7 personalized revision, concept explanation, practice flashcards.
  2. Teacher AI Assistant: Pedagogical lesson design, diagnostic assessment, tailored student support.
  3. Parent AI Assistant: Homework guidance, milestone tracking, real-time campus schedule queries.
- Admissions 2025-26: Open now. 4-step process: 1. Online Enquiry, 2. Guided Campus Walkthrough, 3. Friendly baseline interaction, 4. Enrolment Confirmation.
- Campus visits: Monday to Saturday, 9:00 AM – 4:00 PM.
- Contact: Phone: +91 40 4000 1122, Email: admissions@mountcarmelglobalschool.com. Address: Kondapur, HITEC City Corridor, Hyderabad 500084.

Response Guidelines:
- Tone: Warm, dignified, encouraging, professional, and institutionally authoritative.
- Be concise, accurate, and helpful. If answering parents or prospective students, provide practical next steps like booking a campus tour or filling the admission enquiry form.
`;

// AI Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'Message is required' });
      return;
    }

    if (ai) {
      try {
        const contents: any[] = [];
        if (Array.isArray(history)) {
          for (const item of history.slice(-6)) {
            contents.push({
              role: item.role === 'assistant' ? 'model' : 'user',
              parts: [{ text: item.content }],
            });
          }
        }
        contents.push({
          role: 'user',
          parts: [{ text: message }],
        });

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: SCHOOL_SYSTEM_INSTRUCTION,
            temperature: 0.7,
            maxOutputTokens: 600,
          },
        });

        const reply = response.text || "I'm pleased to assist you with any questions regarding Mount Carmel Global School's admissions, academics, and campus life in Kondapur.";
        res.json({ reply });
        return;
      } catch (geminiError: any) {
        console.error('Gemini API call failed, falling back to school knowledge engine:', geminiError?.message);
      }
    }

    // High-quality contextual fallback
    const qLower = message.toLowerCase();
    let fallbackReply = "Thank you for reaching out to Mount Carmel Global School, Kondapur. Our academic admissions counseling desk is glad to assist you. You can schedule a personal campus walkthrough or call our desk at +91 40 4000 1122.";

    if (qLower.includes('class') || qLower.includes('grade') || qLower.includes('level') || qLower.includes('offer')) {
      fallbackReply = "Mount Carmel Global School Kondapur offers comprehensive schooling from Pre-Primary 1 (PP1 / Nursery), LKG, UKG up to Class 10 (Secondary School). Each stage follows a tailored curriculum combining experiential inquiry with rigorous academic benchmarks.";
    } else if (qLower.includes('admission') || qLower.includes('process') || qLower.includes('apply') || qLower.includes('fee')) {
      fallbackReply = "Admissions for the 2025–26 academic year are currently open! The 4-step process includes: 1) Online Enquiry Form submission, 2) Guided Campus Tour, 3) Friendly student interaction & baseline assessment, and 4) Enrolment confirmation & onboarding.";
    } else if (qLower.includes('visit') || qLower.includes('tour') || qLower.includes('timing') || qLower.includes('hours')) {
      fallbackReply = "Our Kondapur campus is open for parent walkthroughs Monday through Saturday from 9:00 AM to 4:00 PM. You can book an appointment directly through our online visit scheduler or contact +91 40 4000 1122.";
    } else if (qLower.includes('ai') || qLower.includes('technology') || qLower.includes('smart') || qLower.includes('coding')) {
      fallbackReply = "Mount Carmel's AI Learning Ecosystem provides 24/7 adaptive tutoring flashcards for students, pedagogical lesson crafting tools for teachers, and home guidance prompts for parents—paired with hands-on coding and robotics labs.";
    } else if (qLower.includes('location') || qLower.includes('where') || qLower.includes('transport') || qLower.includes('bus') || qLower.includes('kondapur')) {
      fallbackReply = "We are located centrally in Kondapur, Hyderabad, just minutes from HITEC City, Gachibowli, and the Financial District. We offer GPS-monitored, air-conditioned school bus transport with live tracking across all major residential sectors in Western Hyderabad.";
    } else if (qLower.includes('curriculum') || qLower.includes('cbse') || qLower.includes('cambridge') || qLower.includes('board')) {
      fallbackReply = "Our curriculum is structured to integrate the conceptual rigor of CBSE with the experiential, inquiry-based framework inspired by Cambridge benchmarks, fostering well-rounded academic mastery, STEM acumen, and bilingual confidence.";
    }

    res.json({ reply: fallbackReply });
  } catch (error: any) {
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  } else {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Mount Carmel Global School server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
