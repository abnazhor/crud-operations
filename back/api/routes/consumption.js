import mongodb from "mongodb";
const {ObjectId} = mongodb;

export default (app) => {
    app.get("/consumption", async (req, res) => {
        const db = client.db("consumptions");

        const consumptions = await db.collection("consumptions").find().toArray();

        res.status(200).send(consumptions)
    });

    app.put("/consumption", async (req, res) => {
        const modifications = req.body;

        const db = client.db("consumptions");

        db.collection("consumptions").updateOne(
            {
                uuid: modifications.uuid
            },
            {
                $set: {
                    date: modifications.date,
                    hour: modifications.hour,
                    consumption: modifications.consumption,
                    price: modifications.price,
                    costPerHour: modifications.costPerHour
                }
            }
        )
    });

    app.delete("/consumption/:consumptionId", async (req, res) => {
        const consumptionId = req.params.consumptionId;

        const collection = client.db("consumptions").collection("consumptions");
        await collection.deleteOne({
            _id: ObjectId(consumptionId)
        })

        res.status(200).send({
            deleted: true
        })
    });
}