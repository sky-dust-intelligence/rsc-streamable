"use client";
import { ReactElement, useState } from "react";
import { readStreamableValue } from "ai/rsc";
import { generateRecipe } from "@/app/action";

export default function Recipe() {
  const [recipe, setRecipe] = useState<{
    display: JSX.Element;
  } | null>(null);

  async function handleGenerateRecipe() {
    const recipeUI = await generateRecipe();
    setRecipe(recipeUI);
  }

  return (
    <div className="flex flex-col items-center">
      <button onClick={handleGenerateRecipe}>Generate recipe</button>

      {recipe && <div>{recipe?.display}</div>}
    </div>
  );
}
