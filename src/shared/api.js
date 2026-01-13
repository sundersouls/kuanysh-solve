let data = [
  {
    id: "1",
    fullName: "Иванов Иван Иванович",
    email: "ivanov@example.com",
    phone: "+7 (999) 123-45-67",
  },
  {
    id: "2",
    fullName: "Петрова Мария Сергеевна",
    email: "petrova@example.com",
    phone: "+7 (999) 987-65-43",
  },
  {
    id: "3",
    fullName: "Сидоров Алексей Петрович",
    email: "sidorov@example.com",
    phone: "+7 (999) 456-78-90",
  },
];

const delay = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

export const dataApi = {
  getData: async () => {
    await delay();
    return [...data];
  },

  getRow: async (id) => {
    await delay();
    const row = data.find((c) => c.id === id);
    if (!row) {
      throw new Error("ошибка");
    }
    return row;
  },

  createRow: async (rowData) => {
    await delay();
    const newRow = {
      id: Date.now().toString(),
      ...rowData,
    };
    data.push(newRow);
    return newRow;
  },

  updateRow: async (rowData) => {
    await delay();
    const { id, ...restData } = rowData;
    const index = data.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new Error("ошибка");
    }
    data[index] = { id, ...restData };
    return data[index];
  },

  deleteRow: async (id) => {
    await delay();
    const index = data.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new Error("ошибка");
    }
    data.splice(index, 1);
    return id;
  },
};
