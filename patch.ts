import { applyPatch, Operation } from "json-joy/es6/json-patch";
import jsonata from "jsonata";

// TODO: replace with top-level await
(async () => {
  const expression = jsonata("foo");

  const operations: Operation[] = [
    {
      op: "extend",
      path: "",
      props: {
        a: "b",
        c: 3,
        ex: await expression.evaluate({ foo: "bar" }),
      },
    },
  ];

  const result = applyPatch({ foo: "bar" }, operations, { mutate: true }).doc;

  console.log(result);
})();
