export const inputs = [
  {
    type: "text",
    name: "name",
    label: "Name",
    placeholder: "Enter your name",
    required: true,
    onchange: (e) => {
      console.log(e.target.value);
    },
  },
  {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    required: true,
    onchange: (e) => {
      console.log(e.target.value);
    },
  },
];
