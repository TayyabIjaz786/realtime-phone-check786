export default function handler(req, res) {
  const { phone } = req.query;

  const data = [
    { phone: "1234567890", name: "Tayyab", email: "test@gmail.com" },
    { phone: "9876543210", name: "Ali", email: "ali@gmail.com" },
  ];

  const found = data.find(entry => entry.phone === phone);

  if (found) {
    res.status(200).json({
      found: true,
      data: {
        name: found.name,
        email: found.email
      }
    });
  } else {
    res.status(404).json({
      found: false,
      message: "Phone number not found"
    });
  }
}
