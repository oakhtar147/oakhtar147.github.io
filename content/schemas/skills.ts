export default {
  name: "skills",
  title: "Skills",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [{ type: "reference", to: { type: "about" } }],
    },
  ],
};
