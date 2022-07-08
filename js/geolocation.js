export  default function getGeolocation(id){
    const $id = document.getElementById(id);
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge:0
    };

    const success = position => {
        let coords = position.coords;
        // console.log(position);

        $id.innerHTML = `<table class="tg">
                            <thead>
                                <tr>
                                    <th colspan="2">Actual position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Latitude</td>
                                    <td>${coords.latitude}</td>
                                </tr>
                                <tr>
                                    <td>Longitude</td>
                                    <td>${coords.longitude}</td>
                                </tr>
                                <tr>
                                    <td>Presition</td>
                                    <td>${Math.round(coords.accuracy)} meters</td>
                                </tr>
                                <tr>
                                    <td colspan="2" class="google-maps-link"><a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},15z" target="_blank" rel="noopener">see on google maps</a></td>
                                </tr>
                            </tbody>
                        </table>`;
    }
    const error = err => {
        $id.innerHTML = `Error: ${err.code}: ${err.message}`;
        console.log(err);
    };

    navigator.geolocation.getCurrentPosition(success, error, options)
  
}
