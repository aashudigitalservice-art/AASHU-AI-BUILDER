const brain = {
  project: "AASHU AI OS",

  think(command) {
    switch (command) {
      case "/build":
        return "Start Build";
      case "/next":
        return "Create AI Brain";
      case "/status":
        return "Project Building";
      case "/fix":
        return "Fix Errors";
      default:
        return "Unknown Command";
    }
  }
};

console.log(brain.think("/build"));
