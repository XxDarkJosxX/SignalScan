<?php 
    class Catalogos extends Controllers{
        public function __construct() {
            parent::__construct();
        }
        public function Catalogos(): void{

            $data['page_tag'] = "Catalogos";
            $data['page_title']= "";
            $data['page_name'] = "Catalogos";
            $data['page_js'] = "functioncatalogos.js";
            $this->views->getview($this,"catalogos",$data);
            
        }


    }
?>