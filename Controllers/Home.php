<?php 
    class Home extends Controllers{
        public function __construct() {
            parent::__construct();
        }
        public function Home(){

            $data['page_tag'] = "Home";
            $data['page_title']= "";
            $data['page_name'] = "Home";
            $data['page_js'] = "functionhome.js";
            $this->views->getview($this,"home",$data);
        }


    }
?>