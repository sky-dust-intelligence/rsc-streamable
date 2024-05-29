"use client";

import { PartialLasagna } from "@/app/types";
import { useStreamableValue } from "ai/rsc";
import React from "react";

interface DisplayRecipeProps {
  recipe: PartialLasagna;
}
export default function DisplayRecipe({ recipe }: DisplayRecipeProps) {
  const [data, pending, error] = useStreamableValue<PartialLasagna>(recipe);
  console.log(data);

  return (
    <div className="flex flex-col gap-2">
      <p>{data?.recipe?.name}</p>
      <p>{JSON.stringify(data, null, 2)}</p>
    </div>
  );
}
