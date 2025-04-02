import type { NextApiRequest, NextApiResponse } from 'next';
import { SessionsClient } from '@google-cloud/dialogflow';
import * as uuid from 'uuid';

type Data = { response: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    if (req.method !== 'POST') {
        return res.status(405).json({ response: 'Method Not Allowed' });
    }

    const { query } = req.body;
    if (!query) {
        return res.status(400).json({ response: 'Query is required' });
    }

    try {
        const sessionId = uuid.v4();

        const sessionClient = new SessionsClient({
            credentials: JSON.parse(process.env.DIALOGFLOW_CREDENTIALS as string),
        });

        const sessionPath = sessionClient.projectAgentSessionPath(
            process.env.DIALOGFLOW_PROJECT_ID as string,
            sessionId
        );

        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: query,
                    languageCode: 'es',
                },
            },
        };
        const responses = await sessionClient.detectIntent(request);
        const result = responses[0].queryResult;

        return res.status(200).json({ response: result?.fulfillmentText || 'No response from Dialogflow' });
    } catch (error) {
        console.error('Dialogflow Error:', error);
        return res.status(500).json({ response: 'Error connecting to Dialogflow' });
    }
}