if($_SERVER["REQUEST_METHOD"]) {

    if($_GET["currency"] === "now") {
        $data = file_get_contents('https://bazaparus.aristoff.ru/api/') 
        $data_raw = fson_decode($data, TRUE);

        print_r(json_encode($data_raw));
    }
}