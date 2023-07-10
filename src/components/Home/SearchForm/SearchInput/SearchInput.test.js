import React from "react";
import { shallow } from "enzyme";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper).toMatchSnapshot();
  });
});
