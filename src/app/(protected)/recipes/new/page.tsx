"use client";

import RecipeForm from "@/forms/recipe.form";

export default function NewRecipePage() {
    return (
        <div className="w-full flex flex-col items-center mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Add New Recipe</h1>
            <RecipeForm />
        </div>
    );
}