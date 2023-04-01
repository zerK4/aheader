import handler from '../../../lib/handlers/routeHandler'
import { getSession } from 'next-auth/react'

handler.get(async (req, res) => {
    const session = await getSession({ req })

    if (!session) {
        return res.status(404).send({
            message: "No session found!"
        })
    }
    return res.status(200).send({
        session: session
    })
})