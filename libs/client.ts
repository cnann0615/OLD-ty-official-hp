import { createClient } from "microcms-js-sdk";

if (!process.env.API_KEY) {
    throw new Error("API_KEY is not defined");
}

export const client = createClient({
    serviceDomain: "ty-official-hp",
    apiKey: process.env.API_KEY
});
