import { classNames } from "./classNames";

describe("classNames", () => {
  // Базовый случай - только основной класс
  test("with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });

  // С дополнительными классами
  test("with additional class", () => {
    const expected = "someClass class1 class2";
    expect(classNames("someClass", {}, ["class1", "class2"])).toBe(expected);
  });

  // С модами (включены)
  test("with mods (true values)", () => {
    const expected = "someClass hovered scrollable";
    expect(
      classNames("someClass", { hovered: true, scrollable: true }, []),
    ).toBe(expected);
  });

  // С модами (отключены)
  test("with mods (false values)", () => {
    const expected = "someClass";
    expect(
      classNames("someClass", { hovered: false, scrollable: false }, []),
    ).toBe(expected);
  });

  // Смешанные моды (true и false)
  test("with mods (mixed true/false)", () => {
    const expected = "someClass hovered";
    expect(
      classNames("someClass", { hovered: true, scrollable: false }, []),
    ).toBe(expected);
  });

  // Комбинация всего
  test("with all params (main, mods, additional)", () => {
    const expected = "someClass add1 add2 hovered scrollable";
    expect(
      classNames(
        "someClass",
        { hovered: true, scrollable: true, fixed: false },
        ["add1", "add2"],
      ),
    ).toBe(expected);
  });

  // Моды с пустыми/undefined значениями
  test("with mods (undefined values)", () => {
    const expected = "someClass";
    expect(
      classNames("someClass", { hovered: undefined, scrollable: null }, []),
    ).toBe(expected);
  });

  // Дополнительные классы с falsy значениями (null, undefined)
  test("with falsy additional classes", () => {
    const expected = "someClass class1";
    expect(
      classNames("someClass", {}, ["class1", null, undefined]),
    ).toBe(expected);
  });

  // Моды со строковыми значениями (интерпретируются как true)
  test("with mods (string values)", () => {
    const expected = "someClass hovered scrollable";
    expect(
      classNames("someClass", { hovered: "true", scrollable: "yes" }, []),
    ).toBe(expected);
  });

  // Пустые параметры
  test("with empty params", () => {
    expect(classNames("")).toBe("");
    expect(classNames("someClass", {}, [])).toBe("someClass");
  });

  // Проверка на дубликаты (функция не удаляет дубликаты - это особенность)
  test("should not remove duplicates (current behavior)", () => {
    const expected = "someClass someClass hovered hovered";
    expect(
      classNames("someClass", { hovered: true }, ["someClass", "hovered"]),
    ).toBe(expected);
  });
});
