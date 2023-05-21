import {ContractTypeVisitor} from "../visitors/ContractTypeVisitor";

export default class ContractType {

    public static readonly PROCUREMENT = new ContractType("PROCUREMENT", (visitor) => visitor.procurement());
    public static readonly TRANSPORT = new ContractType("TRANSPORT", (visitor) => visitor.transport());
    public static readonly SHUTTLE = new ContractType("SHUTTLE", (visitor) => visitor.shuttle());

    private constructor(
        private readonly _symbol: string,
        private readonly _accept: <T> (visitor: ContractTypeVisitor<T>) => T
    ) {
    }

    public accept<T>(visitor: ContractTypeVisitor<T>) {
        return this._accept(visitor);
    }

    public get symbol() {
        return this._symbol;
    }

}