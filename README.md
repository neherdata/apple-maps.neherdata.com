<!-- <p align="center">
  <img width="300" height="300" src="https://github.com/neherdata.png">
</p>

<p align="center">
  <h1 align="center">Neher Data Systems</h1>
  <i>An agile and affordable data science and cybersecurity consultancy out to solve your problems when standard tech support can’t!</i>
</p>

[Website](http://www.neherdata.com) • [Email Us](mailto:tyler@neherdata.com?cc=joe@neherdata.com&subject=Contact%20Us%20-%20Found%20on%20GitHub) • [Twitter](https://twitter.com/neherdata) • [Facebook](https://www.facebook.com/neherdata) • [Instagram](https://instagram.com/neherdata) -->

<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="utf-8">

  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/Microsoft/vscode/extensions/markdown-language-features/media/markdown.css">
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/Microsoft/vscode/extensions/markdown-language-features/media/highlight.css">
 

</head>

<body class="vscode-body vscode-light">
  <p align="center">
    <img alt="ndsLogo" width="300" height="300" src="https://github.com/neherdata.png">
  </p>
  <h1 align="center">Neher Data Systems</h1>
  <p align="center"><i>An agile and affordable data science and cybersecurity consultancy out to solve your problems when standard tech
    support can’t!</i></p>
  </p>
  <p align="center"><a href="http://www.neherdata.com">Website</a> • <a
        href="mailto:tyler@neherdata.com?cc=joe@neherdata.com&amp;subject=Contact%20Us%20-%20Found%20on%20GitHub">Email
        Us</a> • <a href="https://twitter.com/neherdata">Twitter</a> • <a
        href="https://www.facebook.com/neherdata">Facebook</a> • <a href="https://instagram.com/neherdata">Instagram</a>
    </p>


<h1 align="center">Apple Maps MapKit JS</h1>
<h2 align="center"><i><a href="https://apple-maps.neherdata.com">apple-maps.neherdata.com</a></i></h2>


<p href="https://github.com/neherdata/maps-neherdata-com/actions/workflows/static.yml" align="center">
  <img alt="GitHub Pages Static Deploy" src="https://github.com/neherdata/maps-neherdata-com/actions/workflows/static.yml/badge.svg?branch=main">
</p>


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
