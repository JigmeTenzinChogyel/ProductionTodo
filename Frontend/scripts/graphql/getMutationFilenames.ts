import "./enableImportGraphql";

import consola from "consola";
import fg from "fast-glob";
import * as path from "path";

type Result = {
  paths: string[];
};
export const getMutationFilenames = async (): Promise<Result> => {
  let paths = await fg(["../../src/graphql/mutations/**/*"], {
    ignore: ["**/*/fragments"],
    absolute: true,
  });

  if (!paths) {
    consola.error("GraphQL file not found");
    return { paths: [] };
  }

  paths = paths
    .filter((f) => isGraphqlFile(f))
    .filter((f) => f !== "__schema__.graphql");

  return {
    paths,
  };
};

const isGraphqlFile = (file: string) => {
  return [".gql", ".graphql"].includes(path.extname(file));
};
