/**
 * ? Next api middleware.
 * * Helps for http moethods simplification.
 */
 import { NextApiRequest, NextApiResponse } from "next"
 import nextConnect from "next-connect"
 import logger from "../logger/logger"
 
 const handler = nextConnect<NextApiRequest, NextApiResponse>({
     onError(error, req, res) {
         logger.error(`Got error on defaultHandler, //: ${error}`)
         return res.status(501).json({ error: `Something happened! ${error}` })
     },
     onNoMatch(req, res) {
         logger.error(`No match in defaultHander, //: ${req.method} `)
         return res.status(501).json({ error: `Something happened! ${req.method}` })
     }
 })
 
 export default handler;
 