module.exports = {
    async getAllThoughts(req, res) {
        try {
            const thoughts = {messsage: "hello"}

            res.json(thoughts)
        } catch (err) {
            console.log(err)
            res.status(500).json(err)

        }
    }
}