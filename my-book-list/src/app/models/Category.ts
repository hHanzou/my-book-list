import { BookCategory } from "./BookCategory";

export interface Category {
    categoryId: number;
    categoryName: string;
    BookCategories: BookCategory[] | null;
}