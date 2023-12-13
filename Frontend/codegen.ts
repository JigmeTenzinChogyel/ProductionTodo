
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  documents: "src/**/**/*.{graphql,gql}",
  generates: {
    "src/graphql/types/index.ts": {
      //Don't use preset with plugins it will generate duplicates
      // preset: "client", 
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo"
      ],
      config: {
        withHooks: true,
      }
    }
  }
};

export default config;
