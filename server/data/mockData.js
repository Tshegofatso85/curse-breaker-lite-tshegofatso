const mockData = {
  javascript: {
    issues: [
      {
        type: "ERROR",
        line: 2,
        message: "Undefined function 'fetchUser'.",
      },
      {
        type: "WARNING",
        line: 5,
        message: "Infinite loop detected.",
      },
      {
        type: "INFO",
        line: 8,
        message: "Variable 'data' is not defined.",
      },
    ],
    explanations:
      "Your code will crash because it calls an undefined function, creates an infinite loop, and returns a variable that doesn't exist.",
    fixedCode: `function getUserData(id) {
                    const user = getUser(id);

                    console.log(user.name);

                    return user;
                }`,
    fixes: [
      "Replaced fetchUser() with getUser().",
      "Removed the infinite loop.",
      "Returned the correct variable.",
    ],
  },

  python: {
    issues: [
      {
        type: "ERROR",
        line: 1,
        message: "Missing colon after function definition.",
      },
      {
        type: "WARNING",
        line: 3,
        message: "'price' attribute does not exist.",
      },
      {
        type: "INFO",
        line: 1,
        message: "Consider using try/except.",
      },
    ],
    explanations:
      "The function has syntax errors and assumes every item has a price attribute.",
    fixedCode: `def calculate_total(items):
                    total = 0

                    for item in items:
                        total += item

                    return total
                `,
    fixes: [
      "Added missing colons.",
      "Removed invalid price attribute.",
      "Improved function structure.",
    ],
  },

  html: {
    issues: [
      {
        type: "ERROR",
        line: 3,
        message: "Mismatched HTML tags.",
      },
      {
        type: "WARNING",
        line: 7,
        message: "Incomplete CSS property.",
      },
      {
        type: "INFO",
        line: 9,
        message: "Missing closing brace.",
      },
    ],
    explanations:
      "Your HTML contains invalid tags and the CSS block is incomplete.",
    fixedCode: `<div class="container">
                    <h1>Welcome</h1>
                    <p>Click here</p>
                </div>

                <style>
                    .container {
                        background: black;
                        color: white;
                    }
                </style>`,
    fixes: [
      "Corrected mismatched tags.",
      "Completed CSS declarations.",
      "Added the missing closing brace.",
    ],
  },
};

export default mockData;
