describe("Render elements", () => {
  test("pomdoro (25min)", () => {
    const timer = document.querySelector(".timer");
    return equal(timer.textContent, "25:00");
  });
  //   test("short break (5min)", () => {
  //     const timer = document.querySelector(".timer");
  //     equal(timer.textContent, "25:00");
  //   });

  //   test("long break (30min)", () => {
  //     const timer = document.querySelector(".timer");
  //     equal(timer.textContent, "30:00");
  //   });
});
