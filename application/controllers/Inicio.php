<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Inicio extends CI_Controller {
    
public function product($id = 1)
    {
        if ($id === null) {
            show_404();
        }

        // Fetch product details from the API
        $apiUrl = "https://fakestoreapi.com/products/$id";
        $response = file_get_contents($apiUrl);
        $data['product'] = json_decode($response, true);

        // Load the product view with product data
        $this->load->view('detailproduct.php', $data);
    }
}