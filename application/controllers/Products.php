<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
class Products extends CI_Controller {
  public function __construct(){
    parent::__construct();
  }
public function index()
{
	$this->load->view('layouthome/header');
	$this->load->view('home/products');
	$this->load->view('layouthome/footer');

}
}
