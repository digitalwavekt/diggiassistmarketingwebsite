import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email,  mobileNumber, message } = req.body;

    if (!name || !email | !mobileNumber || !message ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      const client = await clientPromise;
      const db = client.db("contact-form"); // Name your database

      const collection = db.collection("messages");

      const result = await collection.insertOne({
        name,
        email,
        mobileNumber,
        message,
        createdAt: new Date(),
      });

      res.status(201).json({ message: "Message sent successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to save message", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
