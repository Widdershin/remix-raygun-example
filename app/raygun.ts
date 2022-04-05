import * as Raygun from "raygun";

export const raygunClient = new Raygun.Client().init({
  batch: true,
  apiKey: "raygun-api-key",
});
