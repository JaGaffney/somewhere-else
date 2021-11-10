export const bushcraft = {
  gathering: [
    {
      name: "bamboo",
      level: 1,
      exp: 25,
      time: 5.0,
      icon: "",
      itemsRecieved: [{ id: 10001, qty: 1 }],
    },
    {
      name: "ash tree",
      level: 10,
      exp: 25,
      time: 10.0,
      icon: "",
      itemsRecieved: [{ id: 10002, qty: 1 }],
    },
  ],
  production: [
    {
      name: "bamboo shortbow",
      level: 1,
      exp: 25,
      time: 5.0,
      icon: "",
      itemsRequired: [
        { id: 10001, qty: 1 },
        { id: 10002, qty: 5 },
      ],
      itemsRecieved: [{ id: 10001, qty: 1 }],
    },
    {
      name: "bamboo spear",
      level: 1,
      exp: 25,
      time: 5.0,
      icon: "",
      itemsRequired: [{ id: 10001, qty: 1 }],
      itemsRecieved: [{ id: 20006, qty: 1 }],
    },
  ],
}

export const metalwork = {
  gathering: [
    {
      name: "bamboo",
      level: 1,
      exp: 25,
      time: 5.0,
      icon: "",
      itemsRecieved: [{ id: 10001, qty: 1 }],
    },
  ],
  production: [
    {
      name: "bamboo shortbow",
      level: 1,
      exp: 25,
      time: 5.0,
      icon: "",
      itemsRequired: [
        { id: 10001, qty: 1 },
        { id: 10002, qty: 5 },
      ],
      itemsRecieved: [{ id: 10001, qty: 1 }],
    },
  ],
}
