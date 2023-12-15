import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { removeAllListeners } from "../../../../mocks/server";
import { Provider } from "../../../../testUtils";
import {
  closeServer,
  resetHandlers,
  resetServer,
  startServer,
} from "../../../../testUtils/mock/setup";
import SignInCard from "../SignInCard";

// Mock useRouter
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
  push: jest.fn(),
  prefetch: jest.fn(),
  // Add other methods as needed
}));

describe("SignInCard", () => {
  beforeAll(() => {
    startServer();
  });

  afterAll(() => {
    closeServer();
    resetServer();
  });

  afterEach(() => {
    resetHandlers();
  });

  beforeEach(async () => {
    removeAllListeners();
  });

  it("should display required error when values are invalid", async () => {
    const { getByTestId, getByText } = render(
      <Provider>
        <SignInCard />
      </Provider>
    );

    act(() => {
      fireEvent.focus(getByTestId("email"));
      fireEvent.blur(getByTestId("email"));

      fireEvent.focus(getByTestId("password"));
      fireEvent.blur(getByTestId("password"));

      fireEvent.submit(getByTestId("form"));
    });

    await waitFor(() => {
      expect(getByText("Email is required")).toBeInTheDocument();
      expect(getByText("Password is required")).toBeInTheDocument();
    });
  });

  it("should display matching error when email is invalid", async () => {
    const { getByTestId, getByText } = render(
      <Provider>
        <SignInCard />
      </Provider>
    );

    act(() => {
      fireEvent.input(getByTestId("email"), { target: { value: "test" } });
      fireEvent.blur(getByTestId("email"));
      fireEvent.submit(getByTestId("form"));
    });

    await waitFor(() => {
      expect(getByText("Invalid email")).toBeInTheDocument();
    });
  });

  it("should not display error when values are valid", async () => {
    const { getByTestId, queryByText } = render(
      <Provider>
        <SignInCard />
      </Provider>
    );

    act(() => {
      fireEvent.input(getByTestId("email"), {
        target: { value: "test@test.com" },
      });
      fireEvent.input(getByTestId("password"), {
        target: { value: "password" },
      });

      fireEvent.submit(getByTestId("form"));
    });

    await waitFor(() => {
      expect(queryByText("Email is required")).toBeNull();
      expect(queryByText("Password is required")).toBeNull();
      expect(queryByText("Invalid email")).toBeNull();
    });
  });
});
