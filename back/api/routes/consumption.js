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

    app.delete("/consumption/:consumptionid", async (req, res) => {
        const consumptionid = req.params.consumptionid;

        console.log(consumptionid);
    });
}