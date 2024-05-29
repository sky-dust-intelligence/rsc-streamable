import { DeepPartial } from "ai";
import { z } from "zod";
export const recipeSchema = z.object({
  recipe: z.object({
    name: z.string(),
    ingredients: z.array(
      z.object({
        name: z.string(),
        amount: z.string(),
      })
    ),
  }),
});

type Lasagna = z.infer<typeof recipeSchema>;
export type PartialLasagna = DeepPartial<Lasagna>;
