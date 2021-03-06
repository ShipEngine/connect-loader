

const config: OrderAppDefinition = {

  id: "d54ea601-9374-425c-8732-1f9eae4eae18",
  name: "My Order",
  description: "My Order description goes here",
  websiteURL: "https://www.my-order.com",
  logo: "../../../../logo.svg",
  icon: "../../../../logo.svg",

  connectionForm: "../../../../configs/forms/registration-form.json",
  settingsForm: "../../../../configs/forms/settings-form.json",

  connect: "../../../../modules/methods/login.js",
  getSalesOrdersByDate: "../../../../modules/methods/get-sales-orders-by-date.js",
  acknowledgeOrders: "../../../../modules/methods/acknowledge-orders.js"
};

export default config;
