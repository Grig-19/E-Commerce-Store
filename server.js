// sk_test_51LnUKJDM1jwCEz8OJG69szv032rIo4X0WrFMaXrqxu9g8fdohsL1y54JEUhFUKrqoBquVjN3AzpIFyrbN915bgcd00O5hqoGCJ
// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to
// const express = require("express");
// var cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51OXA7QKXAegDiFEBmGpdDmc59TmFSgr0Uo9FuMceMBn1MNWLtY0VHRkxp2BYcQcEP1tw3ppppIyl9tNS8gPpGcSB00rNX3TplE"
// );

// const app = express();

// // app.use(cors());
// app.use(
//   cors({
//     origin: "http://localhost:3000", // Update with your frontend URL
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// );

// app.use(express.static("public"));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello, this is the server!");
// });

// app.post("/checkout", async (req, res) => {
//   /*
//     req.body.items
//     [
//         {
//             id: 1,
//             quantity: 3
//         }
//     ]

//     stripe wants
//     [
//         {
//             price: 1,
//             quantity: 3
//         }
//     ]
//     */
//   console.log(req.body);
//   const items = req.body.items;
//   let lineItems = [];
//   items.forEach((item) => {
//     lineItems.push({
//       price: item.id,
//       quantity: item.quantity,
//     });
//   });
//   const session = await stripe.checkout.sessions.create({
//     line_items: lineItems,
//     mode: "payment",
//     success_url: "http://localhost:3000/success",
//     cancel_url: "http://localhost:3000/cancel",
//   });

//   res.send(
//     JSON.stringify({
//       url: session.url,
//     })
//   );
// });

// app.listen(4000, () => console.log("Listening on port 4000!"));

const express = require("express");
var cors = require("cors");
// const stripe = require("stripe")(
//   "sk_test_51OXA7QKXAegDiFEBmGpdDmc59TmFSgr0Uo9FuMceMBn1MNWLtY0VHRkxp2BYcQcEP1tw3ppppIyl9tNS8gPpGcSB00rNX3TplE"
// );

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.static("public"));
app.use(express.json());

const productsArray = [
  { id: "price_1OjHIQKXAegDiFEBgf9B1xZ0", price: 90.0 },
  { id: "price_1OjHJ9KXAegDiFEB9KfjNnA0", price: 90.0 },
  { id: "price_1OjHJrKXAegDiFEBH9WyaYsJ", price: 90.0 },
  { id: "price_1OjHltKXAegDiFEBR0oR7EvC", price: 90.0 },
];

function getProductData(id) {
  return productsArray.find((product) => product.id === id);
}

app.get("/", (req, res) => {
  res.send("Hello, this is the server!");
});

app.post("/checkout", async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = items
    .map((item) => {
      const productData = getProductData(item.id);
      if (productData) {
        return {
          price: item.id,
          quantity: item.quantity,
        };
      }
      return null;
    })
    .filter((item) => item !== null);

  if (lineItems.length === 0) {
    return res.status(400).send({ error: "No valid items for checkout." });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    res.status(500).send({ error: "Error creating checkout session" });
  }
});

app.listen(4000, () => console.log("Listening on port 4000!"));
