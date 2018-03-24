<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$this->load->view('welcome_message');
	}
	public function index1()
	{
		$this->load->view('index');
	}
	public function register()
	{
		$this->load->view('register');
	}
	public function login()
	{
		$this->load->view('login');
	}
	public function success()
	{
		$this->load->view('success');
	}
	public function save_user()
	{
		$username = $this -> input -> post('username');
		$pwd = $this -> input -> post('pwd');
		$realname = $this -> input -> post('realname');
		$tel = $this -> input -> post('tel');
		$this -> load -> model('user_model');
		$row = $this -> user_model -> save($username,$pwd,$realname,$tel);
		// echo "用户名：$username ,真实姓名：$realname ,联系方式：$tel";
		if($row > 0){
			redirect('welcome/success');
		}else{
			echo 'insert failed';
		}
	}
	public function check_login()
	{
		$username = $this -> input -> post('username');
		$pwd = $this -> input -> post('pwd');
		$this -> load -> model('user_model');
		$user = $this -> user_model ->find_by_name($username,$pwd);
		if($user){
			$this -> session -> set_userdata('login_name', $username);
			redirect('welcome/index1');
		}else{
			echo '不存在此用户';
		}
	}
	public function query_all(){
		$this -> load -> model('user_model');
		$list = $this -> user_model -> find_all();
		if($list){
			$this -> load -> view('user_list',array(
				'users' => $list
			));
		}else{
			echo '表不存在或表为空';
		}
	}
	public function delete_user($id){
		$this -> load -> model('user_model');
		$result = $this -> user_model -> delete_item($id);
		if($result>0){
			redirect('welcome/query_all');
		}else{
			echo '删除失败';
		}

	}
	public function change_user($id){
		$this -> load -> model('user_model');
		$result = $this -> user_model -> change_item($id);
		$this->load->view('update', array(
			'user' => $result
		));
	}
	public function update_user($id)
	{
		$username = $this -> input -> post('username');
		$pwd = $this -> input -> post('pwd');
		$realname = $this -> input -> post('realname');
		$tel = $this -> input -> post('tel');
		$this -> load -> model('user_model');
		$row = $this -> user_model -> update_item($id, $username, $pwd, $realname, $tel);
		// echo "用户名：$username ,真实姓名：$realname ,联系方式：$tel";
		if($row > 0){
			redirect('welcome/query_all');
		}else{
			echo 'update failed';
		}
	}
}
