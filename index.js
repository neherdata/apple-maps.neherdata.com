const setupMapKitJs = async () => {
    if (!window.mapkit || window.mapkit.loadedLibraries.length === 0) {
        // mapkit.core.js or the libraries are not loaded yet.
        // Set up the callback and wait for it to be called.
        await new Promise((resolve) => {
            window.initMapKit = resolve;
        });

        // Clean up
        delete window.initMapKit;
    }

    // TODO: For production use, the JWT should not be hard-coded into JS.
    const jwt = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1YTTlQRlRTMkYifQ.eyJpc3MiOiI3UUFNM0xHU1NDIiwiaWF0IjoxNjc3OTIxNTQzLCJleHAiOjE3MDk1MTA0MDB9.Anu5SLkMd9vWuqVjDtWe9ZV8K7LlwBD0fEtD8TetmIdAnRdZaDQt3EQBa3EYqF3lVGvjvRm_GzRNpyZq6X8m9w";
    mapkit.init({
        authorizationCallback: (done) => {
            done(jwt);
        },
    });
};

const main = async () => {
    // const jwt = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1YTTlQRlRTMkYifQ.eyJpc3MiOiI3UUFNM0xHU1NDIiwiaWF0IjoxNjc3OTIxNTQzLCJleHAiOjE3MDk1MTA0MDB9.Anu5SLkMd9vWuqVjDtWe9ZV8K7LlwBD0fEtD8TetmIdAnRdZaDQt3EQBa3EYqF3lVGvjvRm_GzRNpyZq6X8m9w";
    await setupMapKitJs();
    var MarkerAnnotation = mapkit.MarkerAnnotation;

    const id = "I185846290D87B302";
    var secretariatcenter = new mapkit.Coordinate(40.3083382, -74.0697479);

    // Setting properties on creation:
    var ndsAnnotation = new MarkerAnnotation(secretariatcenter, {
        color: "pink",
        title: "Neher Data Systems",
        glyphText: "🏢",
    });

    const secretariat = new mapkit.CoordinateRegion(new mapkit.Coordinate(40.3083382, -74.0697479), new mapkit.CoordinateSpan(0.167647972, 0.354985255));

    var map = new mapkit.Map("map", {
        colorScheme: mapkit.Map.ColorSchemes.Adaptive,
        showsMapTypeControl: false,
        showsUserLocationControl: true,
        center: secretariatcenter,
    });

    // map.region = secretariat;
    // Add and show both annotations on the map
    map.showItems([ndsAnnotation]);
};

main();
