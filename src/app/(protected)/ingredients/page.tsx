"use client";

import IngredientsTable from "@/components/UI/tables/Ingredients";
import IngredientForm from "@/forms/ingredient.form";

const IngridientsPage = () => {
  return (
    <div>
      <IngredientForm />
      <IngredientsTable />
    </div>
  );
};
export default IngridientsPage;