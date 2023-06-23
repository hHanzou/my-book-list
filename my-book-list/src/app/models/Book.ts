import { BookCategory } from "./BookCategory";

export interface Book {
    bookId: number;
    bookName: string;
    bookCategories: BookCategory[] | null;
}