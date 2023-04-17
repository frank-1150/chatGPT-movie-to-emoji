import { NextResponse, NextRequest } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userInput = searchParams.get("userInput");
  if (!userInput) {
    return NextResponse.json({ error: "No user input" });
  }
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Convert movie titles into emoji.\n\nBack to the Future: 👨👴🚗🕒 \nBatman: 🤵🦇 \nTransformers: 🚗🤖 \n${userInput}: `,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["\n"],
    });
    console.log("api response", response);
    if (response.data.choices && response.data.choices.length > 0) {
      return NextResponse.json({ response: response.data.choices[0].text });
    } else {
      return NextResponse.json({ response: "sorry, I don't understand" });
    }
  } catch (error) {
    return NextResponse.json({ error });
  }
}
