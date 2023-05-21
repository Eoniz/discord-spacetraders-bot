import {z} from "zod";


export interface SpaceTraderDto<T> {
    data: T;
}

export const ZSpaceTraderErrorDto = z.object({
    error: z.object({
        message: z.string(),
        code: z.number(),
        data: z.any()
    })
});

export type SpaceTraderErrorDto = z.infer<typeof ZSpaceTraderErrorDto>;
