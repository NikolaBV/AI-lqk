import OpenAI from "openai";

export async function createDiscovery(formData: FormData) {
  const input = formData.get("message") as string;

  const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
    dangerouslyAllowBrowser: true,
  });

  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: input }],
    model: "gpt-3.5-turbo",
  });

  const output = completion.choices[0].message.content;
  const date = new Date().toISOString().split("T")[0];
  console.log(output);
}
