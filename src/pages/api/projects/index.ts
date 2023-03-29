import handler from "../profiles";

handler.get(async (req, res) => {
    res.status(200).send({
        message: "Huray project"
    })
})

export default handler;
