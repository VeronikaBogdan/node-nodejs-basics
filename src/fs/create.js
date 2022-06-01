import { writeFile, access, constants } from "fs";
import path from "path";

export const create = async () => {
  const __dirname = path.resolve(path.dirname(""));
  access(path.join(__dirname, "files", "fresh.txt"), constants.F_OK, (err) => {
    try {
      if (err)
        writeFile(
          path.join(__dirname, "files", "fresh.txt"),
          "I am fresh and young",
          (err) => {
            console.log("File was created");
          }
        );
      if (!err) throw new Error("FS operation failed");
    } catch (error) {
      console.log(error);
    }
  });
};

await create();
