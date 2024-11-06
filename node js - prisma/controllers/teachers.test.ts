import { getTeacher } from "./teachers";
import axios from "axios";

jest.mock("axios");

test("getting data from the teachers API", async () => {
  const data: any = {
    name: "sravanthi",
  };
  (axios.get as jest.Mock).mockResolvedValue({ data });
  // axios.get.mockResolvedValue({ data });
  const response: any = await getTeacher("sravanthi");
  console.log("response to be data ===", response)
  expect(response.data.name).toBe("sravanthi");
  // axios.get.mockResolvedValue({data})
});


