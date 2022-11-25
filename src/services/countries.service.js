import {axiosService} from "./axios.service";
import {urls} from "../configs";

const countriesService = {
    getAllCountries: () => axiosService.get(`${urls.allCountries}`),
    getAllHolidays: (cityCode) => axiosService.get(`${urls.allHolidays}/${cityCode}`)
};

export {
    countriesService
};