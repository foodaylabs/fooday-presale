import type { Expense } from './Expense';
import type { Meal } from './Meal';
import type { Rating } from './Rating';
export type ReviewCreationObject = {
    rating: Rating;
    content: string;
    meal?: Meal;
    expense?: Expense;
};
