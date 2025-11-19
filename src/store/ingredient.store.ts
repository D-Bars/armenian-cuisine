import { createIngredient, deleteIngredient, getIngredient } from "@/actions/ingredient";
import { IIngredient } from "@/types/ingredient";
import { create } from "zustand";

interface IngredientState {
    ingredients: IIngredient[];
    isLoading: boolean;
    error: string | null;

    loadIngredients: () => Promise<void>;
    addIngredient: (formData: FormData) => Promise<void>;
    removeIngredient: (id: string) => Promise<void>;
}

export const useIngredientStore = create<IngredientState>((set, get) => ({
    ingredients: [],
    isLoading: false,
    error: null,

    loadIngredients: async () => {
        set({ isLoading: true, error: null });
        try {
            const result = await getIngredient();

            if (result.success) {
                set({ ingredients: result.ingredients, isLoading: false });
            } else {
                set({ error: result.error || "Failed to load ingredients", isLoading: false });
            }
        } catch (error) {
            set({ error: "An unexpected error occurred", isLoading: false });
        }
    },

    addIngredient: async (formData: FormData) => {
        set({ isLoading: true, error: null });
        try {
            const result = await createIngredient(formData);
            if (result.success) {
                set((state) => ({
                    ingredients: [...state.ingredients, result.ingridient],
                    isLoading: false
                }));
            } else {
                set({ error: result.error || "Failed to add ingredient", isLoading: false });
            }
        } catch (error) {
            set({ error: "An unexpected error occurred", isLoading: false });
        }
    },

    removeIngredient: async (id: string) => {
        set({ isLoading: true, error: null });
        try {
            const result = await deleteIngredient(id);
            if (result.success) {
                set((state) => ({
                    ingredients: state.ingredients.filter(ing => ing.id !== id),
                    isLoading: false
                }));
            } else {
                set({ error: result.error || "Failed to delete ingredient", isLoading: false });
            }
        } catch (error) {
            set({ error: "An unexpected error occurred", isLoading: false });
        }
    },

}));