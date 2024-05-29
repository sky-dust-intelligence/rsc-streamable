import { recipeSchema } from "@/app/types";
import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";

export function recipeAgent() {
  const result = streamObject({
    model: openai.chat("gpt-3.5-turbo"),
    schema: recipeSchema,
    prompt: "Generate a lasagna recipe.",
  });
  return result;
}
