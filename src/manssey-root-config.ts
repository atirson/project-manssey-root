import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@manssey/administrator",
  app: () => System.import("@manssey/administrator"),
  activeWhen: ["/"]
});

start({
  urlRerouteOnly: true,
});
