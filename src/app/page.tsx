import { AI } from "@/app/action";
import Recipe from "@/app/recipe";

export default function Page() {
  return (
    <AI>
      <div className=" w-full mx-auto py-12">
        <Recipe />
      </div>
    </AI>
  );
}
