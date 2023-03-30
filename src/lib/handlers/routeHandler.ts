/**
 * ? Next api middleware.
 * * Helps for http moethods simplification.
 */
import authMiddleware from "@/middleware/withAuth"
import { NextApiRequest, NextApiResponse } from "next"
 import nc from 'next-connect'
 
 const handler = nc<NextApiRequest, NextApiResponse>({
     onError(error, req, res) {
         return res.status(501).json({ error: `Something happened! ${error}` })
     },
     onNoMatch(req, res) {
         return res.status(501).json({ error: `Something happened! ${req.method}` })
     }
 }).use(authMiddleware)
 
 export default handler;
 