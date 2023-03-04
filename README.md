# maps.neherdata.com

## Geocode

URL:
```
https://maps-api.apple.com/v1/geocode?q=106%20Secretariat%20Ct%2C%20Tinton%20Falls%2C%20New%20Jersey&limitToCountries=US&lang=en-US 
```
Response:
```
{
  "results": [
    {
      "coordinate": {
        "latitude": 40.3083382,
        "longitude": -74.0697479
      },
      "displayMapRegion": {
        "southLatitude": 40.3038466235794,
        "westLongitude": -74.0756379188998,
        "northLatitude": 40.3128297764206,
        "eastLongitude": -74.06385788110019
      },
      "name": "106 Secretariat Ct",
      "formattedAddressLines": [
        "106 Secretariat Ct",
        "Tinton Falls, NJ  07724",
        "United States"
      ],
      "structuredAddress": {
        "administrativeArea": "New Jersey",
        "administrativeAreaCode": "NJ",
        "locality": "Tinton Falls",
        "postCode": "07724",
        "thoroughfare": "Secretariat Ct",
        "subThoroughfare": "106",
        "fullThoroughfare": "106 Secretariat Ct"
      },
      "country": "United States",
      "countryCode": "US"
    }
  ]
}
```

## ETA

URL:
```
https://maps-api.apple.com/v1/etas?origin=40.3083382%2C%20-74.0697479&destinations=39.912910%2C%20-74.083650%7C40.398550%2C%20-74.194360&transportType=Automobile&departureDate=2023-03-10T09%3A33%3A46Z
```
Response:
```
{
  "etas": [
    {
      "destination": {
        "latitude": 39.91291,
        "longitude": -74.08365
      },
      "transportType": "Automobile",
      "distanceMeters": 58775,
      "expectedTravelTimeSeconds": 2554,
      "staticTravelTimeSeconds": 2424
    },
    {
      "destination": {
        "latitude": 40.39855,
        "longitude": -74.19436
      },
      "transportType": "Automobile",
      "distanceMeters": 19217,
      "expectedTravelTimeSeconds": 1203,
      "staticTravelTimeSeconds": 1104
    }
  ]
}
```