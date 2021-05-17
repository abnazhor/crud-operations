export default (app) => {
    app.get("/consumption", async (req, res) => {
        const Schema = mongoose.Schema;

        const Consumption = mongoose.collection("consumptions");

        res.send(await Consumption.find())
    })
}