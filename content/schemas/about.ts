export default {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      options: {
        maxLength: 42,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "string",
    },
    {
      name: "whatIDo",
      title: "What I do",
      type: "string",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "contactData",
      title: "Contact Data",
      type: "reference",
      to: [{ type: "contact" }],
    },
    {
      name: "tools",
      title: "Tools",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "skillsData",
      title: "Skills Data",
      type: "reference",
      to: [{ type: "skills" }],
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              type: "string",
              name: "projectTitle",
              title: "Project Title",
            },
            {
              type: "string",
              name: "projectDescription",
              title: "Project Description",
            },
            {
              type: "url",
              name: "projectLink",
              title: "Project Link",
            },
            {
              type: "string",
              name: "projectType",
              title: "Project Type",
              initialValue: "Personal",
              options: {
                list: [
                  { title: "Personal", value: "Personal" },
                  { title: "Client", value: "Client" },
                  { title: "School", value: "School" },
                ],
              },
            },
          ],
        },
      ],
    },
    {
      name: "projectsData",
      title: "Projects Data",
      type: "reference",
      to: [{ type: "projects" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
};
