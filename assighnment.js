const app = () => {
   return [React.createElement("h2", {}, "Friends List"),

   React.createElement("table", { className: "table w-50 alert alert-danger m-5" },

      React.createElement("thead", { className: "bg-primary text-light" },

         React.createElement("tr", {},
            React.createElement('th', {}, "Sr. No"),
            React.createElement("th", {}, "Surname"),
            React.createElement("th", {}, "Name"),
            React.createElement("th", {}, "Email"))),
      React.createElement("tbody", {},

         React.createElement('tr', {},

            React.createElement("td", {}, "1"),
            React.createElement("td", {}, "Mohammad"),
            React.createElement("td", {}, "Aamer"),
            React.createElement("td", {}, "Mohammadaamer@gmail.com")),

         React.createElement("tr", {},
            React.createElement("td", {}, "2"),
            React.createElement("td", {}, "Shaikh"),
            React.createElement("td", {}, "Majid"),
            React.createElement("td", {}, "Majid@gmail.com")),

         React.createElement("tr", {},
            React.createElement("td", {}, "3"),
            React.createElement("td", {}, "Shaikh"),
            React.createElement("td", {}, "Arbaj"),
            React.createElement("td", {}, "Arbaj@gmail.com")),

         React.createElement("tr", {},
            React.createElement("td", {}, "4"),
            React.createElement("td", {}, "Sayyed"),
            React.createElement("td", {}, "Zeshan"),
            React.createElement("td", {}, "zeshan@gmail.com")),

         React.createElement("tr", {},
            React.createElement("td", {}, "5"),
            React.createElement("td", {}, "khan"),
            React.createElement("td", {}, "Shoeb"),
            React.createElement("td", {}, "Shoeb@gmail.com")),

         React.createElement("tr", {},
            React.createElement("td", {}, "6"),
            React.createElement("td", {}, "Sayyed"),
            React.createElement("td", {}, "Rafiq"),
            React.createElement("td", {}, "rafiq@gmail.com"))))]
}



 ReactDOM.createRoot(document.getElementById("root")).render(
    React.createElement(app));