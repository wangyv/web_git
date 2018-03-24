<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class User_model extends CI_Model {
    public function save($username, $pwd, $realname, $tel){
        $this -> db -> insert('t_user',array(
            'username' => $username,
            'pwd' => $pwd,
            'relname' => $realname,
            'tel' => $tel
        ));
        return $this -> db -> affected_rows();
    }
    public function find_by_name($username, $pwd){
        $query = $this -> db -> get_where('t_user',array(
            'username' => $username,
            'pwd' => $pwd,

        ));
        return $query -> row();
    }
    public function find_all(){
        return $this -> db -> get('t_user') -> result();
    }
    public function delete_item($id){
        $this -> db -> delete('t_user', array(
            'user_id' => $id
        ));
        return $this -> db -> affected_rows();
    }
    public function change_item($id){
        $query = $this -> db -> get_where('t_user',array(
            'user_id' => $id
        ));
        return $query -> row();
    }
    public function update_item($id, $username, $pwd, $realname, $tel){
        $query = $this -> db -> update('t_user',array(
            'username' => $username,
            'pwd' => $pwd,
            'relname' => $realname,
            'tel' => $tel
        ), array(
            'user_id' => $id
        ));
        return $this -> db -> affected_rows();
    }
}
