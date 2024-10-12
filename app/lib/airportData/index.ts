export const airports = [
    {
      "name": "Indira Gandhi International Airport",
      "code": "DEL",
      "city": "New Delhi",
      "country": "India"
    },
    {
      "name": "Chhatrapati Shivaji Maharaj International Airport",
      "code": "BOM",
      "city": "Mumbai",
      "country": "India"
    },
    {
      "name": "John F. Kennedy International Airport",
      "code": "JFK",
      "city": "New York",
      "country": "United States"
    },
    {
      "name": "Dubai International Airport",
      "code": "DXB",
      "city": "Dubai",
      "country": "United Arab Emirates"
    },
    {
      "name": "Heathrow Airport",
      "code": "LHR",
      "city": "London",
      "country": "United Kingdom"
    },
    {
      "name": "Singapore Changi Airport",
      "code": "SIN",
      "city": "Singapore",
      "country": "Singapore"
    },
    {
      "name": "Los Angeles International Airport",
      "code": "LAX",
      "city": "Los Angeles",
      "country": "United States"
    },
    {
      "name": "Beijing Capital International Airport",
      "code": "PEK",
      "city": "Beijing",
      "country": "China"
    },
    {
      "name": "Sydney Kingsford Smith International Airport",
      "code": "SYD",
      "city": "Sydney",
      "country": "Australia"
    },
    {
      "name": "Tokyo Haneda Airport",
      "code": "HND",
      "city": "Tokyo",
      "country": "Japan"
    }
  ]

  export const flightData = [
    // DEL to BOM
    {
      "srcCode": "DEL",
      "destCode": "BOM",
      "takeoffTime": "2024-10-14T06:30:00",
      "landingTime": "2024-10-14T08:45:00",
      "price": 150,
      "flightCode": "AI305",
      "flightCompany": "Air India",
      "stops": ['']
    },
    {
      "srcCode": "DEL",
      "destCode": "BOM",
      "takeoffTime": "2024-10-14T09:30:00",
      "landingTime": "2024-10-14T11:45:00",
      "price": 145,
      "flightCode": "6E204",
      "flightCompany": "IndiGo",
      "stops": []
    },
    {
      "srcCode": "DEL",
      "destCode": "BOM",
      "takeoffTime": "2024-10-14T12:00:00",
      "landingTime": "2024-10-14T14:15:00",
      "price": 160,
      "flightCode": "VJ102",
      "flightCompany": "Vistara",
      "stops": []
    },
    {
      "srcCode": "DEL",
      "destCode": "BOM",
      "takeoffTime": "2024-10-14T15:00:00",
      "landingTime": "2024-10-14T17:15:00",
      "price": 155,
      "flightCode": "AI318",
      "flightCompany": "Air India",
      "stops": []
    },
    {
      "srcCode": "DEL",
      "destCode": "BOM",
      "takeoffTime": "2024-10-14T18:30:00",
      "landingTime": "2024-10-14T20:45:00",
      "price": 170,
      "flightCode": "SG407",
      "flightCompany": "IndiGo",
      "stops": []
    },
  
    // BOM to DEL
    {
      "srcCode": "BOM",
      "destCode": "DEL",
      "takeoffTime": "2024-10-14T07:30:00",
      "landingTime": "2024-10-14T09:45:00",
      "price": 160,
      "flightCode": "6E215",
      "flightCompany": "IndiGo",
      "stops": []
    },
    {
      "srcCode": "BOM",
      "destCode": "DEL",
      "takeoffTime": "2024-10-14T10:00:00",
      "landingTime": "2024-10-14T12:15:00",
      "price": 165,
      "flightCode": "AI320",
      "flightCompany": "Air India",
      "stops": []
    },
    {
      "srcCode": "BOM",
      "destCode": "DEL",
      "takeoffTime": "2024-10-14T13:00:00",
      "landingTime": "2024-10-14T15:15:00",
      "price": 150,
      "flightCode": "VJ210",
      "flightCompany": "Vistara",
      "stops": []
    },
    {
      "srcCode": "BOM",
      "destCode": "DEL",
      "takeoffTime": "2024-10-14T16:00:00",
      "landingTime": "2024-10-14T18:15:00",
      "price": 155,
      "flightCode": "SG423",
      "flightCompany": "IndiGo",
      "stops": []
    },
    {
      "srcCode": "BOM",
      "destCode": "DEL",
      "takeoffTime": "2024-10-14T19:00:00",
      "landingTime": "2024-10-14T21:15:00",
      "price": 175,
      "flightCode": "AI321",
      "flightCompany": "Air India",
      "stops": []
    },
    {
      "srcCode": "DEL",
      "destCode": "BOM",
      "takeoffTime": "2024-10-14T06:30:00",
      "landingTime": "2024-10-14T08:45:00",
      "price": 150,
      "flightCode": "AI305",
      "flightCompany": "Air India",
      "stops": []
    },
    {
      "srcCode": "BOM",
      "destCode": "DEL",
      "takeoffTime": "2024-10-14T18:00:00",
      "landingTime": "2024-10-14T20:30:00",
      "price": 170,
      "flightCode": "AI306",
      "flightCompany": "Air India",
      "stops": []
    },
    {
      "srcCode": "JFK",
      "destCode": "LHR",
      "takeoffTime": "2024-10-15T10:00:00",
      "landingTime": "2024-10-15T22:00:00",
      "price": 500,
      "flightCode": "BA178",
      "flightCompany": "British Airways",
      "stops": ["DXB"]
    },
    {
      "srcCode": "LHR",
      "destCode": "JFK",
      "takeoffTime": "2024-10-16T08:00:00",
      "landingTime": "2024-10-16T12:30:00",
      "price": 490,
      "flightCode": "BA179",
      "flightCompany": "British Airways",
      "stops": []
    },
    {
      "srcCode": "DXB",
      "destCode": "SIN",
      "takeoffTime": "2024-10-18T14:00:00",
      "landingTime": "2024-10-18T23:30:00",
      "price": 350,
      "flightCode": "EK432",
      "flightCompany": "Emirates",
      "stops": []
    },
    {
      "srcCode": "SIN",
      "destCode": "DXB",
      "takeoffTime": "2024-10-19T01:00:00",
      "landingTime": "2024-10-19T05:30:00",
      "price": 340,
      "flightCode": "EK433",
      "flightCompany": "Emirates",
      "stops": []
    },
    {
      "srcCode": "LAX",
      "destCode": "PEK",
      "takeoffTime": "2024-10-20T22:30:00",
      "landingTime": "2024-10-21T10:15:00",
      "price": 700,
      "flightCode": "CA988",
      "flightCompany": "Air China",
      "stops": []
    },
    {
      "srcCode": "PEK",
      "destCode": "LAX",
      "takeoffTime": "2024-10-25T11:00:00",
      "landingTime": "2024-10-25T19:00:00",
      "price": 690,
      "flightCode": "CA987",
      "flightCompany": "Air China",
      "stops": []
    },
    {
      "srcCode": "SYD",
      "destCode": "HND",
      "takeoffTime": "2024-10-22T09:45:00",
      "landingTime": "2024-10-22T18:55:00",
      "price": 600,
      "flightCode": "QF25",
      "flightCompany": "Qantas",
      "stops": []
    },
    {
      "srcCode": "HND",
      "destCode": "SYD",
      "takeoffTime": "2024-10-23T11:00:00",
      "landingTime": "2024-10-23T21:15:00",
      "price": 590,
      "flightCode": "QF26",
      "flightCompany": "Qantas",
      "stops": []
    },
    {
      "srcCode": "DEL",
      "destCode": "BOM",
      "takeoffTime": "2024-10-14T10:30:00",
      "landingTime": "2024-10-14T12:45:00",
      "price": 150,
      "flightCode": "AI305",
      "flightCompany": "Air India",
      "stops": ['']
    },{
      "srcCode": "DEL",
      "destCode": "BOM",
      "takeoffTime": "2024-10-14T23:30:00",
      "landingTime": "2024-10-15T01:45:00",
      "price": 145,
      "flightCode": "6E204",
      "flightCompany": "IndiGo",
      "stops": []
    }
  ];


  export const FlightCompanies = [
    {
      'name' : 'Emirates',
      'url' : 'https://logos-world.net/wp-content/uploads/2020/03/Emirates-Logo.png/'
    }
  ]

  export const companyImageURL = [
    {
      'name' : 'Air India',
      'url' : 'https://logos-world.net/wp-content/uploads/2023/02/Air-India-Logo.png'
    },
    {
      'name' : 'Qantas',
      'url' : 'https://logos-world.net/wp-content/uploads/2023/01/Qantas-Logo.png'
    },
    {
      'name' : 'Air india',
      'url' : 'https://logos-world.net/wp-content/uploads/2023/02/Air-India-Logo.png'
    },
    {
      'name' : 'IndiGo',
      'url' : 'https://logos-world.net/wp-content/uploads/2023/01/IndiGo-Logo.png'
    },
    {
      'name' : 'Vistara',
      'url' : 'https://logos-world.net/wp-content/uploads/2023/06/Vistara-Logo.png'
    },
  ]