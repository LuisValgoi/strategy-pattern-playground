interface IHomeSocialShareProvider {
  url: string;
  text: string;
}

// HomeSocialShareProviders: Record<Key, Value>
export const HomeSocialShareProviders: Record<
  string, // key
  IHomeSocialShareProvider // value
> = {
  Facebook: {
    url: "https://www.facebook.com/sharer/sharer.php?u=https://luisvalgoi.github.io/",
    text: "Facebook",
  },
  Twitter: {
    url: "https://twitter.com/intent/tweet?url=https://luisvalgoi.github.io/&text=",
    text: "Twitter",
  },
  Linkedin: {
    url: "https://www.linkedin.com/shareArticle?mini=true&url=https://luisvalgoi.github.io/",
    text: "Linkedin",
  },
};
