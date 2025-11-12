export type TExpense = {
    id: number;
    title: string;
    category: 'misc' | 'food' | 'rent' | 'bills' | 'shopping' | 'transportation';
    value: number;
    createdAt?: Date;
}