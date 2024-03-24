import OpenAI from "openai";

export default async function Page() {
  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  });

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "Hi chatgpt!" }],
    model: "gpt-3.5-turbo",
  });

  const output = completion.choices[0].message.content;

  return (
    <div>
      <h1>Start discovering</h1>
      <p>{output}</p>
    </div>
  );
}
