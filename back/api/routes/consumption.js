export default (app) => {
    app.get("/consumption", async (req, res) => {
        const Schema = mongoose.Schema;

        const Consumption = mongoose.model("consumptions", Schema({
            headers: [],
            rows: []
        }));

        res.send(await Consumption.find())
    })
}