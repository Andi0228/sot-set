import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("statut from props should be un the state ", () => {
    const component = create(<ProfileStatus status="Andouou" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Andouou");
  });
  test("after creation span with status should be displayed", () => {
    const component = create(<ProfileStatus status="Andouou" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.innerText).toBe("Andouou");
});