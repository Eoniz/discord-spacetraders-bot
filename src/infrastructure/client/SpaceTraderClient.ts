import axios, {AxiosError} from "axios";
import SpaceTraderApiError, {
    isAxiosErrorSpaceTraderErrorDto
} from "../../domain/spacetraders/errors/SpaceTraderApiError";

const SpaceTraderClient = axios.create({
    baseURL: process.env.SPACE_TRADER_BASE_URL
});

SpaceTraderClient.interceptors.response.use(
    undefined,
    (error: AxiosError) => {
        if (error instanceof AxiosError && isAxiosErrorSpaceTraderErrorDto(error)) {
            return Promise.reject(new SpaceTraderApiError(error.response!.data));
        }

        return Promise.reject(
            new SpaceTraderApiError({
                error: {
                    message: error.message,
                    code: error.status ?? 500,
                    data: {}
                }
            })
        );
    }
)

export default SpaceTraderClient;