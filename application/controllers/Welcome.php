<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	public function __construct(){
		parent::__construct();
	}

	public function index()
	{
		$this->load->view('layouthome/header');
		$this->load->view('home/index');
		$this->load->view('layouthome/footer');

	}
}





/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
