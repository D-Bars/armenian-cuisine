"use client";

import { CATEGORY_OPTIONS, UNIT_OPTIONS } from '@/constans/select-options';
import { useAuthStore } from '@/store/auth.store';
import { useIngredientStore } from '@/store/ingredient.store';
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';

const IngredientsTable = () => {
    const { ingredients, removeIngredient, isLoading } = useIngredientStore();
    const { isAuth } = useAuthStore();

    const handleDelete = async (id: string) => {
        if (isAuth) {
            await removeIngredient(id);
        }
    };

    const getCategoryLabel = (categoryValue: string) => {
        const categoryOption = CATEGORY_OPTIONS.find(option => option.value === categoryValue);
        return categoryOption ? categoryOption.label : categoryValue;
    }

    const getUnitLabel = (unitValue: string) => {
        const unitOption = UNIT_OPTIONS.find(option => option.value === unitValue);
        return unitOption ? unitOption.label : unitValue;
    }

    return !isLoading && isAuth ? (
        <Table
            aria-label='List of ingredients'
            classNames={{
                wrapper: 'mt-4',
                table: 'w-full',
                th: 'text-black',
                td: 'text-black'
            }}
        >
            <TableHeader>
                <TableColumn>Name</TableColumn>
                <TableColumn>Category</TableColumn>
                <TableColumn>Unit</TableColumn>
                <TableColumn>Price per unit</TableColumn>
                <TableColumn>Description</TableColumn>
                <TableColumn>Actions</TableColumn>
            </TableHeader>
            <TableBody>
                {ingredients.map((ingredient) => (
                    <TableRow key={ingredient.id}>
                        <TableCell>{ingredient.name}</TableCell>
                        <TableCell>{getCategoryLabel(ingredient.category)}</TableCell>
                        <TableCell>{getUnitLabel(ingredient.unit)}</TableCell>
                        <TableCell>
                            {ingredient.pricePerUnit !== null
                                ? `${ingredient.pricePerUnit} zł`
                                : "-"}
                        </TableCell>
                        <TableCell>{ingredient.description || "-"}</TableCell>
                        <TableCell>
                            <Button
                                color="danger"
                                size="sm"
                                onPress={() => handleDelete(ingredient.id)}
                            >
                                Delete
                            </Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    ) : (
        <p className='mt-4'>Loading...</p>
    );
};
export default IngredientsTable;