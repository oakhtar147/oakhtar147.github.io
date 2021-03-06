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
      validation: (Rule) => Rule.max(1),
      of: [{ type: "reference", to: { type: "about" } }],
    },
  ],
};
