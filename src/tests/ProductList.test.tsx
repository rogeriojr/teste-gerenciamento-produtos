// src/tests/ProductList.test.tsx
import renderer from "react-test-renderer";
import ProductList from "../components/ProductList";

describe("ProductList Component", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<ProductList />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
