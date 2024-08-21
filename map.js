function initMap() {
    var location = {lat: -6.200000, lng: 106.816666}; // Koordinat pusat peta

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12, // Zoom level
        center: location // Set center peta pada lokasi yang diinginkan
    });

    var marker = new google.maps.Marker({
        position: location, // Posisi marker
        map: map, // Tentukan peta tempat marker akan ditampilkan
        title: 'Your Location' // Judul marker saat dihover
    });
}
