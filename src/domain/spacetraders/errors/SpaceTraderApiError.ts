import {AxiosError} from "axios";
import {SpaceTraderErrorDto, ZSpaceTraderErrorDto} from "../common/dto/SpaceTraderDto";


export function isSpaceTraderErrorDto(value: unknown): value is SpaceTraderErrorDto {
    return ZSpaceTraderErrorDto.safeParse(value).success;
}

export function isAxiosErrorSpaceTraderErrorDto(value: AxiosError<unknown>): value is AxiosError<SpaceTraderErrorDto> {
    return ZSpaceTraderErrorDto.safeParse(value.response?.data ?? {}).success;
}

export default class SpaceTraderApiError<T = Record<string, Array<string>>> extends Error {

    protected readonly _error: SpaceTraderErrorDto;
    protected readonly _code: number;
    protected readonly _data: T | null;
    protected readonly _codeError: string;

    constructor(
        spaceTraderErrorDto: SpaceTraderErrorDto,
        codeError: `api.spacetraders.${string}.${string}` = "api.spacetraders.http.internal-server-error"
    ) {
        super(spaceTraderErrorDto.error.message);

        this._error = spaceTraderErrorDto.error.data;
        this._code = spaceTraderErrorDto.error.code ?? 500;
        this._data = (spaceTraderErrorDto.error.data as T) ?? null;
        this._codeError = codeError;
    }

    public get code() {
        return this._code;
    }

    public get data() {
        return this._data;
    }

    public get error() {
        return this._error;
    }

    public get codeError() {
        return this._codeError;
    }
}