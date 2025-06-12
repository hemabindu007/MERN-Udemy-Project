import axios from "axios";

const url = "http://localhost:8081/stories"

export const fetchStories = () => axios.get(url)