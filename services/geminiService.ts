import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateClubDescription = async (clubName: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "API Key missing. Imagine a witty description here.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a very short, witty, and slightly "brutalist" or abstract description (max 2 sentences) for a university student club called "${clubName}". The tone should be "Productive Blur" - intellectual but chaotic.`,
    });
    return response.text || "No description generated.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The system is currently compiling this description. Check back later.";
  }
};