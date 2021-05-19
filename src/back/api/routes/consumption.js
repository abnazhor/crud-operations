import mongodb from "mongodb";
const { ObjectId } = mongodb;

export default (app) => {
    app.get("/consumptions", async (req, res) => {
        const db = client.db("consumptions");

        const consumptions = await db.collection("consumptions").find().toArray();

        res.status(200).send(consumptions)
    });
    
    app.get("/consumption/:consumptionid", async (req, res) => {
        const consumptionId = req.params.consumptionid;
        const db = client.db("consumptions");

        const consumption = await db.collection("consumptions").findOne({
            _id: ObjectId(consumptionId)
        });

        res.status(200).send(consumption)
    });

    app.post("/consumption", async (req, res) => {
        const newRowData = req.body;

        const db = client.db("consumptions");

        const result = await db.collection("consumptions").insertOne(
            {
                date: newRowData.date,
                hour: newRowData.hour,
                consumption: newRowData.consumption,
                price: newRowData.price,
                costPerHour: newRowData.costPerHour
            }
        );

        res.status(200).send({ inserted: result.insertedCount === 1 });
    });

    app.put("/consumption", async (req, res) => {
        const modifications = req.body;

        const db = client.db("consumptions");

        const result = await db.collection("consumptions").updateOne(
            {
                _id: ObjectId(modifications.consumptionId)
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

        res.status(200).send({updated: result.modifiedCount === 1});
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