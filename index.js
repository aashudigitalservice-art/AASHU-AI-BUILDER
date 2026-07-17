console.log("🚀 AASHU AI BUILDER STARTED");

const project = {
  name: "AASHU AI OS",
  status: "Building",
  step: 1
};

function build(command) {
  console.log("Command:", command);

  if (command === "/build") {
    console.log("✅ Building AASHU AI OS...");
  } else if (command === "/status") {
    console.log(project);
  } else if (command === "/next") {
    console.log("➡️ Next: Create AI Brain");
  } else {
    console.log("❌ Unknown Command");
  }
}

build("/build");
