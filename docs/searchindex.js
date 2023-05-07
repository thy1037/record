Object.assign(window.search, {"doc_urls":["chapter_1.html#chapter-1","pc.html#个人电脑记录","pc_wifi.html#无线网卡","pc_wifi.html#查看网卡型号","pc_wifi.html#安装网卡驱动"],"index":{"documentStore":{"docInfo":{"0":{"body":0,"breadcrumbs":4,"title":2},"1":{"body":0,"breadcrumbs":0,"title":0},"2":{"body":21,"breadcrumbs":0,"title":0},"3":{"body":19,"breadcrumbs":0,"title":0},"4":{"body":48,"breadcrumbs":0,"title":0}},"docs":{"0":{"body":"","breadcrumbs":"Chapter 1 » Chapter 1","id":"0","title":"Chapter 1"},"1":{"body":"","breadcrumbs":"个人电脑记录 » 个人电脑记录","id":"1","title":"个人电脑记录"},"2":{"body":"这台个人台式机，CPU 是 Intel 的 i7-9700kf，主板是 MSI 的 Z390-ACE，自带板载 wifi 并配有外置天线，官网驱动是 Win10 的，Win11 下也可以正常使用，但 Linux（Debian）需要自己安装驱动才可以使用，功能包括使用 wifi 和 开启热点（Hotspot） 之前的安装方法忘记记录了，大致是安装系统（Debian）时会提示去少 xxx 驱动，该驱动在 non-free 仓库中无法安装，并且在每次开机时都会在启动中显示，根据提示型号搜索安装方法即可。但该驱动在近期的一次升级后失效了（ Updated Debian 11: 11.7 released ）。 以下是新方法：","breadcrumbs":"个人电脑记录 » 无线网卡 » 无线网卡","id":"2","title":"无线网卡"},"3":{"body":"$ lspci -nn\n...\n00:14.3 Network controller [0280]: Intel Corporation Wireless-AC 9560 [Jefferson Peak] [8086:a370] (rev 10)\n... 如提示无此命令，通过 apt install pciutils 安装。（未验证，当初怎么解决的未记录）","breadcrumbs":"个人电脑记录 » 无线网卡 » 查看网卡型号","id":"3","title":"查看网卡型号"},"4":{"body":"搜索网卡名称 Intel Wireless-AC 9560 可以找到 官方支持页面 ，里面提供了该网卡的驱动 iwlwifi-9000-pu-b0-jf-b0-34.618819.0.tgz 并介绍了安装方法 1. Copy the files into the distribution-specific firmware directory, /lib/firmware : $ tar xvf iwlwifi-9000-pu-b0-jf-b0-34.618819.0.tgz\n$ sudo cp iwlwifi-9000-pu-b0-jf-b0-34.618819.0/*.ucode /lib/firmware\n# 重启电脑 重启电脑后即可看到无线网的标志，进设置也有了【Wi-Fi】一项。 为了支持更多的硬件，从 Debian 12 开始 firmware 好像会从 non-free 中移出，此举网友的呼声比较高，有支持的，也有认为这是破坏了 Debian 的绝对 Open & Free。 因此以后哪怕主仓库中没有这个网卡的驱动，应该也能不需要额外操作即可使用。","breadcrumbs":"个人电脑记录 » 无线网卡 » 安装网卡驱动","id":"4","title":"安装网卡驱动"}},"length":5,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"0":{":":{"1":{"4":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"8":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"1":{".":{"7":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}},"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":2,"docs":{"0":{"tf":1.0},"4":{"tf":1.0}}},"3":{"4":{".":{"6":{"1":{"8":{"8":{"1":{"9":{".":{"0":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"z":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"/":{"*":{".":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"0":{"8":{"6":{":":{"a":{"3":{"7":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"9":{"0":{"0":{"0":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"6":{"0":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"7":{"0":{"0":{"df":0,"docs":{},"k":{"df":0,"docs":{},"f":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"b":{"0":{"df":1,"docs":{"4":{"tf":2.449489742783178}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"p":{"df":1,"docs":{"4":{"tf":1.0}},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.4142135623730951}}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"i":{"7":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"l":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}}}}},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"f":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"l":{"df":0,"docs":{},"i":{"b":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"（":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"p":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"n":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"p":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"n":{"1":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}}}},"x":{"df":0,"docs":{},"v":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}},"x":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}},"z":{"3":{"9":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"breadcrumbs":{"root":{"0":{"0":{":":{"1":{"4":{".":{"3":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"2":{"8":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"1":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"1":{".":{"7":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":1,"docs":{"2":{"tf":1.0}}},"2":{"df":1,"docs":{"4":{"tf":1.0}}},"df":2,"docs":{"0":{"tf":1.7320508075688772},"4":{"tf":1.0}}},"3":{"4":{".":{"6":{"1":{"8":{"8":{"1":{"9":{".":{"0":{".":{"df":0,"docs":{},"t":{"df":0,"docs":{},"g":{"df":0,"docs":{},"z":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}}}},"/":{"*":{".":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"4":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"0":{"8":{"6":{":":{"a":{"3":{"7":{"0":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"9":{"0":{"0":{"0":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"5":{"6":{"0":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"7":{"0":{"0":{"df":0,"docs":{},"k":{"df":0,"docs":{},"f":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"c":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"b":{"0":{"df":1,"docs":{"4":{"tf":2.449489742783178}}},"df":0,"docs":{}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"p":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}},"r":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":1,"docs":{"3":{"tf":1.0}}}}}}},"p":{"df":1,"docs":{"4":{"tf":1.0}},"u":{"df":1,"docs":{"2":{"tf":1.0}}}}},"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"4":{"tf":1.0}}}},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.4142135623730951}}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"i":{"7":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":3,"docs":{"2":{"tf":1.0},"3":{"tf":1.0},"4":{"tf":1.0}}}}}},"w":{"df":0,"docs":{},"l":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}}}}}}},"j":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}}}},"f":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"l":{"df":0,"docs":{},"i":{"b":{"/":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":0,"docs":{},"m":{"df":0,"docs":{},"w":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}}}}},"df":0,"docs":{}},"df":0,"docs":{},"n":{"df":0,"docs":{},"u":{"df":0,"docs":{},"x":{"df":0,"docs":{},"（":{"d":{"df":0,"docs":{},"e":{"b":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"s":{"df":0,"docs":{},"p":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"w":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"n":{"df":1,"docs":{"3":{"tf":1.0}}},"o":{"df":0,"docs":{},"n":{"df":2,"docs":{"2":{"tf":1.0},"4":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"4":{"tf":1.0}}}}}},"p":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"u":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}}}}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":1,"docs":{"4":{"tf":1.7320508075688772}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"v":{"df":1,"docs":{"3":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}}},"df":0,"docs":{}}},"u":{"d":{"df":0,"docs":{},"o":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"4":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"p":{"d":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"w":{"df":0,"docs":{},"i":{"df":1,"docs":{"4":{"tf":1.0}},"f":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"n":{"1":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"1":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"3":{"tf":1.0},"4":{"tf":1.0}}}}}}}}}},"x":{"df":0,"docs":{},"v":{"df":0,"docs":{},"f":{"df":1,"docs":{"4":{"tf":1.0}}}},"x":{"df":0,"docs":{},"x":{"df":1,"docs":{"2":{"tf":1.0}}}}},"z":{"3":{"9":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}},"title":{"root":{"1":{"df":1,"docs":{"0":{"tf":1.0}}},"c":{"df":0,"docs":{},"h":{"a":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});