

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Only POST requests allowed' });
    }
  
    const { email } = req.body;
  
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email address' });
    }
  
    const airtableApiKey = process.env.AIRTABLE_API_KEY;
    const baseId = process.env.AIRTABLE_BASE_ID;
    const tableName = process.env.AIRTABLE_TABLE_NAME_EMAILS;
  
    try {
      const airtableUrl = `https://api.airtable.com/v0/${baseId}/${tableName}`;
      const airtableRes = await fetch(airtableUrl, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${airtableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Email: email,
              },
            },
          ],
        }),
      });
      
      const airtableData = await airtableRes.json(); // <-- Get Airtable response
      if (!airtableRes.ok) {
        console.error('Airtable error:', airtableData); // <-- Log error if Airtable fails
        return res.status(500).json({ message: 'Failed to save email', airtableData });
      }
      return res.status(200).json({ message: 'Email saved successfully', airtableData });
    } catch (error) {
      console.error('Server error:', error);
      return res.status(500).json({ message: 'Something went wrong', error });
    }
  }
  