<?php
/**
 * Created by PhpStorm.
 * User: ym
 * Date: 15-5-8
 * Time: 上午10:01
 */
$memcache = new Memcache();
$memcache ->connect("192.168.1.12",11111);
$memcache ->set('yjc','girl');
$get_v = $memcache->get('yjc');

echo $get_v;


$get_vv = $memcache->get('yjc1');
if($get_vv == null or  is_null($get_vv))
{
    echo "error";
}
else
{
    echo "world";
}


