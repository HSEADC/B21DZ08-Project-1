import Airtable from 'airtable'

const token =
  'pat5iUSZmr3YNjCdk.98f4c68cbb6755aba829180499df71772d930fb654fa761106b9f61d42d28d03'

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: token
})

const base = Airtable.base('appnIO3QJrhlA5YKJ')

function getPostTeasers() {
  return new Promise((resolve, reject) => {
    const content = []

    base('Constellation')
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          // console.log(record.fields)
          content.push({
            id: record.id,
            title: record.fields['Title'],
            map: record.fields['Map'],
            zodiak: record.fields['Zodiak'],
            image: record.fields['Image'][0]['url'],
            url: record.fields['Url']
          })
        })

        resolve(content)
      })
  })
}

export { getPostTeasers }
