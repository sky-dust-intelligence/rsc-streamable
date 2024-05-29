"use server";
import { createAI, createStreamableUI, createStreamableValue } from "ai/rsc";

import { streamObject } from "ai";

import { openai } from "@ai-sdk/openai";
import DisplayRecipe from "@/app/display-recipe";
import { PartialLasagna, recipeSchema } from "@/app/types";
import { ReactNode } from "react";
import { recipeAgent } from "@/app/receipe-agent";

export async function generateRecipe() {
  const recipeUI = createStreamableUI();

  async function process() {
    const objectStream = createStreamableValue<PartialLasagna>();
    recipeUI.update(<DisplayRecipe recipe={objectStream.value} />);
    await recipeAgent()
      .then(async (partialObjectStream) => {
        for await (const partialObject of partialObjectStream.partialObjectStream) {
          if (partialObject.recipe) {
            objectStream.update(partialObject);
          }
        }
      })
      .finally(() => {
        recipeUI.done();
        objectStream.done();
      });
  }
  process();

  return {
    display: recipeUI.value,
  };
}

export type UIState = Array<{
  display: ReactNode;
}>;

export const AI = createAI({
  initialUIState: [] as UIState,
  actions: {
    generateRecipe,
  },
});
