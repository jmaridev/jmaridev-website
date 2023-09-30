export default {
  title: "Testimonial",
  name: "testimonial",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      description: "The name of the person who gave the testimonial.",
    },
    {
      title: "Position",
      name: "position",
      type: "string",
      description: "The position of the person who gave the testimonial.",
    },
    {
      title: "Testimonial",
      name: "testimonial",
      type: "text",
      description: "The testimonial itself.",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      description: "The image of the person who gave the testimonial.",
    },
  ],
};
