import React from "react";
import { render, waitFor } from "@testing-library/react";
import App from "./App";

test("renders products", async () => {
  const { getByText } = render(<App />);
  await getByText("Ebro Dressing Table, Grey");
});
test("");
