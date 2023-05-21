
export interface ContractTypeVisitor<T> {
    procurement(): T;
    transport(): T;
    shuttle(): T;
}