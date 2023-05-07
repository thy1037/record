# 无线网卡
这台个人台式机，CPU 是 Intel 的 i7-9700kf，主板是 MSI 的 Z390-ACE，自带板载 wifi 并配有外置天线，官网驱动是 Win10 的，Win11 下也可以正常使用，但 Linux（Debian）需要自己安装驱动才可以使用，功能包括使用 wifi 和 开启热点（Hotspot）

之前的安装方法忘记记录了，大致是安装系统（Debian）时会提示去少 xxx 驱动，该驱动在 non-free 仓库中无法安装，并且在每次开机时都会在启动中显示，根据提示型号搜索安装方法即可。但该驱动在近期的一次升级后失效了（[Updated Debian 11: 11.7 released](https://www.debian.org/News/2023/20230429)）。

以下是新方法：

## 查看网卡型号
```bash
$ lspci -nn
...
00:14.3 Network controller [0280]: Intel Corporation Wireless-AC 9560 [Jefferson Peak] [8086:a370] (rev 10)
...
```

如提示无此命令，通过 `apt install pciutils` 安装。（未验证，当初怎么解决的未记录）

## 安装网卡驱动
搜索网卡名称 Intel Wireless-AC 9560 可以找到[官方支持页面](https://www.intel.com/content/www/us/en/support/articles/000005511/wireless.html)，里面提供了该网卡的驱动 [iwlwifi-9000-pu-b0-jf-b0-34.618819.0.tgz](../resource/iwlwifi-9000-pu-b0-jf-b0-34.618819.0.tgz) 并介绍了安装方法 `1. Copy the files into the distribution-specific firmware directory, /lib/firmware` :

```bash
$ tar xvf iwlwifi-9000-pu-b0-jf-b0-34.618819.0.tgz
$ sudo cp iwlwifi-9000-pu-b0-jf-b0-34.618819.0/*.ucode /lib/firmware
# 重启电脑
```

重启电脑后即可看到无线网的标志，进设置也有了【Wi-Fi】一项。

> 为了支持更多的硬件，从 Debian 12 开始 firmware 好像会从 non-free 中移出，此举网友的呼声比较高，有支持的，也有认为这是破坏了 Debian 的绝对 Open & Free。
>
> 因此以后哪怕主仓库中没有这个网卡的驱动，应该也能不需要额外操作即可使用。
