import axios from "axios";

const AxiosClient = axios.create({
    baseURL: "//bmkg-scrap.herokuapp.com/api/gempa/terkini",
    headers: {
        "Content-Type": "multipart/form-data/application/x-www-form-urlencoded",
        "Access-Control-Allow-Headers": "*",
    },
    crossDomain: true,
});

export default AxiosClient;
