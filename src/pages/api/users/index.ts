import handler from "@/lib/handlers/routeHandler"

handler.get(async (req, res) => {
    res.status(200).send({
        message: 'Huray!'
    })
})

export default handler;