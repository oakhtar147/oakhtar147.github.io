export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projects",
      title: "Projects",
      type: "array",
      validation: (Rule) => Rule.max(1),
      of: [{ type: "reference", to: { type: "about" } }],
    },
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
  ],
};
