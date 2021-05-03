import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "dw8orbjo",
  dataset: "production",
  // apiVersion: "2019-01-29", // use current UTC date - see "specifying API version"!
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => {
  return builder.image(source);
};

export default client;
